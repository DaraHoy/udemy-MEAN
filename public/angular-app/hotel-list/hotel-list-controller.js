angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController(hotelDataFactory) {
    var vm = this;
    vm.title = 'Mean Hotel App'
    // $http.method('endpoint').then(function(response){})catch(failed)
    hotelDataFactory.hotelList().then(function(response){
        console.log(response)
        vm.hotels = response;
    })
}