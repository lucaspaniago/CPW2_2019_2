class LembreteController {

    constructor(lembretes) {
        this.lembretes = lembretes;
        this.lembretesFiltrados = lembretes;
    }

    salvar(lembrete) {
        this.lembretes.push(lembrete);
    }

    recuperarTodos() {
        return this.lembretes;
    }
}