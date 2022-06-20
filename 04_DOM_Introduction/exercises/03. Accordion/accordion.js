function toggle() {

    const textElement = document.getElementById('extra');
    const buttonElement = document.getElementsByClassName('button')[0];

    if(buttonElement.textContent === 'More'){
        buttonElement.textContent = 'Less';
        textElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        textElement.style.display = 'none';
    }
}