class ItemController {

    constructor(itens) {
        this.itens = itens;
        this.itensFiltrados = [];
    }

    salvar(item) {
        this.itens.push(item);
    }

    filtrar(filtro) {
        if (this.itens.length > 0) {
            this.itensFiltrados = this.itens.filter(function (item) {
                let descricao = item.descricao.toLowerCase();
                //let email = item.email.toLowerCase();

                /**
                 * Se descrição do item
                 * conter o filtro do usuário, retorno
                 * o item
                 */
                return descricao.includes(filtro)/* || email.includes(filtro)*/;

                //NÃO ENTEDI A FUNÇÃO ACIMA, PERGUNTAR PARA O PROFESSOR
            });
        }

        return this.itensFiltrados;
    }

    recuperarTodos() {
        return this.itens;
    }
}