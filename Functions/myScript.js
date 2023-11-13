

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

function aviso(){
 alert("Aguarde!\n Estamos trabalhando"); 
}