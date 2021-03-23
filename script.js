const getElement = element => document.querySelector(element);
const liMaker = text =>{
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

const form = getElement('form');
const ul = getElement('ul');
const button = getElement('button');
const input = document.getElementById('item');
let dataArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(dataArray));
const data = JSON.parse(localStorage.getItem('items'));

form.addEventListener('submit', function (e) {
    e.preventDefault()
    dataArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(dataArray))
    liMaker(input.value)
    input.value = ''
  });

data.forEach((item) => {
    liMaker(item)
});

button.addEventListener('click', function(){
      localStorage.clear();
      while( ul.lastChild ){
          ul.removeChild( ul.lastChild );
      }
})