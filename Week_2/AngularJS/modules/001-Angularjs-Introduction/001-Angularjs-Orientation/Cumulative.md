# Cumulative for Angularjs Orientation

<details><summary>Prerequisites and Learning Objectives</summary>

# Prerequisites

Before going through this topic, the learner should have completed/understand the following:

- HTML
- CSS
- JavaScript

# Learning Objectives

At the end of the topic, the learner should be able to do the following:

- Describe what AngularJS is and how it differs from Angular
- Create a simple AngularJS application

</details>

<details><summary>Description</summary>

## References

[AngularJS Official Website](https://angularjs.org/)

## What is AngularJS?

AngularJS is a JavaScript framework. It is used to quickly build Single Page Applications (SPAs) within a Model View Controller (MVC) architecture.

Single Page Apps manipulate the DOM through JavaScript to dynamically render content. This is in contrast to a Multi Page Application which would make round trips to the server to retrieve HTML documents to display new content to the user. This means that SPAs are more performant for the user and they feel more like a native app. 

A MVC architecture is a design principle which defines a clear separation of concerns. The Model is what holds the data for our application, i.e. records in a database. The View is our user interface - what the user actually sees. The Controller defines the logic that manipulates and moves data between the Model and the View.

There is one more important concept to understand before we dive into an AngularJS application - AngularJS vs Angular. We will be learning AngularJS, it is the older iteration of the more modern Angular framework. You may hear AngularJS referred to as Angular 1.0 and Angular as 2.0+. These are two entirely separate frameworks that have no compatibility with each other.

While AngularJS is a bit dated, and in fact no longer receiving updates, it is still used in legacy systems. Additionally, after you have a solid grasp of AngularJS - many of the concepts will also apply to other modern frameworks as well.

## How can we set up an AngularJS application?

Creating an AngularJS application is simple, and can be done exclusively in an HTML document: 

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

- Line 2: We are using the ng-app directive to initialize our application.
- Line 4: We are importing the AngularJS framework via a URL. 
- Line 9: In this input element, we are using a directive to bind the value of the input to a variable in our Controller. 
-  Line 11: Here we are using an expression to display the 'yourName' variable dynamically in our View. 

> ✒️ **Definition:** A `directive` takes the form of an HTML attribute and alters the behavior of an application.

> ✒️ **Definition:** An `expression` dynamically renders an application variable wherever it is placed.

Don't fret if things aren't clicking just yet. This is just our first taste of AngularJS, and this small example showcases some of our upcoming topics!

> 🗒️ **Note:** In our example above, we imported the AngularJS framework through a URL. We could have also downloaded the file to our local machine, or used the Node Package Manager (NPM) to install the file. 

## Why should we learn AngularJS?

It is still in service for many legacy systems. Additionally, a certain off the shelf IT service management system still uses AngularJS to help build front end user experiences - ServiceNow.

</details>

<details><summary>Real-World Application</summary>

Luisa is an aspiring front end developer. She would like to learn more about creating responsive, modular, and beautiful front end applications. To begin, she has decided to learn more about AngularJS. Let's help Luisa create her first application in our next section!

</details>

<details><summary>Implementation</summary>

## Creating our first AngularJS app!

- First, let's create an HTML document. We can do this from within VScode by clicking `File > New File` and then specifying the file name, file type, and save location. We just need to make sure our file extension ends in `'.html'`, the rest of the name doesn't matter. For example, our HTML file could look like: `reallyCoolApp.html`. 
- Next, we simply need to scaffold our HTML document like so:

```html
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>

  </body>
</html>
```

- Note the only difference here between an AngularJS app and a regular HTML document is that we have declared this markup as an AngularJS app with the `ng-app` directive. We have also imported the necessary file via URL.
- Right now our app isn't too exciting, but we will build on to this in future exercises!

</details>

<details><summary>Summary</summary>

- AngularJS is a JavaScript framework for creating Single Page Apps (SPAs) within a Model, View, Controller (MVC) architecture.
- SPAs don't have to make round trips to the server to render new content for the user, they dynamically change the page for the user via JavaScript.
- MVC architecture is a design principle which defines a clear separation of concerns. 
  - The Model is what holds the data for our application, i.e. records in a database. 
  - The View is our user interface - what the user actually sees. 
  - The Controller defines the logic that manipulates and moves data between the Model and the View.
- AngularJS is NOT Angular. They are completely different frameworks.

</details>

<details><summary>Practice Questions</summary>

[Practice Questions](./Quiz.gift)

</details>