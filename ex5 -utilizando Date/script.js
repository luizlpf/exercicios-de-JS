var button = document.querySelector('.button');

button.addEventListener('click', function () {
  var dateYear = new Date();

  console.log(dateYear.getFullYear());
});
