var httpCalloutsServiceModule = angular.module('httpCalloutsServiceModule', []);

httpCalloutsServiceModule.factory('httpCalloutsService', function($http) {

    var serviceObject = {}

    serviceObject.getWeather = function(lat, lon) {
       return $http.get('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lon + '&hourly=temperature_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&forecast_days=1&timezone=auto');
    };
    
    return serviceObject;
});