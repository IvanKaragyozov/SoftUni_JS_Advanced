class TextBox {

    constructor(selector, regex) {
        this._value = '';
        this._elements = Array.from(document.querySelectorAll(selector));
        this._invalidSymbols = regex;
    }


    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;

        for (let index = 0; index < this.elements.length; index++) {
            this._elements[index].value = value;
        }
    }

    get elements(){
        return this._elements;
    }

    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

let textBox = new TextBox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function(){console.log(textBox.value);});
