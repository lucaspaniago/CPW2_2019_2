/**
 * Nosso BD fake!
 * (in memory DB)
 */

/**
 * Cria o objeto tomate
 */
let tomate = new Item ('Tomate', '1 kg');
let manteiga = new Item ('Manteiga', '2 unidades');

var itens = [tomate,manteiga];

/**
 * Instancia o objeto da
 * ItemView
 */
var itemView = new ItemView(itens);

