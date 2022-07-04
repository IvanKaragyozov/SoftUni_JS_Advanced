window.addEventListener("load", solve);

function solve() {

    document.getElementById('publish').addEventListener('click', publishHandler);
    const makeElement = document.getElementById('make');
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const fuelTypeElement = document.getElementById('fuel');
    const originalCostElement = document.getElementById('original-cost');
    const sellingPriceElement = document.getElementById('selling-price');
    const tableBodyElement = document.getElementById('table-body');
    const carsListElement = document.getElementById('cars-list');

    function publishHandler(e) {
        e.preventDefault();

        let make = makeElement.value;
        let model = modelElement.value;
        let year = yearElement.value;
        let fuel = fuelTypeElement.value;
        let originalCost = originalCostElement.value;
        let sellingPrice = sellingPriceElement.value;

        if (!make || !model || !year || !fuel || !originalCost || !sellingPrice) {
            return;
        }
        if (originalCost > sellingPrice) {
            return;
        }

        make.value = '';
        model.value = '';
        year.value = '';
        fuel.value = '';
        originalCost.value = '';
        sellingPrice.value = '';

        const rowElement = document.createElement('tr');
        rowElement.classList.add('row');
        rowElement.innerHTML = `
        <td>${make}</td>
        <td>${model}</td>
        <td>${year}</td>
        <td>${fuel}</td>
        <td>${originalCost}</td>
        <td>${sellingPrice}</td>
        <td>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn sell">Sell</button>
        </td>`;

        const editButton = rowElement.querySelector('.edit');
        const sellButton = rowElement.querySelector('.sell');
        editButton.addEventListener('click', buttonEditHandler);
        sellButton.addEventListener('click', buttonSellHandler);

        tableBodyElement.appendChild(rowElement);

        function buttonEditHandler() {
            make.value = make;
            model.value = model;
            year.value = year;
            fuel.value = fuel;
            originalCost.value = originalCost;
            sellingPrice.value = sellingPrice;
            rowElement.remove();
        }
        let totalIncome;
        totalIncome = 0;

        function buttonSellHandler() {
            let difference = 0;
            const li = document.createElement('li');
            li.className = 'each-list';
            li.innerHTML = `
        <span>${make} ${model}</span>
        <span>${year}</span>
        <span>${sellingPrice - originalCost}</span>`;
            difference += sellingPrice - originalCost;
            totalIncome += difference;
            carsListElement.appendChild(li);
            rowElement.remove();
            document.getElementById('profit').textContent = `${totalIncome.toFixed(2)}`;
        }
    }
}