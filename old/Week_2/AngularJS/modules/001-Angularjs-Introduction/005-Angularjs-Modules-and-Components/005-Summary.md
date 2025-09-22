# AngularJS Modules and Components : Summary

- Modules are used to bundle up and containerize the different parts of our application
  - We define the name of a module and any dependencies with the `module.js` file
- Components are used to create reusable and modular sections of the user interface complete with business logic
  - We attach a component to a module with the `.component()` function. This function takes in two parameters. The first being the desired name of the component and the second being the `Component Definition Object`
  - The `CDO` defines the template and controller for a component
- Component composition is the process of nesting components within each other to build an application