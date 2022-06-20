function solve() {

    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    const sentences = input.split('.').filter(s => s.length !== 0);

    while (sentences.length > 0){
        const textForParagraph = sentences.splice(0, 3).join('. ') + '.';
        const p = document.createElement('p');

        p.textContent = textForParagraph;
        output.appendChild(p);
    }
}