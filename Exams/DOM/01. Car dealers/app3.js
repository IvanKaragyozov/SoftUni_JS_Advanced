window.addEventListener("load", solve);

function solve() {

    const publishButtonElement = document.getElementById('publish');
    publishButtonElement.addEventListener('click', publishHandler);

    const makeElement = document.getElementById('make');
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const fuelTypeElement = document.getElementById('fuel');
    const originalCostElement = document.getElementById('original-cost');
    const sellingPriceElement = document.getElementById('selling-price');
    const carsListElement = document.getElementById('table-body');

    function publishHandler(e) {
        e.preventDefault();
        let make = makeElement.value;
        let model = modelElement.value;
        let year = yearElement.value;
        let fuel = fuelTypeElement.value;
        let originalCost = Number(originalCostElement.value);
        let sellingPrice = Number(sellingPriceElement.value);

        //if(!make || !model || !year || !fuel || originalCost > sellingPrice){
        //    return;
        //}

        makeElement.value = '';
        modelElement.value = '';
        yearElement.value = '';
        fuelTypeElement.value = '';
        originalCostElement.value = '';
        sellingPriceElement.value = '';

        let rowElement = document.createElement('tr');
        let makeCellElement = document.createElement('td');
        let modelCellElement = document.createElement('td');
        let yearCellElement = document.createElement('td');
        let fuelTypeElement = document.createElement('td');
        let originalCostElement = document.createElement('td');
        let sellingPriceElement = document.createElement('td');

        makeCellElement.textContent = make;
        modelCellElement.textContent = model;

        rowElement.appendChild(makeCellElement);
        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(yearCellElement);
        rowElement.appendChild(fuelTypeElement);
        rowElement.appendChild(originalCostElement);
        rowElement.appendChild(sellingPriceElement);

        let editButtonElement = document.createElement('button');
        let sellButtonElement = document.createElement('button');
        editButtonElement.textContent = 'Edit';
        sellButtonElement.textContent = 'Sell';

        carsListElement.appendChild(rowElement);


    }
}
