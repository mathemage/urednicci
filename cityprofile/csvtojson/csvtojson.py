import csv
import json


def pretty_json(json_data):
    return json.dumps(json_data, sort_keys=False, indent=2, separators=(',', ': '))


def read_csv_file(file):
    csv_rows = []
    with open(file) as csvfile:
        reader = csv.DictReader(csvfile)
        title = reader.fieldnames
        for row in reader:
            csv_rows.extend([{title[i]: row[title[i]] for i in range(len(title))}])
    return csv_rows


def write_json_file(csv_rows, json_file):
    with open(json_file, "w") as f:
        f.write(pretty_json(csv_rows))


def get_json_from_csv(csv_rows):
    return pretty_json(csv_rows)
