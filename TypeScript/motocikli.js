"use strict";
exports.__esModule = true;
exports.Motocikls = void 0;
var MStyle;
(function (MStyle) {
    MStyle[MStyle["Cruiser"] = 0] = "Cruiser";
    MStyle[MStyle["Sport"] = 1] = "Sport";
    MStyle[MStyle["Standard"] = 2] = "Standard";
    MStyle[MStyle["Enduro"] = 3] = "Enduro";
})(MStyle || (MStyle = {}));
var Motocikls = /** @class */ (function () {
    function Motocikls() {
    }
    /**
     * GetBike
     */
    Motocikls.prototype.GetBike = function () {
        return this.MororcycleStyle = 6.2;
    };
    return Motocikls;
}());
exports.Motocikls = Motocikls;
