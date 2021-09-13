// Se puede definir la clase de dos maneras donde vari el paso de parametros en el constructor

// -------------- 1
class Calc{

    num1:number = 0;
    num2:number = 0;
    constructor(num1:number, num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }
    regresaSuma(){
        return this.num1+this.num2;
    }
}
let calculadora = new Calc(5,6);
alert(calculadora.regresaSuma());


// -------------- 2
class Calc2{

    num1:number = 0;
    num2:number = 0;
    constructor(){
    }
    regresaSuma2(num1:number, num2:number){
        return num1+num2;
    }
}
let calculadora2 = new Calc2();
alert(calculadora2.regresaSuma2(5,6));

