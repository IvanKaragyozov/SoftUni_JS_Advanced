function addItem() {

    // select input field
    const input = document.getElementById('newItemText');

    // create <li> element and assign input value to element text content
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // select <ul> and append new element
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);

    // select input field and clear contents (value)
    input.value = '';
}