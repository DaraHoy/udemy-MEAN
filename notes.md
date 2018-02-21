Section 3 Mongoose & REST api
-----------------------------

        Lecture 25

- Installing Mongoose
- Creating the database connection
- Tracking connection events
- Close connetion on app restart

npm install --save mongoose
Create mongoose connection file 'db.js'
---------------------------------------

        Lecture 26

- Adding schemas to the application
- Assigning data types
- Basic data validation
- Setting default values
- Compiling models

Create hotel.model.js
create schemas
create property objects for more controler of schema properties
Schema allows you to define / initialize / validate the data
Bring in schema and model in db.js

        Lecture 27

- Nested schemas for subdocuments
- Storing geolocation coordinates
- Create spherical index for geospatial data

To reference a sub document, create a schema for the subdoc and reference it in the parent document
Nested schemas need to be defined BEFORE the parent schema

        Lecture 28
- Using Mongoose and models inside controllers
- Find multiple documents
- Find a subset of documents
- Get an individual document

remove all instances of the native driver from our controller file (replace mongoDB connection requires)
require mongoose
add reference to our model
update getAll controller to use mongoose
Mongoose sits on top of Mongo so skip() and limit() methods can still be used
