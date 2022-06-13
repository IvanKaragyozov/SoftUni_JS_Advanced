let a;

a = 6;

let b = a + 1;

for(let i = 0; i < 10; i++){
    console.log(i);
}

if (a < 10){
    console.log('a is less than 10');
} else {
    console.log('a is greater or equal to 10');
}

function printGreeting(){
    console.log('Hello there!');
}
printGreeting();

function printStars(count){
    console.log('*'.repeat(count));
}
printStars(5);


