import Knex from 'knex';

export async function up(Knex: Knex) {
    // CRIA UM TABELA
    return Knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').references('id').inTable('points');
        table.integer('item_id').references('id').inTable('items');
    })
}

export async function down(Knex: Knex) {
    // VOLTA ATRAS (DELETA UMA TABELA)
    return Knex.schema.dropTable('point_items');

}