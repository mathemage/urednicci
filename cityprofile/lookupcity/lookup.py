#!/usr/bin/python
# based on http://www.idiotinside.com/2015/09/18/csv-json-pretty-print-python/
import os

from cityprofile.csvtojson.csvtojson import read_csv_file, get_pretty_json_string

RESOURCES_DIR = "../resources"


def lookup_city(city_name):
    print("Looking up the city of {}...".format(city_name))
    datasets = [csv_file for csv_file in os.listdir(RESOURCES_DIR) if csv_file.endswith(".csv")]

    for dataset in datasets:
        filepath = "{}/{}".format(RESOURCES_DIR, dataset)
        print('Exploring "{}" ...'.format(filepath))
        csv_content = read_csv_file(filepath)
        json_of_dataset = {dataset: csv_content}
        print(get_pretty_json_string(json_of_dataset))
