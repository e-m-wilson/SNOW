angular
    .module('home')
    .component('home', {
        templateUrl: 'home/home.template.html',
        controller: ['httpCalloutsService', function myHomeController(httpCalloutsService) {
            
            var self = this;
            self.joke;

            self.getJoke = function() {
                httpCalloutsService.getJoke().then(function(response) {
                    self.joke = response.data.value;
                });
            }
        }]
    });