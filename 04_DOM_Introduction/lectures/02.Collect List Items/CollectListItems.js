function extractText() {

    const items = Array.from(document.getElementById('items').children); // get first element and its children elements

    const result = items.map(e => e.textContent).join('\n');

    document.getElementById('result').value = result;

}