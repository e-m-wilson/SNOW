# AngularJS Controllers and Scopes : Implementation

- To begin, scaffold an AngularJS application.
- Next we should create the Controllers either inline or through an external file. 
- Add the variables to each of our Controllers.
- After that we should nest each of our Controllers using HTML markup. Your author would suggest using `<div>` elements.
- Finally, let's display the information using expression syntax. 
- Expand the solution below to check your work!

<details><summary>Solution</summary>

The index.html file:
```html

<!doctype html>
<html ng-app="myApp">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js" defer></script>
    <script src="app.js" defer></script>
  </head>
  <body>
    
    <div ng-controller="myCtrl">
      <h1>Name: {{ name }} Age: {{ age }}</h1>

      <div ng-controller="myCtrl2">
        <h1>Name: {{ name }} Age: {{ age }}</h1>
      </div> 

    </div>

  </body>
</html>

```

The app.js file:
```JavaScript

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.name = 'John Doe';
    $scope.age = 35;
});

app.controller('myCtrl2', function($scope) {
    
    $scope.age = 30;
});

```

</details>

## Exercises

- When the app we created is rendered, why is John Doe used twice? Why is the age in the second Controller set to 30 and not 35?

<details><summary>Answer</summary>

The name variable is being inherited from our parent Controller. This is why 'John Doe' is being shown in our second `<h1>` element. 

As for the age - the child controller has overwritten the value that was inherited from the parent Controller.

</details>