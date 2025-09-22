var myFactoryServiceModule = angular.module('myFactoryService', []);

myFactoryServiceModule.factory('myFactoryServiceId', function() {

    var serviceObject = {}

    serviceObject.myServiceFunction = function() {
       return 'this prints from my factory service!'; 
    };
    
    return serviceObject;
});