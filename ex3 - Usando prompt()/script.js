var question = prompt("What's your name?");
var answer = document.querySelector('.answer');
alert('My name is: ' + question);
answer.innerHTML = 'My name is: ' + question + '😁';

let contador = 0;

let result = document.querySelector('.result');

let ButtonAdd = document.querySelector('.add');

ButtonAdd.addEventListener('click', function () {
  contador++;
  result.innerHTML = contador;
});

let ButtonRemove = document.querySelector('.remove');

ButtonRemove.addEventListener('click', function () {
  contador--;

  result.innerHTML = contador;

  if (contador <= 0) {
    result.innerHTML = 0;
  }
});
