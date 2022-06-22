function addItem() {

    // select input field
    const input = document.getElementById('newItemText');

    // create <li> element and assign input value to element text content
    const li = document.createElement('li');
    li.textContent = input.value;

    // create [Delete] anchor
    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', onDelete);

    // select <ul> and append new element
    document.getElementById('items').appendChild(li);

    // select input field and clear contents (value)
    input.value = '';


    function onDelete(event){
        event.target.parentElement.remove();
    }
}

