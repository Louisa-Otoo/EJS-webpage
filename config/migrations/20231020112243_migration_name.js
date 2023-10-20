/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary(); // Auto-incrementing primary key
        table.string('username').notNullable(); // Username column, not nullable
        table.string('email').notNullable(); // Email column, not nullable
        table.timestamps(true, true); // Adds 'created_at' and 'updated_at' timestamp columns
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users'); 
};
