angular.module('properties')
    .component('properties', {
        templateUrl: 'container/properties/properties.template.html',
        controller: ['$http', function propertiesController($http) {

            var self = this;
            self.joke;

            self.propertyList = [
                {name: 'Cool Property 1', price: 3000},
                {name: 'Cool Property 2', price: 30000000}
            ];

            self.getJoke = function() {
                $http({
                method: 'GET',
                url: 'https://api.chucknorris.io/jokes/random?category=dev'
              }).then(function successCallback(response) {
                  // this callback will be called asynchronously
                  // when the response is available
                    self.joke = response.data.value;
                }, function errorCallback(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                });
            }
            
        }]
    })