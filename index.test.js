var expect    = require('chai').expect;
var property = require('./index');

describe('validate-object-property', function() {
    it('should return true if property exists', function() {
        var obj = {parent: {child: true}};
        var result = property.validate(obj, 'parent.child');
        expect(result).to.be.true;
    });
    it('should return false if property does not exist', function() {
        var obj = {parent: 'no child'};
        var result = property.validate(obj, 'parent.child');
        expect(result).to.be.false;
    });
});