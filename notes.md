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
currency
```
ng-init="amount = 1234.50"
<p> {{amount | currency}} </p> // $1,234.50
example of filtering with parameters
<p> {{amount | currency: "¢"}} </p> // ¢1,234.50

```
uppercase / lowercase
```
<p>{{string|uppercase}}</p>
```
date
```
ng-init="myDate = 1399648945000"
<p> {{myDate | date}} </p> // May 9, 2014
example of filtering with parameters
<p> {{myDate | date: 'yyyy - MMMM - d (H:m)'}} </p>
// 2014 - May - 9 (17:22)
```
limitTo: limits number of elements in an array
orderBy: sorts array items on ng-repeat
filter
----------------------------------------
        Lecture 38 + 39
1. Controllers
2. $scope
  * grants an element the scope assoaciated with the controller
3. controllerAs
4. Modules

--------------------------------------
        Lecture 40
- SPA (Single Page Apps)
  * Use the ng-view directive to update the page with the requested view
- Routes
  1. Include scripts for route dependency
  2. Include route dependency in myApp, 'ngRoute'
  3. configure the $routeProvider
- Templates
  * Templates used as views when route reaches a path
  * Use templateUrl to asssign a template path

----------------------------------------------
        Lecture 41-43
     Built-in Services
- $routeProvider
- $http
- custom services
- factory
- custom filters

---------------------
        Lecture 44
        SPA part 1
        GOAL: Setup angular to a working state
- create angular-app in public/
- add app.use() in app.js to include node_modules
- add script link for angular and angular-route to index.html
  *switch to CDN node_modules link not working, might be issue with app.use()
- include ngRout module
- attach config
- attach controller
- configure route provider to specify view
- set controller - 'vm' assign to 'this'

-----------------------------------------------------------------------------
        Lecture 45
        SPA part 2
        GOAL: Better file structure, API: Show all
- create folders within angular app for each endpoint
  * angular-app/hotel-list controller files for displaying all hotels
  * angular-app/hotel-display controller for files displaying single hotel
- remove controller code from app.js
- update template url
- include controller file to index.html
- Connect to your API
  * pass in the $http service into your controller function
  * send a get to your show all endpoint
  * assign the response.data to a variable e.g. 'vm.hotels = response.data'
  * include a 'ul', indide an 'li' tag attach a ng-repeat with the data item e.g. 'hotel in vm.hotels'

------------------------------------------------------------------------------------------------------
        Lecture 46
        SPA part 3
        GOAL: API: Show one, $http Factory
- Confirm endpoint 'api/hotels/:id' endpoint is working
- create controller + html for single hotel view
- include new controller to index
- pass '$http' + '$routeParams' to controller function
- add response object testing to hotel.html
- include '<a ng-href>' to hotels.html
  * '<li ng-repeat='hotel in vm.hotels'><a ng-href='#!/hotels/{{hotel._id}}'>{{hotel.name}}</a></li>'
  * notice the expression used to get the id {{hotel._id}} included as the link params
  * not sure what #! does but it fixed view render issue
- Create Factory for $http methods
  * hotelList - $http.get('/api/hotels').then(complete).catch(failed);
  * hotelDisplay - $http.get('/api/hotels/' + id).then(complete).catch(failed);
  * attach complete call back and error catching to methods
- Update controllers to pass in the Factory
  * replace api call with factory methods
  * hotelDataFactory.hotelList().then(function(response){
        //console.log(response)
        vm.hotels = response.data;
    })
- Show one controller (hotel-display-controller.js) keeps $routeParams service and replaces $http with Factory
- Include hotel-data-factory.js in index.js
-------------------------------------------

        Lecture 47
        SPA part 4
        GOAL: Build a custom directive (Stars)
- include additional information to hotel.html
- create directive folder and script file (/hotel-ratings-directive, hotel-ratings-directive.js)
- include directive script in index.html
- create stars attribute for the custom directive i.e 'stars="vm.stars"'
  * in order to access the 'vm.stars' property, we need to attach the controller to the directive
      * include the following properties to your custom directive
        - bindToController: true,
        - controller: 'HotelController',
        - controllerAs: 'vm',
        - scope: {
                stars: '@'
        }
- adjust template to iterate through stars:
  * template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{star}}</span>',
- create a helper function in hotel-controller to convert vm.stars number to an array, then iterate through the array creating a star glyphicon per index
- (OPTIONAL) create a component instead of a directive
------------------------------------------------------

        Lecture 48
        SPA final part
        GOAL: Form validation, post request to API endpoint
- Form validation attributes, used with form elements i.e 'input'
  * ng-minlength='number'
  * ng-maxlength='number'
  * ng-model='elementName' - binds to element
  * ng-pattern='/^[0-9]{2,3}$/' *use regular expressions, /^[0-9]{2,3}$/ means only numbers and 2-3 characters in length
  * '$prestine': the form has NOT been modified ie {{myForm.$pristine}} // returns true / false
  * '$dirty': the form HAS been modified ie {{myForm.$dirty}}
  * '$invalid': the form is NOT valid as is {{myForm.name.$invalid}} // returns true / false
- Combine with ng-show/if/hide
  * <div ng-show="myForm.name.$dirty && myForm.name.$invalid"></div>

- Include form elements in show one template
  * ng-submit='vm.addReview()' attribute on form element
- Create addReview() function in controller 'hotel-display-controller'
  * Collect the form data:
    var postData = {
        name: vm.name,
        rating: vm.rating,
        review: vm.review
    }
  * If the form is valid submit to factory method:
  if (vm.reviewForm.$valid) {
      hotelDataFactory.postReview(id, postData).then(function(response) {
        if (response.status === 200) {
          $route.reload();
        }
- Create $http.post method in factory
- Expose postReview() function from factory, include it in return object
- Update app.js (express) to include bodyParser json  as middle-wear since angular does not natively include urlencoded form data
- include $route.reload() inside display show one controller
------------------------------------------------------------

        Lecture 49
        Securing API

- Authentication
- JSON Web Tokens
- Backend
    1. User model: Since user info will be stored in our db we need to create a user schema
    2. require userSchema in db.js
    3. Create controller and export login/authntication functions
    4. Create routes in index.js for both methods
- Frontend
- Install bcrypt package 'npm i bcrypt-nodejs' bcrypt is used to hash / encrypt your passwords
  * .hashSync()create a hash from the password and sets the has into the db as the password
  * .compareSync() compares the password from the req to the pw stored in the db, dcrypted
------------------------------------------------------------------------------------------

        Lecture 50
        Adding JWT (json web token )
- npm install jsonwebtoken
- add JWT methods to the login function
  * sign()
    - paramaters include: payload, secret, expiresIn object
- create an authentication middleware function
- Add authentication middleware to the GET all route
- IF the token is not provided then the next() method inside authentication() will not run thus not allowing unauthorized users into the GET controller
- Middleware function must be called from the route definition
--------------------------------------------------------------

    Lecture 52
create main controller/ view
create navigation controller/view
create login-controller

[Bookmark] create intercepter