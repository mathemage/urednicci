#!/usr/bin/python
# based on http://www.idiotinside.com/2015/09/18/csv-json-pretty-print-python/
import os

from cityprofile.csvtojson.csvtojson import read_csv_file, get_pretty_json_string

RESOURCES_DIR = "../resources"


def check_with_misc_filters(csv_row):
    # print("csv_row['uzemiz_cis'] == {}".format(csv_row['uzemiz_cis']))
    return csv_row['uzemiz_cis'] == ''


def lookup_city_in_dataset(city_name, csv_content, metadata):
    x_column_name = metadata['x_column_name']
    y_column_name = metadata['y_column_name']
    city_column_name = metadata['city_column_name']
    chart_names = metadata['chart_names']
    chart_names_column_name = metadata['chart_names_column_name']
    chart_xy_data = []
    for chart_name in chart_names:
        filtered_content = [{'x': csv_row[x_column_name], 'y': csv_row[y_column_name]}
                            for csv_row in csv_content
                            if csv_row[city_column_name] == city_name
                            and csv_row[chart_names_column_name] == chart_name
                            and check_with_misc_filters(csv_row)]
        chart_xy_data.append({chart_name: filtered_content})
    return chart_xy_data


def lookup_city(city_name):
    datasets = [csv_file for csv_file in os.listdir(RESOURCES_DIR) if csv_file.endswith(".csv")]
    metadatasets = {
        'navstevnost-turistu-small.csv': {
            'x_column_name': 'rok',
            'y_column_name': 'hodnota',
            'city_column_name': 'uzemi_txt',
            'chart_names': ['Počet turistů', "Počet přenocování turistů"],
            'chart_names_column_name': 'stapro_txt'
        }
    }

    for dataset in datasets:
        filepath = "{}/{}".format(RESOURCES_DIR, dataset)
        print('Exploring "{}" ...'.format(filepath))
        csv_content = read_csv_file(filepath)
        chart_xy_data = lookup_city_in_dataset(city_name, csv_content, metadatasets[dataset])
        json_of_dataset = {dataset: chart_xy_data}
        print(get_pretty_json_string(json_of_dataset))
