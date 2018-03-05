angular.module('meanhotel').factory('hotelDataFactory', hotelDataFactory);

function hotelDataFactory($http) {
    // returns function
    return {
        hotelList: hotelList,
        hotelDisplay: hotelDisplay
    }

    function hotelList() {
        // return show all
        return $http.get('/api/hotels?count=10').then(complete).catch(failed);
    }

    function hotelDisplay(id) {
        // return show one
        return $http.get('/api/hotels/' + id).then(complete).catch(failed);
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        console.log(error.statusText);
    }
};
