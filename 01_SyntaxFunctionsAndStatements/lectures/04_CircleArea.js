function circle(radius){
    let area = radius ** 2 * Math.PI;

    if (typeof radius === `number`){
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`)
    }
}

circle(5);
circle('name');
circle(true);
circle([1, 2, 3]);