# AngularJS Expressions: Implementation

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