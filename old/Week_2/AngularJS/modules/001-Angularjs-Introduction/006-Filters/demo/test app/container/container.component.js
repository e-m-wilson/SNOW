angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: function containerController() {
            this.currency = 34590.34;
            this.date = new Date();
            this.infinity = Infinity;
            this.negativeInfinity = -Infinity;
            this.number = 4355.2145;
            this.myArray = [
                {name: 'Bob', number: '444-257-0842'},
                {name: 'Mark', number: '444-262-2892'},
                {name: 'Joe', number: '999-444-2452'}
            ];

            // Data for real world application
            this.data = [
                {name: 'Bob', balance: 3443.44},
                {name: 'Mark', balance: 343.22},
                {name: 'Joe', balance: 3890.74},
                {name: 'Kate', balance: 879.90},
                {name: 'Susan', balance: 12690.46},
                {name: 'Sophia', balance: 1389.77}
            ]
        }
    });