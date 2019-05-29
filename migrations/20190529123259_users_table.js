
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    // primary key called id, integer, auto-increment
    tbl.increments()

    tbl.string('name', 128).notNullable()

    tbl
      .integer('roleId')
      .unsigned()
      .references('id')
      .inTable('roles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
