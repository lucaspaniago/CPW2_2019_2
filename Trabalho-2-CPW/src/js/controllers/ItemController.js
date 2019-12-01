class ItemController {

    constructor(itens) {
        this.itens = itens;
        this.compras = [];
        this.itensFiltrados = [];
    }

    salvar(compra) {
        this.compras.push(compra);
    }

    filtrar(filtro) {
        if (this.compras.length > 0) {
            this.comprasFiltradas = this.compras.item.filter(function (item) {
                let descricao = item.descricao.toLowerCase();
                //let email = item.email.toLowerCase();

                /**
                 * Se descrição do item
                 * conter o filtro do usuário, retorno
                 * o item
                 */
                return descricao.includes(filtro) /* || email.includes(filtro)*/ ;
            });
        }

        return this.comprasFiltradas;
    }

    buscarUnidadeDeMedida(itemSelecionado) {
        
        console.log(itemSelecionado);
        let unidadeDeMedida = this.itens.filter(function (item) {
            let descricao = item.descricao.toLowerCase();
            //let email = item.email.toLowerCase();

            /**
             * Se descrição do item
             * conter o filtro do usuário, retorno
             * o item
             */
            return descricao.includes(itemSelecionado) /* || email.includes(filtro)*/ ;
        });

        // console.log (unidadeDeMedida);
        return unidadeDeMedida[0].unidadeDeMedida;
    }

    buscarItem(itemSelecionado) {
        
        //console.log(itemSelecionado);
        let itemProcurado = this.itens.filter(function (item) {
            let descricao = item.descricao.toLowerCase();
            //let email = item.email.toLowerCase();

            /**
             * Se descrição do item
             * conter o filtro do usuário, retorno
             * o item
             */
            return descricao.includes(itemSelecionado) /* || email.includes(filtro)*/ ;
        });

        // console.log (unidadeDeMedida);
        return itemProcurado[0];
    }


    recuperarTodas() {
        return this.compras;
    }
}