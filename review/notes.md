- Querying he database to find documents
- Modifying the data returned e.g. sorting
- Updating documents
- Deleting documents

find() with key value data
example:
    db.dbName.find({"key": value})

sort() takes an object with a key to search by and a value of 1 for ascending and -1 for decending
example:
    db.meantest.find().sort({ "name": 1 })

Projection {} parameter takes a second paramter object that you can use to limit the number of fields that are returned from the query.
example:
    db.meantest.find({},{"_id": false, "name": false})

returns:

    { "role" : "Database" }
    { "role" : "Web Application Server" }
    { "role" : "Front-end framework" }
    { "role" : "Platform" }

note the id and name are ommitted

update() takes 2 paramaters the first finds the document you want to update the second uses the $set command to change the value.
example:
    db.meantest.update({"name": "Angular"}, {$set: {"name": "AngularJS"}})