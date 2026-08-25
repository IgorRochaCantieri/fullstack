//Aqui "cep" se torna uma referencia do elemento <input> que possui o id=cep
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");

//Aqui adicionamos um evento ao elemento cep e quando este evento acontecer uma função sera executada
cep.addEventListener("blur", function(){
    //console.log(cep.value);
    // Criamos uma nova string sem o hífen (novoValor)
    const novoValor = cep.value.replace("-",""); 
    //console.log(novoValor);

    // Utilizamos um template literal para montar a URL da API
    const url = `https://viacep.com.br/ws/${novoValor}/json/`;

    //fetch(url) inicia uma requisição para a URL
    //"resposta" é o nome que nós escolhemos para receber o objeto de resposta fornecido pelo fetch().
    fetch(url).then(function(resposta){
        console.log(url);
        return resposta.json();
    }).then(function(dados){
        console.log(dados.logradouro);
        rua.value = dados.logradouro;
    });
}
);



/*teste
const nome = "Igor"
const menssagem = `Ola ${nome}`
console.log(menssagem);
*/
