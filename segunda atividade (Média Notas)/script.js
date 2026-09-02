
let notas = document.querySelectorAll('.notas');
let notaMedia = 0;
let legendas = document.querySelectorAll('.legendas');

function enviaForm(){
    //Depois vamos verificar se algum campo de nota está vazio
    let nome = document.getElementById('nome').value;
    if(nome === ""){alert("Digite o nome do aluno!")}
    notaMedia = calcMedia();
    document.getElementById('mediaReal').innerHTML = notaMedia;
}

function calcMedia(){
    let notaDosAlunos = 0;
    for(var i=0; i<notas.length; i++){
        if(notas[i].value === ""){
            alert(`O campo da ${legendas[i].innerHTML} está vazio!`);
            return;
        }else{
            notaDosAlunos += Number(notas[i].value);
        }
    }
    notaMedia = notaDosAlunos/notas.length;
    return notaMedia;
}

function calcMediaAuto(){
    for(var i=0; i<notas.length; i++){
        notas[i].addEventListener("input", function(){
            let notaMedia = calcMedia();
            document.getElementById('mediaReal').innerHTML = notaMedia;
        });
    }
}


/*
document.addEventListener("DOMContentLoaded", function(){
    calcMediaAuto();
})
    */



