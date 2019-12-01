class ItemView {

    constructor(itens) {
        this.controller = new ItemController(itens);
        this.renderizarCardsItens(itens);
        this.renderizarTabelaItens(itens);
    }

    salvarItem(event) {
        // Inibe a recarga da página
        event.preventDefault();

        /**
         * $ -> document.querySelector
         * val() -> value
         */
        // Recupera os valores do formulário
        let itemSelecionado = $('#item').val();
        let quantidade = $('#quantidade').val();

        // Cria um objeto de item
        let item = new Item(
            itemSelecionado, quantidade);

        // Adiciona o item no nosso BD (no final do vetor)
        this.controller.salvar(item);

        this.limparFormulario();

        let itens = this.controller.recuperarTodos();

        // Limpa o filtro
        document.getElementById('filtro').value = '';

        // Invoca a renderização da tabela
        this.renderizarTabelaItens(itens);

        // Invoca a renderização dos cards
        this.renderizarCardsItens(itens);
    }

    /**
     * Limpa o formulário de cadastro de item
     */
    limparFormulario() {
        [
            'item',
            'quantidade'
        ].forEach(id => document.getElementById(id).value = '');
    }

    renderizarTabelaItens(itens) {
        let areaListagemItens =
            document.getElementById('tabelaItens');

        /**
         * Limpa a área de listagem
         */
        areaListagemItens.innerHTML = '';

        if (itens.length > 0) {
            /**
             * Cria a tabela
             */
            let tabela = document.createElement('table');

            let cabecalho = this.criarCabecalhoTabela();
            // Adiciona o cabeçalho dentro da tabela
            tabela.appendChild(cabecalho);

            let corpoTabela = this.criarCorpoTabela(itens);
            // Adiciona o corpo da tabela na tabela
            tabela.appendChild(corpoTabela);

            // Adiciona a tabela na área de listagem
            areaListagemItens.appendChild(tabela);
        } else {
            let spanMensagem = document.createElement('span');
            spanMensagem.innerText = 'Nenhum item encontrado';
            areaListagemItens.appendChild(spanMensagem);
        }
    }

    criarCabecalhoTabela() {
        /**
        * Cria o cabeçalho da tabela
        */
        let cabecalho = document.createElement('thead');
        let linhaCabecalho = document.createElement('tr');
        let colunaCheck = document.createElement('th');
        colunaCheck.innerText = 'Check';
        let colunaItem = document.createElement('th');
        colunaItem.innerText = 'Item';
        let colunaExcluir = document.createElement('th');
        colunaExcluir.innerText = 'Excluir';

        // Adiciona as colunas na linha do cabeçalho
        linhaCabecalho.appendChild(colunaCheck);
        linhaCabecalho.appendChild(colunaItem);
        linhaCabecalho.appendChild(colunaExcluir);

        // Adiciona a linha do cabeçalho no cabeçalho
        cabecalho.appendChild(linhaCabecalho);

        // Retorna o cabeçalho criado
        return cabecalho;
    }

    criarCorpoTabela(itens) {
        /**
         * Cria o corpo da tabela
         */
        let corpoTabela = document.createElement('tbody');

        /**
         * Cria a linhas de itens
         */
        for (let i = 0; i < itens.length; i++) {
            /**
             * Cria uma nova linha no corpo da tabela
             */
            let linha = document.createElement('tr');

            let celulaCheck = document.createElement('td');
            celulaCheck.innerText = 'Check';
            linha.appendChild(celulaCheck);
            let celulaItem = document.createElement('td');
            celulaItem.innerText = itens[i].unidadeDeMedida + ' de ' + itens[i].descricao;
            linha.appendChild(celulaItem);
            let celulaExcluir = document.createElement('td');
            celulaExcluir.innerText = 'Excluir';
            linha.appendChild(celulaExcluir);

            // Adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
        }

        return corpoTabela;
    }

    renderizarCardsItens(itens) {
        let areaListagemItens =
            document.getElementById('cardsItens');

        /**
         * Limpa a área de listagem
         */
        areaListagemItens.innerHTML = '';

        if (itens.length > 0) {
            /**
             * Ao invés de usar um loop,
             * utilizaremos a função forEach
             */
            itens.forEach(function (item) {
                let card = document.createElement('div');
                let inicialDescricao = document.createElement('span');
                inicialDescricao.innerText = item.descricao.charAt(0);
                let descricao = document.createElement('span');
                let tamanhoDescricao = item.descricao.length;
                descricao.innerText = item.descricao.substr(1, tamanhoDescricao);

                card.appendChild(inicialDescricao);
                card.appendChild(descricao);
                areaListagemItens.appendChild(card);
            });
        } else {
            let spanMensagem = document.createElement('span');
            spanMensagem.innerText = 'Nenhum item encontrado';
            areaListagemItens.appendChild(spanMensagem);
        }
    }

    filtrarItens() {

        let filtro = document.getElementById('filtro').value;
        filtro = filtro.toLowerCase();
        console.log(filtro);

        /**
         * Filtra os Itens de acordo
         * com o texto digitado pelo 
         * usuário no campo de filtro
         */
        let itens = this.controller.filtrar(filtro);

        this.renderizarCardsItens(itens);
        this.renderizarTabelaItens(itens);

    }
}