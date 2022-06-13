function solve() {

    const input = {
        name: document.getElementById('task'),
        description: document.getElementById('description'),
        date: document.getElementById('date')
    };

    const [_, openSelection, progressSection, finishedSection] = Array.from(document.querySelectorAll('section'));
    document.getElementById('add').addEventListener('click', addTask);

    function addTask(event){
        event.preventDefault();

        const article = document.createElement('article');

        article.appendChild(createElement('h3', input.name.value));
        article.appendChild(createElement('p', `Description: ${input.description.value}`));
        article.appendChild(createElement('p', `Due date: ${input.date.value}`));
        const div = createElement('div', '', 'flex');

        div.appendChild(createElement('button', 'Start', 'green'));
        div.appendChild(createElement('button', 'Delete', 'red'));
        article.appendChild(div);

        openSelection.appendChild(article);

        Object.values(input).forEach(i => i.value = '');

    }

    function createElement(type, content, className){
        const element = document.createElement('element');
        element.textContent = content;
        if(className) {
            element.className = className;
        }
        return element;
    }
}