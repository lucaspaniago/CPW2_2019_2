/**Utilizareos a variável global do jQuery ($) para carregar a máscara de telefone assim que a página for carregada */

$(document).ready(function() {
    // Implementa a máscara de telefone

    //document.getElementById('telefone')
    //com jQuery posso fazer apenas assim:
    $('#telefone').mask('(00) 00000-0000');
})