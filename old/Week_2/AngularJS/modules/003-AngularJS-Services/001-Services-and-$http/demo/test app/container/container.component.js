angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: ['myFactoryServiceId', 'myServiceMethodService', '$http', function(myFactoryServiceId, myServiceMethodService, $http) {
            
            var self = this;
            self.username = myServiceMethodService.username;
            self.factoryServiceMessage;
            self.methodServiceMessage;
            self.joke;
            self.input;
            self.pokemonImg;
            self.abilities;
            self.moves;

            self.myFunc = function() {
                self.factoryServiceMessage = myFactoryServiceId.myServiceFunction();
                myServiceMethodService.myFunc();
                self.methodServiceMessage = myServiceMethodService.message;

    
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

            self.pokemonQuery = function() {

                
                var q = self.input.toLowerCase();
                $http({
                    method: 'GET',
                    url: 'https://pokeapi.co/api/v2/pokemon/' + q
                  }).then(function successCallback(response) {
                      // this callback will be called asynchronously
                      // when the response is available
                        self.abilities = response.data.abilities;
                        self.moves = response.data.moves;
                        self.pokemonImg = response.data.sprites.front_default;
                    }, function errorCallback(response) {
                      // called asynchronously if an error occurs
                      // or server returns response with an error status.
                    });
            };
        }]  
    });