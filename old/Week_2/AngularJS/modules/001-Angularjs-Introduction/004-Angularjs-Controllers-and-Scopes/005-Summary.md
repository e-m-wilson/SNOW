# AngularJS Controllers and Scopes : Summary

- AngularJS Controllers define the states and behaviors of an AngularJS application
  - Controllers can be defined inline or through an external JavaScript file
- Scopes are the glue that hold the View and Controller together and they are the application Model in our MVC architecture
  - The $scope object contains all the variables and methods available to the Controller and View
  - Scope data is only available to its own level within the DOM and any children scopes
  - The rootScope is the top level scope within the application