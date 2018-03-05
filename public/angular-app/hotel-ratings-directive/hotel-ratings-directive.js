angular.module('meanhotel').directive('hotelRating', hotelRating);

// angular translates the directive name from hotelRating to hotel-rating when in html
function hotelRating() {
    //directives in angular must return somthing
    return {
        //restrict forces the directive into a type: E: element, A: attribute, EA: for both
        restrict: 'EA',
        template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{star}}</span>',
        bindToController: true,
        controller: 'HotelController',
        controllerAs: 'vm',
        scope: {
            stars: '@'
        }
    }
}
