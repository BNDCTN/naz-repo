"use strict";
exports.__esModule = true;
var A_1 = require("./lib/A");
var B_1 = require("./lib/B");
var CustomMath_1 = require("./lib/CustomMath");
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.main = function () {
        var a = new A_1.A();
        var b = new B_1.B();
        console.log(a.prop, '\n', b.prop);
        console.log('1,1', CustomMath_1.CustomMath.Pow(1, 1));
        console.log('2,2', CustomMath_1.CustomMath.Pow(2, 0));
        console.log('2,3', CustomMath_1.CustomMath.Pow(2, -3));
        console.log('12,12', CustomMath_1.CustomMath.Pow(12, 2));
    };
    return Project;
}());
new Project().main();
