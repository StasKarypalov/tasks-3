class Calculator{
    constructor(){
        this.multiplications = this.multiplications.bind(this);
        this.division = this.division.bind(this);
        this.subtraction = this.subtraction.bind(this);
        this.addition = this.addition.bind(this);
    }
    multiplications(item1,item2){
        return item1 * item2;
    }
    division(item1,item2){
        if(item2 !== 0)
        return item1 / item2;
        else{
            return "error";
        }
    }
    subtraction(item1,item2){
        return item1 - item2;
    }

    addition(item1,item2){
        return item1 + item2;
    }
}

let calculator = new Calculator;

console.log(calculator.addition(1,2));
console.log(calculator.division(2,0));
console.log(calculator.multiplications(4,5));
console.log(calculator.subtraction(6,7));