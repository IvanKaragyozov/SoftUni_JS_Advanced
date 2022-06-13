function sortArray(numbers, sortType){

    const methods = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    numbers.sort(methods[sortType]);

    return numbers;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));