angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/', {
        template: '<home></home>'
      }).
        when('/home', {
          template: '<home></home>'
        }).
        when('/aboutUs', {
          template: '<about-us></about-us>'
        }).
        when('/error', {
          template: '<error></error>'
        }).
        otherwise('/error');
    }
  ]);