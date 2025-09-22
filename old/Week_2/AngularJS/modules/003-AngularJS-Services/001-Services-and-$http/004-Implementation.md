# Services and $http : Implementation

## Let's help Luisa with the $http service! 

- Begin by creating a boilerplate AngularJS app and any required components. Refer to previous lessons if you need a refresher. 
- Within our component template we should include:
  - An input element that uses ng-model so we can retrieve the user's query.
  - A button with ng-click so we can fire off the function in our controller to launch our search.
  - An image element that uses the ng-src directive to accurately print out our image. Make sure to use expression syntax here, the ng-src directive needs an expression to evaluate. 
  - Two unordered lists that each use ng-repeat to print out our abilities and moves for the Pokemon.
- Within the component.js we will need:
  - The variables that will hold our image url, moves, abilities, and user input.
  - We will need to bring in the $http service via dependency injection.
  - Finally we need the function that will be called when the user clicks the search button. In this function, we will call the $http method and assign the response to our variables so the data may be displayed in our template. 
- Check the demo folder in the topic files to check your work. The project file contains everything we went over in the lesson, including the solution to this challenge.

## Exercises

- Could we have put our $http call into a custom service?

<details><summary>Answer</summary>
Yes! There is no reason why we can't have a service call another service, even if they are built in. If we were to do this, because $http is asynchronous, we would need to use the factory method. That way we could chain a `.then()` method to wait for the response to resolve from the controller. If we tried to use a service method, there is no way to wait for the response to resolve from the controller. Also, if we tried to put the value into a variable using the service method, it would be undefined by the time our template tries to render it. Thus, a factory method is preferable for asynchronous code.


component.js:
```JavaScript
angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: ['myhttpserv' function(myhttpserv) {
            
            var self = this;
            self.response;

            self.query = function() {
               myhttpserv.then(function(response) {
                    self.response = response;
               })
            };
        }]  
    });
```

service.js
```JavaScript
angular.module('myService').factory('myhttpserv', function ($http) {
  return $http.get('url/goes/here');
});
```

</details>