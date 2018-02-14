- Listing db and collections
- Creating databases, collections, & documents
- Retrieving documents

MongoDB commands:
show dbs
use *
    if using a db that does not exist use creates a db under the name provided but will not exist until data is added.
show collections
db.createCollections("*")
    creates a collection named *
db.dbName.insert({key: value})
    inserts a new document into the database
db.dbNmae.find()
    returns all documents within collection
db.dbNmae.find().pretty()
    formats data to json

example of multiple insert:
db.meantest.insert([{
    name: "Express",
    role: "Web Application Server"
}, {
    name: "Angular",
    role: "Front-end framework"
}, {
    name: "Node.js",
    role: "Platform"
}])