
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', tbl => {
    // primary key called id, integer, auto-increment
    tbl.increments()

    tbl
      .string('name', 128)
      .notNullable()
      .unique()
    tbl.timestamps(true, true)
  })
};

// Undo changes
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles')
};
