var button = document.querySelector('.button');
var resultado = document.querySelector('.resultado');
button.addEventListener('click', function () {
  for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      resultado.innerHTML += i + '👉';
    }
  }
});
