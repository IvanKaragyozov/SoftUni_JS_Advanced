function sumFirstLast(numsAsStrings){
    let first = [...numsAsStrings].shift();
    let last  = [...numsAsStrings].pop();

    const result = Number(first) + Number(last);

    console.log(result);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10'])