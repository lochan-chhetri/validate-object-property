# validate-object-property
A util to check if a path is a valid property of an object.

## Arguments
  object (Object): The object to validate
  
  path (String): The property to validate

## Returns
  (boolean): Return true if path exist, else false

## Example
```
var property = require('./index');

property.validate({parent: {child: true}}, 'parent.child');
```
