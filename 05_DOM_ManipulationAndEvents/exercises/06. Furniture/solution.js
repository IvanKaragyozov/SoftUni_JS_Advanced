function solve() {

    const [generateButton, buyButton] = Array.from(document.querySelectorAll('button'));
    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const tbody = document.querySelector('tbody');

    generateButton.addEventListener('click', generate);
    buyButton.addEventListener('click', buy);

    const items = [];

    function generate(){
        const data = JSON.parse(input.value);

        for (let item of data) {
            const row = document.createElement('tr');

            row.appendChild(document.createElement('img', item.img));
            row.appendChild(document.createElement('p', item.name));
            row.appendChild(document.createElement('p', item.name));
            row.appendChild(document.createElement('p', item.decFactor));

            const col5 = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            col5.append(checkbox);
            row.append(col5);

            tbody.appendChild(row);

            items.push(row);
        }
    }

    function buy(){
        console.log(items);

    }

    function createColumn(type, content){
        const result = document.createElement('td');
        let inner;

        if(type === 'img'){
            inner = document.createElement('img');
            inner.src = content;
        } else {
            inner = document.createElement('p');
            inner.textContent = content;
        }
        result.appendChild(inner);

        return result;
    }
}