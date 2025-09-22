# Event Directives : Implementation

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
            this.regex = '^password$';
        }
    });
```
</details>