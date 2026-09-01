
let notas = document.querySelectorAll('.notas');



function enviaForm(){
    //Depois vamos verificar se algum campo de nota está vazio
    
    let nome = document.getElementById('nome').value;
    let quatroNotas = 0;
    let notaMedia = 0;

    let legendas = document.querySelectorAll('.legendas');

    if(nome === ""){alert("Digite o nome do aluno!")}

    for(var i=0; i<notas.length; i++){
        if(notas[i].value === ""){
            alert(`O campo da ${legendas[i].innerHTML} está vazio!`);
        }else{
            quatroNotas += Number(notas[i].value);
        }
    }

    notaMedia = quatroNotas/notas.length;

    document.getElementById('mediaReal').innerHTML = notaMedia;

}

function calcMediaAuto(){
    for(var i=0; i<notas.length; i++){
        notas[i].addEventListener("input", function(){
            console.log("Nota alterada");
        });
    }
}

document.addEventListener("DOMContentLoaded", function(){
    calcMediaAuto();
})



