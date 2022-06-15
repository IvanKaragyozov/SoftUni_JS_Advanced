const myMap = new Map();

myMap.set('first', 5);
myMap.set('second', 2);
myMap.set('third', 6);

console.log(myMap);

console.log(myMap.entries());
console.log(myMap.keys());
console.log(myMap.values());

for (let entry of myMap.values()) {
    console.log('value: ' + entry);
}

myMap.delete('second');

for (let entry of myMap.keys()) {
    console.log('key: ' + entry);
}


