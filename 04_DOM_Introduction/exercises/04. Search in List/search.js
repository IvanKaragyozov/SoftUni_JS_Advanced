function search() {

    const listElements = document.querySelectorAll('ul#towns li');
    const resultElement = document.getElementById('result');
    const searchText = document.getElementById('searchText').value;

    let matches = 0;

    for (let element of listElements) {
        element.style.fontWeight = 'normal';
        element.style.textDecoration = '';
    }

    for (let element of listElements) {
        let text = element.textContent;

        if(text.match(searchText)){
            matches++;
            element.style.fontWeight = 'bold';
            element.style.textDecoration = 'underline';
        }
    }

    resultElement.textContent = `${matches} matches found`;

}
