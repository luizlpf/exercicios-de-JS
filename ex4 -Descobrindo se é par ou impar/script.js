var question = prompt('Digite um numero');
var answer = document.querySelector('.answer');

if (question % 2 == 0) {
  alert(question + ' é numero par');
} else {
  alert(question + ' é numero impar ');
}
