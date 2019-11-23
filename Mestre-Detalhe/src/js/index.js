/*Nosso BD fake!
(in memory BD)*/

let lucas = new Contato('Lucas', '(99) 99999-9999', 'lucas@gmail.com', '08/09/1987');
let suellen = new Contato('Suellen', '(99) 99999-9999', 'suellen@gmail.com', '08/09/1987');
let sansa = new Contato('Sansa', '(99) 99999-9999', 'sansa@gmail.com', '08/09/1987');
let arya = new Contato('Arya', '(99) 99999-9999', 'arya@gmail.com', '08/09/1987');

var contatos = [lucas, suellen, sansa, arya];

/**
 * Instancia o objeto da
 * ContatoView
 */
var contatoView = new ContatoView(contatos);
contatoView.renderizarTabelaContatos();
contatoView.renderizarCardsContatos();