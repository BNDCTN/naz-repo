"use strict";
exports.__esModule = true;
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.quick = function (array) {
        var l = [];
        var r = [];
        var len = array.length;
        if (len <= 1 || array[0] === array[len - 1])
            return array;
        var nom = array[len - 1];
        for (var i = 0; i < len - 1; i++) {
            if (array[i] < nom)
                l.push(array[i]);
            else
                r.push(array[i]);
        }
        r.unshift(nom);
        return Sort.quick(l).concat(Sort.quick(r));
    };
    return Sort;
}());
exports.Sort = Sort;
