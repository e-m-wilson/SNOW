# Routing : Description

## References

[$routeProvider (Official AngularJS Docs)](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider)

[Routing & Multiple Views (Official AngularJS Tutorial)](https://docs.angularjs.org/tutorial/step_09)

## What is routing?

> ✒️ **Definition:** Routing is the process of linking URL locations to specific templates. 

With our current knowledge, if we wanted to implement a single page application we would be reliant on directives such as ng-if or ng-switch. This will do the job of loading and unloading templates just fine. However these options will not update the URL within the browser. This means that if a user wants to bookmark a specific 'page' within our application, they can not do so. The bookmark would always point to the top level 'index.html'. Further, if the user hits the back button within their browser, then it could take them off of the application altogether. Instead, it would be preferable that when a user clicks the back button they are taken to the previous view. 

This is where routing comes in. With routing, when a user clicks on a link within our app the URL will update within the browser and that URL location will be tied to a specific template. This fixes all of the issues we mentioned and also allows us to render templates based on user input without the need for ng-if or ng-switch directives. 

A typical scenario may play out like this: 

- A user clicks on a link within the app.
- The link updates the url from 'index.html' to 'index.html#!/myCoolPage'. 
- The AngularJS router can see the change in the URL and will now render the template associated with the new URL. 

## How can we use routing?

To begin, we need to bring in the angular routing module either from Node Package Manager (NPM) or via a Content Delivery Network (CDN). In this lesson, we will use a CDN to get the necessary files. We've already used a CDN in previous lessons to import the AngularJS framework itself. We will simply include another script element under our import of the AngularJS framework to also include the AngularJS routing module.

```html
<html ng-app="myApp">
    <head>
        <script src="https://code.angularjs.org/1.8.2/angular.min.js" defer></script>
        <script src="https://code.angularjs.org/1.8.2/angular-route.min.js" defer></script>
        ...
    </head>
    ...
</html>
```

Next, we need to include the 'ngRoute' module as a dependency for our application - along with any components that will be used, custom services or directives, ect. 

app.module.js:
```JavaScript
angular.module('myApp', [
    'ngRoute',
    'core',
    'home',
    'myHeader',
    'aboutUs',
    'error'
]);
```

For the next step, we'll set up our 'config.js' file. This file contains a configuration for a Provider type service. The `$routeProvider` is included with the file we imported earlier via the CDN. The `$routeProvider` is chained with a series of `.when()` functions, followed by an optional `.otherwise()` function. The first parameter of the `.when()` function is a string that will match against the URL location within the browser. If there is a match, we can load a specific component as you see below. This uses the 'template' property within the second argument of our function. We could optionally use a templateUrl property and point to a specific html file. A controller property can then be used to also define the controller for the template. This would be fine for a smaller application that doesn't use components. For our purposes, your author recommends following the format below. 

The `.otherwise()` function will apply if there are no matches for any `.when()`. This would include any URL locations with typos i.e. 'index.html/home' vs 'index.html/hom'. It will only take in a string value that matches the pattern on a previous `.when()` definition - this is how it knows which template to load. 

app.config.js:
```JavaScript
angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
      when('/', {
        template: '<home></home>'
      }).
        when('/home', {
          template: '<home></home>'
        }).
        when('/aboutUs', {
          template: '<about-us></about-us>'
        }).
        when('/error', {
          template: '<error></error>'
        }).
        otherwise('/error');
    }
  ]);
```

Finally, we need to include a single ng-view directive into our 'index.html' file. This directive tells the AngularJS framework where to load the templates.

```html
<!doctype html>
<html ng-app="myApp">
    <head>
        <script src="https://code.angularjs.org/1.8.2/angular.min.js" defer></script>
        <script src="https://code.angularjs.org/1.8.2/angular-route.min.js" defer></script>
        <!--All other '.js' files are imported here as well with script elements-->
    </head>
    <body>
        <my-header></my-header>      
        <ng-view></ng-view>
    </body>
</html>
```

Now whenever a user clicks an anchor tag within our application, the href attribute can set the URL location and angular routing will set the current view as appropriate. In our example, the header component contains our navigation links. Notice the `#!/path` syntax. This is what AngularJS expects within anchor tags to property set up routing. 

```html
<div class="header">
    <h1>AngularJS Routing Example</h1>
    <nav>
        <ul class="navList">
            <li class="navListItem"><a class="navListLink" href="#!/home">Home</a></li>
            <li class="navListItem"><a class="navListLink" href="#!/aboutUs">About Us</a></li>
        </ul> 
    </nav>
</div>
```

> 🗒️ **Note:** Be sure to check out the demo folder in the files for this lesson to get access to the full app!

## Why is routing important?

Routing is important because it allows us to create single page applications that are compliant with [deep linking](https://en.wikipedia.org/wiki/Deep_linking). Essentially, this means that our users will be able to bookmark URL locations and be directed to the appropriate template. It also means that backward and forward browser buttons will behave as expected when navigating our application. 