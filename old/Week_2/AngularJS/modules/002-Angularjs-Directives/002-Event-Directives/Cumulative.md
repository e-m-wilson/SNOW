# Cumulative for Event Directives

<details><summary>Prerequisites and Learning Objectives</summary>

# Prerequisites

Before going through this topic, the learner should have completed/understand the following:

- Expressions
- Data binding
- Controllers and Scopes
- Modules and Components
- Conditional rendering directives

# Learning Objectives

At the end of the topic, the learner should be able to do the following:

- Define event directives
- Use event directives in an AngularJS application

</details>

<details><summary>Description</summary>

## References

[W3 Schools Directive Reference](https://www.w3schools.com/angular/angular_ref_directives.asp)

## What are event directives? 

> ✒️ **Definition:** `Event directives` allow us to bind events in the DOM to functions in our controller. 

With event directives, we can begin to create more dynamic applications. With a button click we can take some information from a text input and make a server call, with a key press we could manipulate the DOM, and much more. In this lesson we will go over some common event directives, we will also talk about the event object and passing arguments to controller functions. 

## How can we use event directives?

In this section we will highlight a couple common event directives: ng-click and ng-change. This is by no means an exhaustive list, but it's likely you can solve most event issues with these directives. Let's dig right into the code:

Our template.html:
```html
<div class="container">

    <h2>ng-change example:</h2>
    <input class="input" type="input" ng-model="textInput" ng-change="$ctrl.alertChange(textInput, $event)"/>
    
    <h2>ng-click example:</h2>
    <button ng-click="$ctrl.firedBtn($event)">Click me!</button>
    <div ng-if="$ctrl.showChild">
       <main-comp></main-comp> 
    </div>
    
</div> 
```

Our component.js:
```JavaScript
angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: function containerController() {
            this.showChild = false;
           

            this.firedBtn = function(e) {
                this.showChild = !this.showChild;
                console.log(e);
            };
            this.alertChange = function (textInput, e) {
                alert(textInput);
                console.log(e);
            }
        }
    });
```

Let's start with an explanation of ng-change. The directive will watch for any changes to an HTML input element and execute a controller function in response. This directive requires that ng-model also be present, you will get a compilation error and your code will not function without it. The ng-change directive also works a bit differently than a standard HTML onchange event. For one, it will react for each key press. It will not wait for the input to lose focus like a HTML onchange event would. Let's isolate the following code and break it down:

`ng-change="$ctrl.alertChange(textInput, $event)"`

Essentially, in the above code we will fire the 'alertChange' function in our controller whenever a change occurs in the input element. Also we will pass along the value of the input and the JavaScript event object. Notice that `textInput` is the same name we provided in the ng-model directive. `$event` is the keyword we use in the AngularJS framework to represent a JavaScript event object.

```JavaScript
this.alertChange = function (textInput, e) {
                alert(textInput);
                console.log(e);
            }
```

In our corresponding function, we will take in the text input value and the JavaScript object. Then we will print out the input value to a standard alert window before *not* printing the JavaScript object to the console. Fun fact about ng-change, we don't actually have access to the JavaScript object. You can try and pass in the event as your author has done here, but it will always print 'undefined'. 

Our next directive, ng-click, *will* pass the event object as expected. In this example, we will fire the 'firedBtn' function whenever the user clicks the button. As you can see, we are also passing along the JavaScript event object.

```html
<button ng-click="$ctrl.firedBtn($event)">Click me!</button>
    <div ng-if="$ctrl.showChild">
       <main-comp></main-comp> 
    </div>
```

Ultimately, the 'showChild' variable will either toggle on or off, and thus conditionally render our component named 'mainComp'. We will also print the JavaScript event object into the console.
```JavaScript
this.firedBtn = function(e) {
                this.showChild = !this.showChild;
                console.log(e);
            };
```

## Why are event directives important?

Event directives are extremely important in the AngularJS framework because they allow us to respond to user directed changes in the template. They are key for creating interactivity in our applications. It's not the 90s, if a user clicks on something, it should *do* something. The days of boring, static, web pages are long gone.

</details>

<details><summary>Real-World Application</summary>

Luisa is continuing her studies of AngularJS. She has been given the following challenge: 

Create an AngularJS application that accepts user input. When the user enters the passphrase 'password', the application should render a child component. The child component should congratulate the user on guessing the correct passphrase. 

Let's help out Luisa!

</details>

<details><summary>Implementation</summary>

## Let's help Luisa!

-  Begin by scaffolding an AngularJS application and creating the necessary components. Refer to previous lessons if you need a refresher.
- On our parent component, we should include an input element with the ng-model and ng-change directives. 
- The ng-change directive should fire off a function in our controller that accepts the value of the user input. We can then introduce logic in the function to dynamically change a boolean variable in our controller.
- Utilize an ng-if directive that is mapped to our boolean variable to dynamically render our child component.
- Check the demo folder in the topic files to see the solution and check your work!

## Exercises

- Do some self-study and refactor the challenge to use regular expressions. Hint: `ng-pattern`.

<details><summary>Answer</summary>

The ng-pattern directive can be used for complex form validation! 
- The 'required' attribute will ensure that an empty string doesn't cause a match to the regular expression. 
- The form and input both need a name attribute. This is what is being referenced on `form.input.$valid`.
- The `$valid` keyword returns a boolean based on the match of the regular expression within ng-pattern.

template.html
```html
<form name="form">
        <h2>ng-change example:</h2>
        <input type="text" ng-model="myInput" name="input" ng-pattern="$ctrl.regex" required/>
        
        <div ng-if="form.input.$valid">
            <main-comp></main-comp> 
        </div>
    </form>
```

component.js
```JavaScript
angular
    .module('container')
    .component('container', {
        templateUrl: 'container/container.template.html',
        controller: function containerController() {
            this.regex = '^password

</details>

<details><summary>Summary</summary>

- Event directives allow us to bind events in the DOM to functions in our controller.
- There are many event directives, two common ones are ng-click and ng-change.
  - The ng-change directive will watch for any changes to an HTML input element and execute a controller function in response.
  - The ng-click directive will fire a function in our controller whenever a HTML element tagged with the directive is clicked.
- When calling functions in our template we can pass along parameters to our functions. 
  - The $event keyword can be used to pass along the standard JavaScript event object.

</details>

<details><summary>Practice Questions</summary>

[Practice Questions](./Quiz.gift)

</details>;
        }
    });
```
</details>

</details>

<details><summary>Summary</summary>

- Event directives allow us to bind events in the DOM to functions in our controller.
- There are many event directives, two common ones are ng-click and ng-change.
  - The ng-change directive will watch for any changes to an HTML input element and execute a controller function in response.
  - The ng-click directive will fire a function in our controller whenever a HTML element tagged with the directive is clicked.
- When calling functions in our template we can pass along parameters to our functions. 
  - The $event keyword can be used to pass along the standard JavaScript event object.

</details>

<details><summary>Practice Questions</summary>

[Practice Questions](./Quiz.gift)

</details>