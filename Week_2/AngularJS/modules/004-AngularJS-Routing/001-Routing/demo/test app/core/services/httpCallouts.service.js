var httpCalloutsServiceModule = angular.module('httpCalloutsServiceModule', []);

httpCalloutsServiceModule.factory('httpCalloutsService', function($http) {

    var serviceObject = {}

    serviceObject.getJoke = function() {
       return $http.get('https://api.chucknorris.io/jokes/random?category=dev');
    };
    
    return serviceObject;
});