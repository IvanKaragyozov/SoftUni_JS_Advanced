function solve() {

    const inputText = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;

    let result = '';

    const words = inputText.split(/(\s+)/).filter(x => x !== ' ');

    if(namingConvention === 'Camel Case'){

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase();

            if(i !== 0){ // check if there is more than 1 word; true => every other word is starting with upper case
                words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); // item => Item
            }
        }

    } else if(namingConvention === 'Pascal Case'){

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toLowerCase(); // every word is converted to lower case
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1); // every first letter is converted to upper case
        }

    } else {
        return document.getElementById('result').textContent = 'Error!';
    }

    result = words.join('');
    document.getElementById('result').textContent = result;
}