# Conditional Rendering Directives : Implementation

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