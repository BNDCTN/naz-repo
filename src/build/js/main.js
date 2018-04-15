"use strict";
exports.__esModule = true;
var A_1 = require("./lib/A");
var B_1 = require("./lib/B");
var Sort_1 = require("./lib/Sort");
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.main = function () {
        var a = new A_1.A();
        var b = new B_1.B();
        console.log(a.prop, '\n', b.prop);
        console.log(Sort_1.Sort.quick([2, 3, 4, 6, 9, 0, 7, 6, 5, 4, 3, 34, 54, 7, 8]));
    };
    return Project;
}());
new Project().main();
