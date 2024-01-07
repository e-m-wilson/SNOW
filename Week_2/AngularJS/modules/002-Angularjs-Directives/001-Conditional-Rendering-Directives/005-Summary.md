# Conditional Rendering Directives : Summary

- A directive takes the form of an HTML attribute and alters the behavior of an application.
  - Conditional rendering directives alter the behavior of your application by rendering or removing content from your web pages. 
- The ng-repeat directive will print a HTML element for each iteration of an array.
- The ng-if directive will render or remove content from the webpage based on the expression given.
  - The expression does not follow JavaScript truthy/falsy standards, although you can reference a variable in the controller which *will* follow those standards.
- The ng-switch directive will evaluate the expression provided and then check for any corresponding matches within an ng-switch-when directive. 
  - If there is a match, that content will render.
  - If there is no match, then the ng-switch-default directive may be used to render some default content.