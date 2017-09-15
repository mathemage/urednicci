#!/usr/bin/python
# based on http://www.idiotinside.com/2015/09/18/csv-json-pretty-print-python/

import sys, getopt
import csv
import json


# Get Command Line Arguments
def main(argv):
    input_file = ''
    output_file = ''
    try:
        opts, args = getopt.getopt(argv, "hi:o:f:", ["ifile=", "ofile=", "format="])
    except getopt.GetoptError:
        print('csv_json.py -i <path to inputfile> -o <path to outputfile> -f <dump/pretty>')
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print('csv_json.py -i <path to inputfile> -o <path to outputfile> -f <dump/pretty>')
            sys.exit()
        elif opt in ("-i", "--ifile"):
            input_file = arg
        elif opt in ("-o", "--ofile"):
            output_file = arg
    read_csv(input_file, output_file, format)


# Read CSV File
def read_csv(file, json_file, format):
    csv_rows = []
    with open(file) as csvfile:
        reader = csv.DictReader(csvfile)
        title = reader.fieldnames
        for row in reader:
            csv_rows.extend([{title[i]: row[title[i]] for i in range(len(title))}])
        write_json(csv_rows, json_file)


# Convert csv data into json and write it
def write_json(data, json_file):
    with open(json_file, "w") as f:
        # f.write(json.dumps(data))
        f.write(json.dumps(data, sort_keys=False, indent=2, separators=(',', ': ')))


if __name__ == "__main__":
    main(sys.argv[1:])
