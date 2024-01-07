# Cumulative for Angularjs Expressions

<details><summary>Prerequisites and Learning Objectives</summary>

# Prerequisites

Before going through this topic, the learner should have completed/understand the following:

- Create an AngularJS boilerplate app

# Learning Objectives

At the end of the topic, the learner should be able to do the following:

- Describe an AngularJS expression
- Understand the limitations of expressions

</details>

<details><summary>Description</summary>

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

</details>

<details><summary>Real-World Application</summary>

Luisa is a new AngularJS developer. She would like to start scaffolding her project to ultimately accept data from a web service and display that data to the user. For now, let's just help Luisa initialize some variables and display those variables in an AngularJS application.

</details>

<details><summary>Implementation</summary>

- First, we need to scaffold an AngularJS project. See our previous topic if you need a refresher.
- The next step would be to initialize some variables. Let's use the sample data below in tandem with the ng-init directive:
  | First Name | Last Name | Age |
  |------------|-----------|-----|
  | Joe        | Pesci     | 80  |
- Next, please create an HTML table that will display this data using our new knowledge of expressions. 
- Expand the solution below to check your work and ensure you've done everything correctly. 

<details><summary>Solution</summary>

```html
<!doctype html>
<html ng-app ng-init="firstName='Joe';lastName='Pesci';age=80">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <table>
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>{{ firstName }}</td>
    <td>{{ lastName }}</td>
    <td>{{ age }}</td>
  </tr>
</table>
  </body>
</html>
```
</details>

## Exercises

- In our implementation above, we used 3 separate variables to store the first name, last name, and age. Could we have used an object to store this information instead?

<details><summary>Answer</summary>
Yes! We could have used an object to store the data inside of a single variable. Example: 

```html

<html ng-app ng-init="person={firstName='Joe', lastName='Pesci', age=80}">

```

</details>

</details>

<details><summary>Summary</summary>

- AngularJS Expressions dynamically render application variables wherever they are found.
- `{{ expression }}` is an example of expression syntax
- We can also insert our expressions via the `ng-bind` directive
- Expressions evaluate much like JavaScript expressions do.
  - As a mathematical operation: `{{ 2 + 3 }}`
  - With string concatenation: `{{ string1 + string 2 }}`
  - Using object access: `{{ person.age }}`
  - Accessing elements of an array: `{{ array[2] }}`
- Expressions will *NOT* evaluate:
  - Loops: for, while, ect.
  - Conditionals: if, if else, ect.

</details>

<details><summary>Practice Questions</summary>

[Practice Questions](./Quiz.gift)

</details>