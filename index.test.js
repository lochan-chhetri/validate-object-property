var expect    = require('chai').expect;
var property = require('./index');

describe('validate-object-property', function () {
    it('should return true if property exists', function () {
        var obj = {parent: {child: 'bar'}};
        var result = property.validate(obj, 'parent.child');
        expect(result).to.be.true;
    });
    it('should return false if property does not exist', function () {
        var obj = {parent: 'no child'};
        var result = property.validate(obj, 'parent.child');
        expect(result).to.be.false;
    });
    it('should throw error if first argument is not an object', function () {
        var result = function () {
            property.validate(['parent'], 'parent.child');
        };
        expect(result).to.throw(TypeError, 'First argument must be an object literal.');
    });
    it('should throw error if second argument is not a string', function () {
        var result = function () {
            property.validate({parent: {child: 'bar'}}, {foo: 'bar'});
        };
        expect(result).to.throw(TypeError, 'Second argument must be a string.');
    });
});
