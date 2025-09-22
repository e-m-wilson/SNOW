# AngularJS Expressions : Summary

- AngularJS Expressions dynamically render application variables wherever they are found.
- `{{ expression }}` is an example of expression syntax
- We can also insert our expressions via the `ng-bind` directive
- Expressions evaluate much like JavaScript expressions do.
  - As a mathematical operation: `{{ 2 + 3 }}`
  - With string concatenation: `{{ string1 + string 2 }}`
  - Using object access: `{{ person.age }}`
  - Accessing elements of an array: `{{ array[2] }}`
- Expressions will *NOT* evaluate:
  - Loops: for, while, ect.
  - Conditionals: if, if else, ect.
  