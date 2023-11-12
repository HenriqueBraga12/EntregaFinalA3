//Alert -- Manutenção
function mensagem() {
	console.log("mensagem disparada")
	return alert("Aguarde! Estamos trabalhando");
}

//Redirecionando para pg login
function login () {
	console.log("enviando usuario para login")
	window.location.href='../html/login.html'
}

//Redirecionando para cadastro
function membro(){
	window.location.href='../html/cadastro.html'
}

