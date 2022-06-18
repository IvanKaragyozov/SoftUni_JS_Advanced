class HEX {

    value;

    constructor(x) {
        this.value = x;
    }

    valueOf(){
        return this.value;
    }

    plus(obj){
        let result = this.value + Number(obj.valueOf());
        return new HEX(result);
    }

    minus(obj){
        let result = this.value - Number(obj.valueOf());
        return new HEX(result);
    }

    toString(){
        return '0x' + this.value.toString(16).toUpperCase();
    }

    parse(str){
        return parseInt(str, 16);
    }
}

let FF = new HEX(255);
console.log(FF.toString());
FF.valueOf() + 1 === 256;
let a = new HEX(10);
let b = new HEX(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));