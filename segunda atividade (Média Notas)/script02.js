document.addEventListener("DOMContentLoaded", function(){
    mostraResultado();
});


function mostraResultado(){
    let nomeDoAluno = localStorage.getItem("nome");
    let notaMedia = localStorage.getItem("notaMedia");
    let resultado = document.querySelector('.result');

    if(notaMedia >= 6){
        document.getElementById('resultado').innerHTML = "APROVADO!";
        resultado.classList.add("text-success");
    }else if(notaMedia >= 2){
        document.getElementById('resultado').innerHTML = "DE RECUPERAÇÃO!";
        resultado.classList.add("text-warning");
    }else{
        document.getElementById('resultado').innerHTML = "REPROVADO!";
        resultado.classList.add("text-danger");
    }
}