function largestNumber(a, b, c){

    let result;

    if(a >= b && a >= c){
        result = a;
    } else if(b >= a && b >= c){
        result = b;
    } else {
        result = c;
    }

    console.log(`The largest number is ${result}.`);
}

largestNumber(1, 2, 3);
largestNumber(1, 3, 2);
largestNumber(3, 2, 1);