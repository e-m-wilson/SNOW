# Routing : Summary

- Routing is the process of linking URL locations to specific templates
- Routing enables deep linking, meaning that our users will be able to bookmark specific views and the browser's back and forward buttons will work with different views
- We need to import a separate module to enable routing
- ngRoute needs to be listed as a dependency in our app to get access to $routeProvider
- $routeProvider has .when() and .otherwise() methods to determine what URL locations correspond to each view - this is set up in our 'config.js' file
- AngularJS routing expects anchor tag href's to be pre-fixed with '#!/path' syntax