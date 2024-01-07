# Filters : Implementation

## Let's help Luisa!

- Here is the sample data for the challenge:

```JavaScript
this.data = [
                {name: 'Bob', balance: 3443.44},
                {name: 'Mark', balance: 343.22},
                {name: 'Joe', balance: 3890.74},
                {name: 'Kate', balance: 879.90},
                {name: 'Susan', balance: 12690.46},
                {name: 'Sophia', balance: 1389.77}
            ]
```

- We first need to scaffold our AngularJS application and set up any Components or Modules as necessary. Refer to previous lessons if you need a refresher.
- Next, make sure to include the sample data in the Controller. In a full stack application, this data would likely not be hardcoded but instead retrieved from a database. We will get to that point eventually!
- Next, we need to set up our template. We will need a text input to take in a query from the user. This will be used to filter the data from our original data set. Set an ng-model directive so we can work with the input.
- For the next step, your author recommends a `<div>` element with ng-repeat. We will use the 'filter' filter in tandem with the ng-repeat, taking in our variable from the input while we do so. This will allow us to filter the results by that query.
- Finally, wrapped inside the `<div>` with our ng-repeat, we need to print out the data from our data set. Include the name as well as the account balance. For the account balance, don't forget to format the data with the currency filter. 
- Check the demo folder in the topic files to check your work!

## Exercises

- Can the 'filter' filter only find matches via string values?

<details><summary>Answer</summary>

We can use strings, objects, and functions with the 'filter' filter. 

For example, if we use an object, we can narrow the focus of our search to specific properties in the object. 

Object example:
```html
<div class="section">
        <h2>Array Filter:</h2>
        <label for="searchArray">Search and filter items in array:</label>
        <input type="text" id="searchArray" ng-model="query"/>

        <div ng-repeat="elem in $ctrl.myArray | filter:{name: query}">
            <p>{{ elem.name }} Phone Number: {{ elem.number }}</p>
        </div> 
    </div>
```

</details>