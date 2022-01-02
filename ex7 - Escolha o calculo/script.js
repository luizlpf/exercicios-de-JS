var button = document.querySelector('.button');
var resultado;
button.addEventListener('click', function () {
  var num1 = Number(prompt('Digite um numero'));
  var num2 = Number(prompt('Digite um numero'));
  var escolha = Number(
    prompt(
      'escolha uma das opções [1]Somar [2]Subtrair [3]Multiplica [4]Dividir'
    )
  );

  switch (escolha) {
    case 1:
      soma();
      break;
    case 2:
      subtracao();
      break;
    case 3:
      multiplica();
      break;
    case 4:
      divisao();
      break;

    default:
      break;
  }

  function multiplica() {
    resultado = num1 * num2;
    alert(resultado);
  }
  function divisao() {
    resultado = num1 / num2;
    alert(resultado);
  }
  function soma() {
    resultado = num1 + num2;
    alert(resultado);
  }
  function subtracao() {
    resultado = num1 - num2;
    alert(resultado);
  }
});
