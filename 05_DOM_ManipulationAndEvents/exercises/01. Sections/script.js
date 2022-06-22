function create(words) {

   const content = document.getElementById('content');

   for (let word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');

      p.textContent = word;
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', reveal);

      content.appendChild(div);
   }

   function reveal(e) {
      e.currentTarget.children[0].style.display = '';
   }

   function hide(e){
      e.currentTarget.children[0].style.display = 'none';
   }
}