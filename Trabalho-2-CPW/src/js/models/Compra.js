class Compra {

    /**
     * Ao construir um novo objeto de
     * Compra, devem ser informados
     * o item e a quantidade de itens
     * da nova compra.
     * @param {*} item Descricao do item
     * @param {*} quantidade Unidade de medida do item
     */
    constructor(item, quantidade) {
        /**
         * Estou me referindo
         * ao descricao deste objeto
         * que está sendo construído
         * aqui (this)
         */
        this.item = item;
        this.quantidade = quantidade;
    }
}
