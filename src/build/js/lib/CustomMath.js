"use strict";
exports.__esModule = true;
var CustomMath = /** @class */ (function () {
    function CustomMath() {
    }
    CustomMath.Pow = function (number, power) {
        if (power == 0) {
            return 1;
        }
        var n = number, p = Math.abs(power);
        for (var i = 0; i < p - 1; i++) {
            n *= number;
        }
        return power < 0 ? 1 / n : n;
    };
    return CustomMath;
}());
exports.CustomMath = CustomMath;
