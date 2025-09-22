angular.module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: function containerController() {

            this.properties = true;
            this.aboutUs = false;

            this.handleNav = function(e) {
                if(e.target.textContent == 'About Us') {
                    this.aboutUs = true;
                    this.properties = false;   
                } else {
                    this.aboutUs = false;
                    this.properties = true;
                }
            }
        }
    })