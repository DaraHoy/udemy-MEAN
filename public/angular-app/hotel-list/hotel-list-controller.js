angular.module('meanhotel').controller('HotelsController', HotelsController);

function HotelsController($http) {
    var vm = this;
    vm.title = 'Mean Hotel App'
    // $http.method('endpoint').then(function(response){})catch(failed)
    $http.get('/api/hotels?count=10').then(function(response){
        //console.log(response)
        vm.hotels = response.data;
    })
}