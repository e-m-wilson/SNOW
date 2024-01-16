angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/', {
        template: '<properties></properties>'
      }).
        when('/properties', {
          template: '<properties></properties>'
        }).
        when('/weather', {
          template: '<weather></weather>'
        }).
        when('/error', {
          template: '<error></error>'
        }).
        otherwise('/error');
    }
  ]);