angular.module('meanhotel').controller('HotelController', HotelController);

function HotelController($routeParams, hotelDataFactory) {
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
}

function _getStarsRatings(stars) {
    return new Array(stars);
}
