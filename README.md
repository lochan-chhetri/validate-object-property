# validate-object-property
A util to check if a path is a valid property of an object.

## Arguments
  object (Object): The object to validate

  path (String): The property to validate

## Returns
  (boolean): Return true if path exist, else false

## Example
```
var property = require('validate-object-property');

var fleet = {
  southwest: {
      aircrafts: ['737-300', '737-700', '737-800', '737 MAX 7', '737 MAX 8'],
      total: {
          service: 735,
          orders: 251
      }
  }
};

// instead of -> if (fleet && fleet.southwest && fleet.southwest.total) { // statement },
// you can do following

if (property.validate(fleet, 'southwest.total.service')) {
  // statement
}

```
