window.onload = function () {
  var me = document.querySelector('#mypic');
  me.addEventListener('click', greet);
  function greet() {
    alert("Hi!");
  }
}