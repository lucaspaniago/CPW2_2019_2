class Item {

    /**
     * Ao construir um novo objeto de
     * Item, devem ser informadas
     * a descricao e a unidadeDeMedida
     * do novo item.
     * @param {*} descricao Descricao do item
     * @param {*} unidadeDeMedida Unidade de medida do item
     */
    constructor(descricao, unidadeDeMedida) {
        /**
         * Estou me referindo
         * ao descricao deste objeto
         * que está sendo construído
         * aqui (this)
         */
        this.descricao = descricao;
        this.unidadeDeMedida = unidadeDeMedida;
    }
}
