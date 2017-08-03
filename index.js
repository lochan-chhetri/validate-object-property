/**
   * Checks if a `path` is a valid property of an `object`
   *
   * @private
   * @param {Object} object The object to validate.
   * @param {string} path The property to validate.
   * @returns {boolean} Returns `true` if the path is a valid property of an object, else returns `false`.
*/

var validate = function (object, path) {
    path = path.split('.');
    var next = {};

    for (var i = 0; i < path.length; i++) {
        if (object && object.hasOwnProperty(path[i])) {
            next = object[path[i]];
        } else if (next.hasOwnProperty(path[i])) {
            next = next[path[i]];
        } else {
            return false;
        }
    }

    return true;
};

module.exports = {
    validate: validate
};