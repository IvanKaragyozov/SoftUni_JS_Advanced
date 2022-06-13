function solve(input){
    let result = '';

    for (let i = 0; i < input.length; i += 2) { // skip every second element

        result += input[i];
        result += ' '; // separate with white space
    }

    console.log(result);
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);