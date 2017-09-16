#!/usr/bin/python
# based on http://www.idiotinside.com/2015/09/18/csv-json-pretty-print-python/
import os

from cityprofile.csvtojson.csvtojson import read_csv_file, write_json_file

RESOURCES_DIR = "../resources"


def lookup_city(city_name):
    print("Looking up the city of {}...".format(city_name))
    datasets = [csv_file for csv_file in os.listdir(RESOURCES_DIR) if csv_file.endswith(".csv")]

    for dataset in datasets:
        filepath = "{}/{}".format(RESOURCES_DIR, dataset)
        print(filepath)
        csv_rows = read_csv_file(filepath)
        write_json_file(csv_rows, "output.json")
