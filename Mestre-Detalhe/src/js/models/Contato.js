class Contato {
    
    /**
     * Ao contruir um novo objeto de Contato, devem ser informados o nome, telefone, e-mail, e data
     * de nascimento do novo contato
     * @param {*} nome Nome do contato
     * @param {*} telefone Telefone do contato
     * @param {*} email E-mail do contato
     * @param {*} dataNascimento Data de nascimento do contato
     */
    constructor(nome, telefone, email, dataNascimento) {
        //estou me referindo ao nome deste objeto que está sendo construindo aqui
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }
}