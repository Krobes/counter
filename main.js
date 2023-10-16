document.getElementById("increase").addEventListener('click', incrementar);
document.getElementById("decrease").addEventListener('click', decrementar);
document.getElementById("reset").addEventListener('click', reset);

var numeroDOM = document.getElementById("numero");
var numero = 0;

function incrementar() {
  numero = numero + 1;
  numeroDOM.innerHTML = numero;  
}

function decrementar() {
  numero = numero - 1;
  numeroDOM.innerHTML = numero;  
}

function reset() {
  numero = 0;
  numeroDOM.innerHTML = numero;  
}