window.addEventListener('load', solve);

function solve() {

    const addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click', addClickHandler);

    const modelInputElement = document.getElementById('model');
    const yearInputElement = document.getElementById('year');
    const descriptionInputElement = document.getElementById('description');
    const priceInputElement = document.getElementById('price');
    const furnitureListElement = document.getElementById('furniture-list');

    function addClickHandler(e){
        e.preventDefault();
        let model = modelInputElement.value;
        let year = Number(yearInputElement.value);
        let description = descriptionInputElement.value;
        let price = Number(priceInputElement.value);

        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionInputElement.value = '';
        priceInputElement.value = '';

        if(!model || !description){
            return;
        }
        if(year <= 0 || price <= 0){
            return;
        }

        // create table roll and table data elements
        let rowElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionsCellElement = document.createElement('td');
        let contentsRowElement = document.createElement('tr');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');
        let totalPriceElement = document.querySelector('.total-price');

        // buttons
        let infoButtonElement = document.createElement('button'); // create 'More info' button
        let buyButtonElement = document.createElement('button');  // create 'Buy it' button
        infoButtonElement.textContent = 'More Info'; // add text to the buttons
        buyButtonElement.textContent = 'Buy it';     // add text to the buttons

        actionsCellElement.appendChild(infoButtonElement); // append buttons to 'Actions' cell
        actionsCellElement.appendChild(buyButtonElement);  // append buttons to 'Actions' cell

        rowElement.classList.add('info'); // add a class called 'info' to the table row
        infoButtonElement.classList.add('moreBtn'); // add classes to buttons
        buyButtonElement.classList.add('buyBtn');   // add classes to buttons

        infoButtonElement.addEventListener('click', showInfo);
        buyButtonElement.addEventListener('click', buyItem);


        modelCellElement.textContent = model;
        priceCellElement.textContent = price.toFixed(2);

        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);


        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';

        yearContentElement.textContent = `Year: ${year}`;
        descriptionContentElement.setAttribute('colspan', 3);
        //descriptionContentElement.colSpan = 3 -> same as above
        descriptionContentElement.textContent = `Description: ${description}`;

        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);

        furnitureListElement.appendChild(rowElement);
        furnitureListElement.appendChild(contentsRowElement);


        function showInfo(e) {
            if(e.currentTarget.textContent === 'More Info') {
                contentsRowElement.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }
        }

        function buyItem(){
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);

            rowElement.remove();
            contentsRowElement.remove();
        }
    }
}
