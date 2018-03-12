angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($route, $routeParams, hotelDataFactory) {
    var vm = this;
    //assign a variable to the url id parameter
    var id = $routeParams.id;
    //api call to show one endpoint
    hotelDataFactory.hotelDisplay(id).then(function(response) {
        //assign the response data to a view model object e.g 'hotel'
        console.log(response)
        vm.hotel = response;
        vm.stars = _getStarsRatings(response.stars)
    });


    function _getStarsRatings(stars) {
        return new Array(stars);
    }

    vm.addReview = function() {
    var postData = {
      name: vm.name,
      rating: vm.rating,
      review: vm.review
    };
    if (vm.reviewForm.$valid) {
      hotelDataFactory.postReview(id, postData).then(function(response) {
        // If post wass successful 'response.status' returns '200' page will refresh automatically
        if (response) {
            console.log('restart!', response);

          $route.reload();
        }
      }).catch(function(error) {
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  };
}
