/*Nosso BD fake! 
(in memory BD)*/

var contatos = [
    {
        nome: 'Lucas',
        telefone: '(99) 99999-9999',
        email: 'lucas@gmail.com',
        dataNascimento: '08/09/1987'
    },
    {
        nome: 'Suellen',
        telefone: '(67) 99999-9999',
        email: 'morena@gmail.com',
        dataNascimento: '08/09/1987'
    },
    {
        nome: 'Sansa',
        telefone: '(67) 99999-9999',
        email: 'sansa@gmail.com',
        dataNascimento: '08/09/1987'
    },
    {
        nome: 'Arya',
        telefone: '(67) 99999-9999',
        email: 'arya@gmail.com',
        dataNascimento: '08/09/1987'
    }
];

renderizarTabelaContatos();
renderizarCardsContatos();

//Cria um apelido para a função querySelector
//var sel = document.querySelector;

function salvarContato(event) {
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

    // Invoca a renderização da tabela
    renderizarTabelaContatos();
    renderizarCardsContatos();
}

function renderizarTabelaContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos = document.getElementById('tabelaContatos');

        /**
         * Limpa a área de listagem
         */
        areaListagemContatos.innerHTML = '';

        /**
         * Cria a tabela
         */
        let tabela = document.createElement('table');

        let cabecalho = criaCabecalhoTabela();

        // Adiciona o cabeçalho dentro da tabela
        tabela.appendChild(cabecalho);

        // Adiciona o corpo da tabela na tabela
        let corpoTabela = criarCorpoTabela();
        tabela.appendChild(corpoTabela);

        // Adiciona a tabela na área de listagem
        areaListagemContatos.appendChild(tabela);
    }
}

function criaCabecalhoTabela() {
    /**
         * Cria o cabeçalho da tabela
         */
    let cabecalho = document.createElement('thead');
    let linhaCabecalho = document.createElement('tr');
    let colunaNome = document.createElement('th');
    colunaNome.innerText = 'Nome';
    let colunaTelefone = document.createElement('th');
    colunaTelefone.innerText = 'Telefone';
    let colunaEmail = document.createElement('th');
    colunaEmail.innerText = 'E-mail';
    let colunaDataNascimento = document.createElement('th');
    colunaDataNascimento.innerText = 'Data Nascimento';

    // Adiciona as colunas na linha do cabeçalho
    linhaCabecalho.appendChild(colunaNome);
    linhaCabecalho.appendChild(colunaTelefone);
    linhaCabecalho.appendChild(colunaEmail);
    linhaCabecalho.appendChild(colunaDataNascimento);

    // Adiciona a linha do cabeçalho no cabeçalho
    cabecalho.appendChild(linhaCabecalho);

    return cabecalho;
}

function criarCorpoTabela() {
    let corpoTabela = document.createElement('tbody');

    /**
     * Cria as linhas de contatos
     */
    for (let i = 0; i < contatos.length; i++) {
        //Cria uma nova linha no corpo da tabela
        let linha = document.createElement('tr');

        let celulaNome = document.createElement('td');
        celulaNome.innerText = contatos[i].nome;
        linha.appendChild(celulaNome);
        let celulaTelefone = document.createElement('td');
        celulaTelefone.innerText = contatos[i].telefone;
        linha.appendChild(celulaTelefone);
        let celulaEmail = document.createElement('td');
        celulaEmail.innerText = contatos[i].email;
        linha.appendChild(celulaEmail);
        let celulaDataNascimento = document.createElement('td');
        celulaDataNascimento.innerText = contatos[i].dataNascimento;
        linha.appendChild(celulaDataNascimento);

        // Adiciona a nova linha no corpo da tabela
        corpoTabela.appendChild(linha);
    }

    return corpoTabela;
}

function renderizarCardsContatos() {
    if (contatos.length > 0) {
        let areaListagemContatos = document.getElementById('cardsContatos');

        // Ao invés de usar um loop normal, vamos usar foreach

        contatos.forEach(function (contato) {
            let card = document.createElement('div');
            let inicialNome = document.createElement('span');
            inicialNome.innerText = contato.nome.charAt(0);
            let nome = document.createElement('span');
            let tamanhoNome = contato.nome.length;
            nome.innerText = contato.nome.substr(1, tamanhoNome);

            let telefone = document.createElement('span');
            telefone.innerText = contato.telefone;

            let email = document.createElement('span');
            email.innerText = contato.email;

            let dataNascimento = document.createElement('span');
            dataNascimento.innerText = contato.dataNascimento;

            card.appendChild(inicialNome);
            card.appendChild(nome);
            card.appendChild(telefone);
            card.appendChild(email);
            card.appendChild(dataNascimento);

            areaListagemContatos.appendChild(card);
        });
    }
}