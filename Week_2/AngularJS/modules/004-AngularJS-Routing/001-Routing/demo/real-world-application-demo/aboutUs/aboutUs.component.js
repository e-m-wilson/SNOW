angular
    .module('aboutUs')
    .component('aboutUs', {
        templateUrl: 'aboutUs/aboutUs.template.html',
        controller: function myAboutUsController() {
            
            var self = this;
            self.date = new Date();
        }
    });