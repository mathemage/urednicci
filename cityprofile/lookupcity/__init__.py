#!/usr/bin/python
# based on http://www.idiotinside.com/2015/09/18/csv-json-pretty-print-python/

import getopt
import sys

from cityprofile.lookupcity.lookup import lookup_city


# Get Command Line Arguments
def main(argv):
    help_message = 'lookup.py -c <cityname>'

    city_name = ''
    try:
        opts, args = getopt.getopt(argv, "hc:", ["city="])
    except getopt.GetoptError:
        print(help_message)
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print(help_message)
            sys.exit()
        elif opt in ("-c", "--city"):
            city_name = arg
    lookup_city(city_name)


if __name__ == "__main__":
    main(sys.argv[1:])
