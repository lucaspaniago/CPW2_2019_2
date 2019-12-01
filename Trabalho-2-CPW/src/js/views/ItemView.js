class ItemView {

    constructor(itens) {
        this.compras = [];
        this.controller = new ItemController(itens);
        this.renderizarCardsCompras(this.compras);
        this.renderizarTabelaCompras(this.compras);
    }

    salvarCompra(event) {
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
        let item = this.controller.buscarItem(itemSelecionado);//new Item(itemSelecionado, quantidade);

        // Cria um objeto de compra
        let compra = new Compra(item, quantidade);

        // Adiciona o item no nosso BD (no final do vetor)
        this.controller.salvar(compra);

        this.limparFormulario();

        let compras = this.controller.recuperarTodas();

        // Limpa o filtro
        document.getElementById('filtro').value = '';

        // Invoca a renderização da tabela
        this.renderizarTabelaCompras(compras);

        // Invoca a renderização dos cards
        this.renderizarCardsCompras(compras);
    }

    /**
     * Limpa o formulário de cadastro de item
     */
    limparFormulario() {
        [
            'item',
            'quantidade'
        ].forEach(id => document.getElementById(id).value = '');

        document.getElementById('unidadeDeMedida').innerText = '';
    }

    renderizarTabelaCompras(compras) {
        let areaListagemCompras = document.getElementById('tabelaCompras');

        /**
         * Limpa a área de listagem
         */
        areaListagemCompras.innerHTML = '';

        if (compras.length > 0) {
            /**
             * Cria a tabela
             */
            let tabela = document.createElement('table');

            let cabecalho = this.criarCabecalhoTabela();
            // Adiciona o cabeçalho dentro da tabela
            tabela.appendChild(cabecalho);

            let corpoTabela = this.criarCorpoTabela(compras);
            // Adiciona o corpo da tabela na tabela
            tabela.appendChild(corpoTabela);

            // Adiciona a tabela na área de listagem
            areaListagemCompras.appendChild(tabela);
        } else {
            let spanMensagem = document.createElement('span');
            spanMensagem.innerText = 'Nenhum item encontrado';
            areaListagemCompras.appendChild(spanMensagem);
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

    criarCorpoTabela(compras) {
        /**
         * Cria o corpo da tabela
         */
        let corpoTabela = document.createElement('tbody');

        /**
         * Cria a linhas de compras
         */
        for (let i = 0; i < compras.length; i++) {
            /**
             * Cria uma nova linha no corpo da tabela
             */
            let linha = document.createElement('tr');

            let celulaCheck = document.createElement('td');
            celulaCheck.innerText = 'Check';
            linha.appendChild(celulaCheck);
            let celulaCompra = document.createElement('td');
            celulaCompra.innerText = compras[i].quantidade + ' ' + compras[i].item.unidadeDeMedida + 
            ' de ' + compras[i].item.descricao;
            linha.appendChild(celulaCompra);
            let celulaExcluir = document.createElement('td');
            celulaExcluir.innerText = 'Excluir';
            linha.appendChild(celulaExcluir);

            // Adiciona a nova linha no corpo da tabela
            corpoTabela.appendChild(linha);
        }

        return corpoTabela;
    }

    renderizarCardsCompras(compras) {
        let areaListagemCompras = document.getElementById('cardsCompras');

        /**
         * Limpa a área de listagem
         */
        areaListagemCompras.innerHTML = '';

        if (compras.length > 0) {
            /**
             * Ao invés de usar um loop,
             * utilizaremos a função forEach
             */
            compras.forEach(function (compra) {
                let card = document.createElement('div');
                let inicialDescricao = document.createElement('span');
                inicialDescricao.innerText = compra.item.descricao.charAt(0);
                let descricao = document.createElement('span');
                let tamanhoDescricao = compra.item.descricao.length;
                descricao.innerText = compra.item.descricao.substr(1, tamanhoDescricao);

                card.appendChild(inicialDescricao);
                card.appendChild(descricao);
                areaListagemCompras.appendChild(card);
            });
        } else {
            let spanMensagem = document.createElement('span');
            spanMensagem.innerText = 'Nenhum item encontrado';
            areaListagemCompras.appendChild(spanMensagem);
        }
    }

    filtrarCompras() {

        let filtro = document.getElementById('filtro').value;
        filtro = filtro.toLowerCase();
        console.log(filtro);

        /**
         * Filtra as Compras de acordo
         * com o texto digitado pelo 
         * usuário no campo de filtro
         */
        let compras = this.controller.filtrar(filtro);

        this.renderizarCardsCompras(compras);
        this.renderizarTabelaCompras(compras);

    }

    carregarUnidadeDeMedida(event) {
        // Inibe a recarga da página
        event.preventDefault();

        /**
         * $ -> document.querySelector
         * val() -> value
         */
        // Recupera os valores do formulário
        let itemSelecionado = $('#item').val();
        //let quantidade = $('#quantidade').val();

        console.log(itemSelecionado);

        let unidadeDeMedida = document.getElementById('unidadeDeMedida');
        unidadeDeMedida.innerText = this.controller.buscarUnidadeDeMedida(itemSelecionado);
    }
}