"use strict";
exports.__esModule = true;
var A_1 = require("./lib/A");
var B_1 = require("./lib/B");
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.main = function () {
        var a = new A_1.A();
        var b = new B_1.B();
        console.log(a.prop, '\n', b.prop);
    };
    return Project;
}());
new Project().main();
