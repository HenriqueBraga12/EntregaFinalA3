
// ...DROPDOWN DO MOBILE...............
function myFunction() {
 document.getElementById("myDropdown").classList.toggle("mostrar");
}

window.onclick = function(e) {
 if (!e.target.matches('.menuBar')) {
 var myDropdown = document.getElementById("myDropdown");
   if (myDropdown.classList.contains('mostrar')) {
     myDropdown.classList.remove('mostrar');
   }
 }
}
// ...AVISO DE TRABALHANDO...............
function aviso(){
 alert("Aguarde!\n Estamos trabalhando"); 
}
// ...DROPDOWN DE +JOGOS...............
function jogos(){
  document.getElementById("maisJogos").classList.toggle("mostrar");
}
window.onclick = function(e) {
  if (!e.target.matches('.boxJogos')) {
  var dropdownJogos = document.getElementById("dropdownJogos");
    if (dropdownJogos.classList.contains('mostrar')) {
      dropdownJogos.classList.remove('mostrar');
    }
  }
 }