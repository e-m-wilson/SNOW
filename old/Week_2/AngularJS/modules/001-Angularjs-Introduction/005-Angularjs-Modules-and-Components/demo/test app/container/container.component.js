angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: function myComponentController() {
            this.name = 'John Doe';
        }
    });