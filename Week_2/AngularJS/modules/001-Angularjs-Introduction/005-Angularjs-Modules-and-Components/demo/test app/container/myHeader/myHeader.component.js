angular
    .module('myHeader')
    .component('myHeader', {
        templateUrl: 'container/myHeader/myHeader.template.html',
        controller: function myOtherComponentController() {
            this.name = 'John Doe';
        }
    });