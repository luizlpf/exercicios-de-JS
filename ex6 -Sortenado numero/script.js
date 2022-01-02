var button = document.querySelector('.button');
var n = 2;

button.addEventListener('click', function () {
  descubra();
});

function descubra() {
  var choose = prompt('Digite um valor ');
  var aleatory = Math.floor(Math.random() * n + 1);
  console.log('o valor aleatorio é ' + aleatory);
  if (aleatory == choose) {
    alert('acertou miseravi');
  } else {
    alert('tente de novo');
  }
}
