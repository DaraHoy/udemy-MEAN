- Importing / Exporting BSON data
- Importing / Exporting JSON data
- When to use different approach

MongoDB Utilities:

BSON-based utilities
    BSON is Binary JSON, MongoDB stores all of its data as binary

$ mongodump
    creates an export of a db, if --db flag is omitted mongodump will create an export of all dbs
    mongodump --db meantest
    by default mongodump saves the exported db in a file called dump within the current working directory
    mongodump --db meantest --gzip
    tells the export to be put into a gzip file, useful for large size dbs

$ mongorestore
    imports or restore a db
    mongorestore --db mean2
    if --db flag is omitted then a new db would be created
    mongodump --db meantest --gzip dump/meantest
    tells import to look for a gzip file within the provided filepath

JSON-based utilities

$ mongoexports --db meantest --collection tech
    the --collection flag is required because mongoexports is used on a single collection at a time
    to output to a a file you need the --out flag that specify the file to be outputted to
    mongoexports --db meantest --collection tech --out api/data/tech.json
    this will create tech.json and output the collection to it
    --jsonArray will format export data into an array
    --pretty will make json array human readable

$ mongoimport --db mean3 --collection tech --jsonArray MEAN/api/data/tech.json
    imports / creates new db called mean 3 with a collection named tech using the JSON array found in tech.json