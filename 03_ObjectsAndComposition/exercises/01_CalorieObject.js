function solve(arr){
    let obj = {};

    // solve with for
    /*for (let index = 0; index < arr.length; index += 2) {
        let product = arr[index];
        let calories = arr[index + 1];
        obj[product] = Number(calories);
    }*/

    // solve with while
    while(arr.length !== 0){
        let product = arr.pop();
        let calories = arr.pop();
        obj[product] = Number(calories);
    }

    console.log(obj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);