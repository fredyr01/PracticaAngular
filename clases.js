"use strict";
// Se puede definir la clase de dos maneras donde vari el paso de parametros en el constructor
// -------------- 1
var Calc = /** @class */ (function () {
    function Calc(num1, num2) {
        this.num1 = 0;
        this.num2 = 0;
        this.num1 = num1;
        this.num2 = num2;
    }
    Calc.prototype.regresaSuma = function () {
        return this.num1 + this.num2;
    };
    return Calc;
}());
var calculadora = new Calc(5, 6);
alert(calculadora.regresaSuma());
// -------------- 2
var Calc2 = /** @class */ (function () {
    function Calc2() {
        this.num1 = 0;
        this.num2 = 0;
    }
    Calc2.prototype.regresaSuma2 = function (num1, num2) {
        return num1 + num2;
    };
    return Calc2;
}());
var calculadora2 = new Calc2();
alert(calculadora2.regresaSuma2(5, 6));
