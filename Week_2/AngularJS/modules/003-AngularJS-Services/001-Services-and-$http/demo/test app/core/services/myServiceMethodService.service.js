var serviceModule = angular.module('myServiceMethodService', []);

serviceModule.service('myServiceMethodService', function() {

    var self = this;
    self.username = 'johndoe1337@fakemail.com';
    self.message;

    self.myFunc = function() {
        self.message = 'This prints from my service using the service method!';
    }


});