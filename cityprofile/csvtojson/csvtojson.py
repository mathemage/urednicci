import csv
import json


def get_pretty_json_string(json_data):
    return json.dumps(json_data, sort_keys=False, indent=2, separators=(',', ': '), ensure_ascii=False)


def read_csv_file(filename):
    csv_rows = []
    with open(filename) as csvfile:
        reader = csv.DictReader(csvfile)
        title = reader.fieldnames
        for row in reader:
            csv_rows.extend([{title[i]: row[title[i]] for i in range(len(title))}])
    return csv_rows


def read_csv_file_with_filename_header(filename):
    return {filename: read_csv_file(filename)}


def write_json_file(csv_rows, json_file):
    with open(json_file, "w") as f:
        f.write(get_pretty_json_string(csv_rows))
