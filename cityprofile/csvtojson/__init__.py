#!/usr/bin/python
# based on http://www.idiotinside.com/2015/09/18/csv-json-pretty-print-python/

import getopt
import sys

from cityprofile.csvtojson.csvtojson import read_csv_file, write_json_file


# Get Command Line Arguments
def main(argv):
    help_message = '__init__.py -i <path to inputfile> -o <path to outputfile>'

    input_file = ''
    output_file = ''
    try:
        opts, args = getopt.getopt(argv, "hi:o:", ["ifile=", "ofile="])
    except getopt.GetoptError:
        print(help_message)
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print(help_message)
            sys.exit()
        elif opt in ("-i", "--ifile"):
            input_file = arg
        elif opt in ("-o", "--ofile"):
            output_file = arg
    csv_rows = read_csv_file(input_file)
    write_json_file(csv_rows, output_file)


if __name__ == "__main__":
    main(sys.argv[1:])
