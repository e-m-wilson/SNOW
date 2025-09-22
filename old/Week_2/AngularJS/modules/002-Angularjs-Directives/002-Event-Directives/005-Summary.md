# Event Directives : Summary

- Event directives allow us to bind events in the DOM to functions in our controller.
- There are many event directives, two common ones are ng-click and ng-change.
  - The ng-change directive will watch for any changes to an HTML input element and execute a controller function in response.
  - The ng-click directive will fire a function in our controller whenever a HTML element tagged with the directive is clicked.
- When calling functions in our template we can pass along parameters to our functions. 
  - The $event keyword can be used to pass along the standard JavaScript event object.