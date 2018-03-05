angular.module('meanhotel').factory('hotelDataFactory', hotelDataFactory);

function hotelDataFactory($http) {
    // returns function
    return {
        hotelList: hotelList,
        hotelDisplay: hotelDisplay,
        postReview: postReview
    }

    function hotelList() {
        // return show all
        return $http.get('/api/hotels?count=10').then(complete).catch(failed);
    }

    function hotelDisplay(id) {
        // return show one
        return $http.get('/api/hotels/' + id).then(complete).catch(failed);
    }

    function postReview(id, review){
        // returns post response, second argument is the review body
        return $http.post('api/hotels/' + id + '/reviews', review).then(complete).catch(failed);
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        console.log(error.statusText);
    }
};
