# AngularJS Data Binding : Implementation

- First, let's scaffold a basic AngularJS app. Refer to previous topics if you need assistance.
- Next, let's use the ng-init directive to initialize an application variable to store our message.
- Next, let's create an input element with the ng-model directive pointing to our new message variable. 
- Finally, let's display our message via expression syntax. 
- Expand the solution below to check your work!

<details><summary>Solution</summary>

```html

<!doctype html>
<html ng-app ng-init="message='My custom welcome message!'">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Message:</label>
      <input type="text" ng-model="message" placeholder="Enter your message here">
      <hr>
      <h1>Message: {{ message }}</h1>
    </div>
  </body>
</html>

```

</details>

## Exercises

- Could we have used an explicit controller to store the variable? Instead of using ng-init?

<details><summary>Answer</summary>

Yes! We will get to controllers more in depth in another topic. However, if you recall from the description in this topic, we gave an example of storing variables within an explicit controller. 

</details>