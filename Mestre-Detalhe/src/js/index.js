/*Nosso BD fake! 
(in memory BD)*/

var contatos = [];

//Cria um apelido para a função querySelector
//var sel = document.querySelector;

function salvarContato() {
    //Inibe a recarga da página
    event.preventDefault();
    
    /** 
     * $ -> document.querySelector
     * val -> value
     */
    //Recupera os valores do formulário
    //let nome = document.getElementById('#nome').nodeValue;
    let nome = $('#nome').val();
    let telefone = $('#telefone').val();
    let email = $('#email').val();
    let dataNascimento = $('#dataNascimento').val();

    //Criar um objeto de contato
    let contato = {
        nome,
        telefone,
        email,
        dataNascimento
    };

    //Adiciona o contato no nosso BD (no final) - Função push add no final do vetor
    contatos.push(contato);
    
    console.log(contatos);


}