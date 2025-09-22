angular
    .module('mainComp')
    .component('mainComp', {
        templateUrl: 'container/mainComp/mainComp.template.html',
        controller: function myOtherComponentController() {
            this.name = 'John Doe';
        }
    });