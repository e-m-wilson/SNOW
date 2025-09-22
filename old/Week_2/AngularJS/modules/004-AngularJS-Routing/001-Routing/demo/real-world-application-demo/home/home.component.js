angular
    .module('home')
    .component('home', {
        templateUrl: 'home/home.template.html',
        controller: ['httpCalloutsService', function myHomeController(httpCalloutsService) {
            
            var self = this;
            self.lat;
            self.lon;
            self.currentWeather = {};

            self.getWeather = function() {

                httpCalloutsService.getWeather(self.lat, self.lon).then(function(response) {
                    self.currentWeather.tempCurrent = response.data.current_weather.temperature;
                    self.currentWeather.tempHigh = response.data.daily.temperature_2m_max[0];
                    self.currentWeather.tempLow = response.data.daily.temperature_2m_min[0];
                    console.log(response);
                });
            }
        }]
    });