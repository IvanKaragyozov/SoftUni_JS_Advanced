function addItem() {

    // select input field
    const input = document.getElementById('newItemText');

    // create <li> element and assign input value to element text content
    const li = document.createElement('li');
    li.textContent = input.value;

    // select <ul> and append new element
    document.getElementById('items').appendChild(li);

    // select input field and clear contents (value)
    input.value = '';
}