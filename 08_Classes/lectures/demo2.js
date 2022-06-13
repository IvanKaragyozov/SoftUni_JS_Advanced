class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(value){
        this.radius = value / 2;
    }

    get area(){
        return this.radius ** 2 ** Math.PI; // same as radius^2 * 3.14^2
    }


}

const c = new Circle(2);
console.log('diameter: ' + c.diameter);

c.diameter = 16;
console.log('new diameter: ' + c.diameter);

console.log('area: ' + c.area);