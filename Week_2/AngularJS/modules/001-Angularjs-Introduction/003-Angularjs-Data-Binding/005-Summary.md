# AngularJS Data Binding : Summary

- There are 2 forms of Data Binding
  - In a two-way configuration, if a change is made to a variable within the view, such as with an input element, then the variable will also also be changed within the Controller. Likewise if the variable is changed within the Controller, the new value will be reflected in the View
  - In a one-way configuration, as its name implies, data only travels one way. Meaning that a change in a variable within the View/Controller will change its corresponding value in the View/Controller, but not vice versa
- Expressions either using expression syntax or the ng-bind directive are examples of one-way data binding
- The ng-model directive is an example of two-way data binding