class LembreteView {

    constructor(lembrete) {
        this.controller = new LembreteController(lembrete);

        this.renderizarlistagemLembretes();
    }

    salvarLembrete(event) {
        event.preventDefault();

        let lembrete = document.getElementById('lembrete').value;

        this.controller.salvar(lembrete);

        this.renderizarlistagemLembretes();

        document.getElementById('lembrete').value = '';
    }

    renderizarlistagemLembretes() {

        let lembretes = this.controller.recuperarTodos();


        if (lembretes.length > 0) {
            let areaListagemLembretes = document.getElementById('listagemLembretes');

            /**
             * Limpa a área de listagem
             */
            areaListagemLembretes.innerHTML = '';

            for (let i = 0; i < lembretes.length; i++) {
                let p = document.createElement('p');

                p.innerText = lembretes[i];

                areaListagemLembretes.appendChild(p);
            }
        }
    }
}