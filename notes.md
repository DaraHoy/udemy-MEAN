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
----------------------------------

        Lecture 27

- Nested schemas for subdocuments
- Storing geolocation coordinates
- Create spherical index for geospatial data

To reference a sub document, create a schema for the subdoc and reference it in the parent document
Nested schemas need to be defined BEFORE the parent schema
----------------------------------------------------------

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
------------------------------------------------------

        Lecture 29

- Ensure data is correct
- Get multiple subdocuments
- Get individual subdocuments

Create routes for GET reviews & Get one review, routes/index.js
Create reviews controllers
--------------------------

        Lecture 30

- API route filtering
- Creating geoJSONpoint
- Using Mongoose to find nearby places
- Specify search limits

Adding check for query string params lat & long
per Cliff's notes on using mongoDB aggregate method to replace geoNear in node
query filtering is a method on a url path that returns specific info, rather than creating a path sepecifically for filtering use query string filtering on objects like /hotels
------------------------------------------

        Lecture 31

- Golden rules of API design
- Trapping several types of errors
- Returning appropriate HTTP status codes

GOLDEN RULL OF API
* Always return a response
* Return the correct HTTP status code
* Return contents or a message

Validate query before .find() but after variables(offset, count) are intialized

STATUS CODES:
1. 400: Bad Request
2. 500: Internal server error
3. 201: Created
4. 204: No Content

Harden api route for getAll and getOne
--------------------------------------

        Lecture 32
- Configure Express router
- Create new documents using mongoose
- Create new sub documents using mongoose

        Configure Express Router
1. chain .post to route definition url/hotel
        - delete native diver code
        -

update the route for /hotel .post, update addOne ctrlr to use mongoose function .create() which will accept the form data.
creater helper function to _splitarray for form submission keys that takes in multiple values like photos and services

write new controller for reviewsAddOne
- include new .post to reviews route
- write the reviewsAddOne method to the reviews ctrlr

---------------------------------------
        Lecture 33
1. Considerations for using PUT
  * Update route with a put method for hotels
  * Update route with a put method for reviews
  * PUT meant for updating entire document NOT, PATCH for partial

2. Updating a Mongoose model instance
  * Steps for updating instance
    1. Find specific document to create a model instance
      * Add exclusion rules for subdocument using .select()
    2. Update the data in the model instance
      * Update using .notation to set form data to the model instance 'doc'
    3. Save the model instance
    4. Send the response to the requester
3. Saving the instance back as a MongoDB document

-------------------------------------------------
        Lecture 34
1. Using the HTTP "DELETE" method
2. Deleting documents using a Mongoose model method
3. Deleting sub-documents using a Mongoose helper method




