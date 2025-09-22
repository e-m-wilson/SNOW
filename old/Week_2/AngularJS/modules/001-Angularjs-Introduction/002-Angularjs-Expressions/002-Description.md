# AngularJS Expressions : Description

## References

[AngularJS Docs (Expressions)](https://docs.angularjs.org/guide/expression)

## What are expressions?

> ✒️ **Definition:** AngularJS Expressions dynamically render application variables wherever they are found.

For reference, let's take another look at the example from the orientation topic:

```html

<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>

```

`{{yourName}}` is the expression in this context and `yourName` represents a variable in the application. This variable is being produced and automatically updated by the `ng-model` directive on the `<input>` element.

## How can we use expressions?

Expressions come in a couple different flavors. In the example above, we saw the `expression syntax` form. We could also use the `ng-bind` directive to bind our variables to a specific element, as seen below. As a result, the contents of the expression will render inside of the `<div>` element. 

The inside of the `<div>` will render as 'hello world!', because we have initialized the variable called `expression` within the `ng-init` directive. 

```html
<!doctype html>
<html ng-app ng-init="expression='hello world!'">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <div ng-bind="expression"></div>
  </body>
</html>
```

Expressions work much like JavaScript expression do. For example, these are all valid:

```html
<!doctype html>
<html ng-app ng-init="expression='hello world!';firstName='John';lastName='Doe';x=2;y=2;car={color:'Blue'};array=[1,2]">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <div ng-bind="expression"></div>
    <div>{{ 3 + 3 }}</div>
    <div>{{ firstName + ' ' + lastName }}</div>
    <div ng-bind="x * y"></div>
    <div>{{ car.color }}</div>
    <div>{{ array[0] }}</div>
  </body>
</html>
```

> 🗒️ **Note:** As you may have noticed, `ng-init` has the potential to get messy. It isn't widely used in practice - we will see a better way of declaring variables in our topic on AngularJS controllers!

Expressions do not behave *exactly* like JavaScript expressions, however. There are some limitations. For example, AngularJS expressions do not support conditionals, loops, or exceptions while JavaScript expressions do. For example, the following is **NOT** valid:

```html
<!doctype html>
<html ng-app ng-init="value=true">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <div>{{ if(value){return 'hello world!'} }}</div>
  </body>
</html>
```

## Why use expressions?

Expressions provide us a way to dynamically change the content of a webpage through the variables in our application. This is a much easier process than manually changing content through JavaScript DOM manipulation. Which would you rather do? Write tons of lines of code OR just write '{{ expression }}' and be done with it? Your author will take the simpler and less verbose way every time. That is the purpose of a JavaScript framework after all - to make our lives as programmers easier! 