# Cumulative for Conditional Rendering Directives

<details><summary>Prerequisites and Learning Objectives</summary>

# Prerequisites

Before going through this topic, the learner should have completed/understand the following:

- Expressions
- Data binding
- Controllers
- Modules and Components

# Learning Objectives

At the end of the topic, the learner should be able to do the following:

- Describe conditional rendering directives and their purpose
- Create an AngularJS application utilizing conditional rendering directives

</details>

<details><summary>Description</summary>

## References

[Directives (Official AngularJS Docs)](https://docs.angularjs.org/guide/directive)

[W3 Schools AngularJS directive reference](https://www.w3schools.com/angular/angular_ref_directives.asp)

## What are conditional rendering directives?

We've worked with a few directives already such as ng-init, ng-app, and ng-controller. In this topic, we will provide a more comprehensive look at a subset of the directives available to us. Specifically, directives that may conditionally render content. Before we begin, let's review our definition for directives to recap:

> ✒️ **Definition:** A `directive` takes the form of an HTML attribute and alters the behavior of an application.

Conditional rendering directives alter the behavior of your application by rendering or removing content from your web pages. 

## How can we use conditional rendering directives?

In this topic we will discuss ng-repeat, ng-if, and ng-switch. We will be using a component based design for the following code. Let's get right into it:

HTML template:
```html
<div>
    
    <div class="section">
        <h2>ng-repeat example:</h2>
        <ul>
            <li ng-repeat="person in $ctrl.people">
                Name: {{ person.name }} Age: {{ person.age }}
            </li>
        </ul>
    </div>

    <div class="section">
        <h2>ng-if example:</h2>
        <div ng-if="true"> {{ $ctrl.hello }} </div>
        <div ng-if="1==1"> {{ $ctrl.hello }} </div>
        <div ng-if="truee"> {{ $ctrl.hello }} </div>
        <div ng-if="false"> {{ $ctrl.hello }} </div>
        <div ng-if="$ctrl.isTrue"> {{ $ctrl.hello }} </div>
    </div>

    <div class="section">
        <h2>ng-switch example:</h2>
        <div ng-switch="$ctrl.switchValue">
            <div ng-switch-when="dog">"Woof!"</div>
            <div ng-switch-when="cat">"Meow!"</div>
            <div ng-switch-when="parrot">"Pretty Bird!"</div>
            <div ng-switch-default>The expression didn't match anything!</div>
          </div>
    </div>
</div>
```

Our component.js file:
```JavaScript
angular
    .module('mainComp')
    .component('mainComp', {
        templateUrl: 'container/mainComp/mainComp.template.html',
        controller: function mainCompController() {
            this.people = [
                {name: 'John Doe', age:34},
                {name: 'Jane Doe', age:42},
                {name: 'Mark Doe', age:33},
                {name: 'Susan Doe', age:24}
            ];
            this.hello = 'hello world';
            this.isTrue = false;
            this.switchValue = 'parrot';
        }
    });
```

Let's start by explaining ng-repeat. This directive will print a HTML element for each iteration of an array. So in our example, a `<li>` element will be rendered for each of the people in the array called 'people' and we are displaying the name and age of each person. 

The next directive, ng-if, will render or remove content from the webpage based on the expression given. So for our example, the following will apply: 

| ng-if expression | Will {{ $ctrl.hello }} render? |
|------------------|--------------------------------|
| true             | Yes, this will render!         |
| 1==1             | Yes, 1==1 evaluates to true so this will render. |
| truee            | No, this will not render. You may have expected any 'truthy' JavaScript values to evaluate to true within an AngularJS template but this is not the case. |
| false            | This will not render.          |
| $ctrl.isTrue     | The isTrue variable in our controller is set to false. So this will not render. Expression syntax variables *will* evaluate by the truthy and falsy standards of JavaScript.  |

> 🗒️ **Note:** We also have the ng-show and ng-hide directives. They work *almost* like ng-if. The main difference being is that they set the CSS display property to 'none' if they should be hidden or their default display value if they should appear. Whereas ng-if will actually remove the content completely from the page, not simply hide it. 

Finally, we need to discuss ng-switch. This directive will evaluate the expression provided and then check for any corresponding matches within an ng-switch-when directive. If there is a match, that content will render. If there is no match, then the ng-switch-default directive may be used to render some default content. In our example, 'switchValue' is set to 'parrot' within our controller so "Pretty Bird!" will be rendered on our web page. If the expression ever changes, the switch will re-evaluate and render or remove content from the web page as appropriate. 

## Why are conditional rendering directives important?

Conditional rendering directives are important because they allow us to create more dynamic web pages easily. Sure, we could code up the same functionality in pure JavaScript. But do you really want to write all those lines of code? In this regard, the AngularJS framework makes our lives as developers much easier by providing these directives. We can simply write a few lines of code and achieve our desired functionality.

</details>

<details><summary>Real-World Application</summary>

Luisa is continuing her studies of AngularJS. She has been given the following challenge: 

- Render an AngularJS component when a checkbox is checked. 
- The component should simply display some text that says: "You checked the box!". 

Let's help out Luisa!

</details>

<details><summary>Implementation</summary>

## Let's help Luisa complete the challenge!

- First, we need to scaffold the project and create the necessary modules and components. Refer to previous lessons if you need assistance.
- Next, we can make use of the ng-model directive to bind the value of a checkbox to a variable we can use later. 
- We then need to use an ng-if directive on a HTML element that references our checkbox variable. The element should also wrap around our HTML markup that will render our child component. 
- Within our child component, we should add our "You checked the box!" message.
- Check the demo folder in the topic files to check your work!

## Exercises

- We know that ng-if and ng-switch, among other directives, evaluate based on an expression. Could we also evaluate with a function? Example: `ng-if="myFunc()"`. 

<details><summary>Answer</summary>
Yes we can! Check out this quick demo: 

```html
<div ng-if="$ctrl.isRender()">
        I will render!
</div>
```

```JavaScript
controller: function containerController() {
            this.isRender = function() {
                return true;
            }
        }
```
</details>

</details>

<details><summary>Summary</summary>

- A directive takes the form of an HTML attribute and alters the behavior of an application.
  - Conditional rendering directives alter the behavior of your application by rendering or removing content from your web pages. 
- The ng-repeat directive will print a HTML element for each iteration of an array.
- The ng-if directive will render or remove content from the webpage based on the expression given.
  - The expression does not follow JavaScript truthy/falsy standards, although you can reference a variable in the controller which *will* follow those standards.
- The ng-switch directive will evaluate the expression provided and then check for any corresponding matches within an ng-switch-when directive. 
  - If there is a match, that content will render.
  - If there is no match, then the ng-switch-default directive may be used to render some default content.

</details>

<details><summary>Practice Questions</summary>

[Practice Questions](./Quiz.gift)

</details>