
let notas = document.querySelectorAll('.notas');
let notaMedia = 0;
let legendas = document.querySelectorAll('.legendas');

function enviaForm(){
    
    let nome = document.getElementById('nome').value;
    if(nome === ""){
        alert("Digite o nome do aluno!")
        return;
    }

    if(!verificaNota()){
        alert("Um campo de nota está vazio!");
    }else{
        window.location.href = "resultado.html";
    }
}

function verificaNota(){
    for(var i=0; i<notas.length; i++){
        if(notas[i].value === ""){
            return false;
        }
    }

    return true;
}

function calcMedia(){
    let notaDosAlunos = 0;
    for(var i=0; i<notas.length; i++){
        notaDosAlunos += Number(notas[i].value);
    }
    notaMedia = notaDosAlunos/notas.length;
    return notaMedia;
}

function calcMediaAuto(){
    
    if(verificaNota() === true){
        document.getElementById('mediaReal').innerHTML = calcMedia();
    }else{
        return;
    } 
}

function addEvent(){
    for(var i=0; i<notas.length; i++){
        notas[i].addEventListener("input", function(){
            calcMediaAuto();
        });
    }
    return;
}



document.addEventListener("DOMContentLoaded", function(){
    addEvent();
});




