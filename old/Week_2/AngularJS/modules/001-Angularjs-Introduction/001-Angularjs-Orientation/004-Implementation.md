# AngularJS Orientation : Implementation

## Creating our first AngularJS app!

- First, let's create an HTML document. We can do this from within VScode by clicking `File > New File` and then specifying the file name, file type, and save location. We just need to make sure our file extension ends in `'.html'`, the rest of the name doesn't matter. For example, our HTML file could look like: `reallyCoolApp.html`. 
- Next, we simply need to scaffold our HTML document like so:

```html
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>

  </body>
</html>
```

- Note the only difference here between an AngularJS app and a regular HTML document is that we have declared this markup as an AngularJS app with the `ng-app` directive. We have also imported the necessary file via URL.
- Right now our app isn't too exciting, but we will build on to this in future exercises! 