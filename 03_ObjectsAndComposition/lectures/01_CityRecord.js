function city(name, population, treasury){

    const result = {
        name: name,
        population: population,
        treasury: treasury
    };

    return result;
}

const myCity = city('Tortuga', 7000, 15000);

const {name, treasury} = myCity;
