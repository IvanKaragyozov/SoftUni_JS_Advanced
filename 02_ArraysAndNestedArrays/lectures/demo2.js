const arr = [1, 7, 2, 13, 5];

console.log(arr);

arr.sort(compare);

console.log(arr);

function compare(a, b){
    if(a > b){
        return 1;
    } else if(b > a){
        return -1;
    } else {
        return 0;
    }

    // return a - b; is going to have the same effect
}