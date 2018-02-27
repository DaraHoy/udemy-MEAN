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
5. 404: Not Found

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
  * Use mongoose method findByIdAndRemove()
  * Get hotel id from req params
  * call remove method
  * execute it with exec()
3. Deleting sub-documents using a Mongoose helper method
  * Find parent document first
  * Use boilerplate code from reviewsUpdateOne
  * Change code update code to delete method

--------------------------------------------
        Lecture 35
     Intro to AngularJS

1. Expressions
        * AngularJS allows expressions to be evaluated inside html markup.
        * Expressions are idicated with {{ }}

2. Data-binding
        Any update to the model is also updated in the view and vice versa

Setup
  1. Add AngularJS library script ver 1.4.0
  2. attach ng-app directive to the <html> tag e.g. <html ng-app>
    * this gives the page the scope assoaciated to the angular directive

------------------------------------------
        Lecture 36 + 37

1. Built-in Directives
2. Built-in Filters
        Allows you to format data and expressions

** Direcetives **
ng-app: Defines the scope of your angular application

ng-model:

ng-init: Initialize a variable:
```
<div ng-init="name = Dara">
        {{name}} // Dara
<div>
```
ng-click: invokes function / expression on the tagged element

ng-if: evaluates expression if true then tagged element will show
```
<p ng-if="checked">secret message</p>
```
ng-show: same as ng-if but ng-if removes the element from dom while
ng-show gets css display: none property

ng-hide: inverse of show

ng-class: allows you to modify css class dynamically based on conditions
```
ng-class={red: guess != number, green: guess == number}
```
ng-repeat: allows you to iterate through a collection of elements
```
ng-repeat="number in numbers"
```
ng-options: "used to dynamically generate a list of <option> elements for the <select> element using the array or object obtained by evaluating the ngOptions comprehension expression."

ng-cloak:"The ngCloak directive is used to prevent the AngularJS html template from being briefly displayed by the browser in its raw (uncompiled) form while your application is loading. Use this directive to avoid the undesirable flicker effect caused by the html template display."

**Filters**
Currency
```
ng-init="amount = 1234.50"
<p> {{amount | currency}} </p> // $1,234.50
example of filtering with parameters
<p> {{amount | currency: "¢"}} </p> // ¢1,234.50

```
Uppercase / Lowercase
```
<p>{{string|uppercase}}</p>
```


**Questions**
What is a fogiving expression?

