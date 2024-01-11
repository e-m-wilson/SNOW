angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: function containerController() {
            
           this.isTrue = 'a string value';
           this.switchValue = 'parrotsfdsafdsa';
        }
    });