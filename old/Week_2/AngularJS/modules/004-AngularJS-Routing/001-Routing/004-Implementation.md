# Routing : Implementation

## Let's help Luisa create a final project!

- For the routing requirement, don't forget these important steps:
  - Import the necessary module from a CDN or NPM
  - Create and customize the 'config.js' file
  - Include 'ngRoute' as a dependency within the app
  - Make sure anchor tags are prefixed with '#!/nameOfPage'
- For the service/http requirement:
  - Ensure you are using a factory service method. Recall that a service created via the service method is a poor choice for asynchronous code
  - Make use of the built-in $http service for easy requests to a public API
- The ng-click directive is an easy choice for an event directive! You can have it fire off your API request.
- The ng-if directive would be a nice choice for the conditional rendering directive requirement. You could assign the expression to the data returned from the API. When the data is received, only then will content render. Feel free to experiment with other directives such as ng-switch too!
- For the filter requirement, consider using a number or date filter to organize the data coming back from the API. Or perhaps a 'filter' filter for organizing data that is returned!
- Check out the demo folder in the topic files to see a solution to this challenge. How does it compare to your work? What did you do differently?

## Exercises

- Can we have nested routes in AngularJS? For example, an ng-view on both a template and the child of the first template?

<details><summary>Answer</summary>
Yes! There is nothing stopping us from creating nested routes within our 'config.js'. Larger apps such as these can be unwieldy however. Some community solutions, such as UI-Router have attempted to address this.
</details>