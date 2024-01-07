angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: function containerController() {
            this.showChild = false;
            this.checkPassphrase = function (textInput) {
                if(textInput == 'password') {
                    this.showChild = true;
                } else {
                    this.showChild = false;
                }
            }
        }
    });