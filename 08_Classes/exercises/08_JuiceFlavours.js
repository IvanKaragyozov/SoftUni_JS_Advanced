function juiceFlavours(arr){

    let juices = {};
    let bottles = {};

    function createBottle(flavour){
        if(juices[flavour] >= 1000){
            if(!bottles.hasOwnProperty(flavour)){
                bottles[flavour] = 0;
            }

            let  numberOfBottles = Math.floor(juices[flavour] / 1000);
            bottles[flavour] += numberOfBottles;
            juices[flavour] -= (numberOfBottles * 1000);
        }
    }

    for (const juice of arr) {
        let [flavour, qty] = juice.split(' => ');

        if(!juices.hasOwnProperty(flavour)){
            juices[flavour] = 0;
        }

        juices[flavour] += Number(qty);
        createBottle(flavour);
    }

    for (const flavour in bottles) {
        console.log(flavour + ' => ' + bottles[flavour]);
    }

}

juiceFlavours(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

console.log('--------------------------');

juiceFlavours(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])