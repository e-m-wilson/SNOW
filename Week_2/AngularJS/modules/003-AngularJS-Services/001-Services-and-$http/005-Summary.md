# Services and $http : Summary

- Services in AngularJS are used to share code across our applications via dependency injection.
- Dependency injection is the process by which AngularJS components retrieve services, custom directives, and more items needed to function via the AngularJS Injector Subsystem.
- There are three ways to create services:
  - The Service method
    - Doesn't return anything. It is a singleton shared across the app. Not suitable for asynchronous code.
  - The Factory method
    - An instantiation is created each time it is injected. It returns an object. This method is suitable for asynchronous code.
  - The Provider method
    - Wasn't discussed in this topic.
- We can create custom services but there are also built-in services such as $http.
- $http allows us to easily make requests to web services
- It is common to bundle up services, directives, and more into a module. This means we can simply list the bundled module as a dependency for a component, rather than listing out multiple entries for each separate feature.