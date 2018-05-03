"use strict";

exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable("artists", (table) => {
      table.increments();
      table.varchar("name", 255).notNullable().defaultTo("");
      table.varchar("city", 255).notNullable().defaultTo("");
      table.timestamps(true, true);
    }),
    knex.schema.createTable("albums", (table) => {
      table.increments();
      table.varchar("title", 255).notNullable().defaultTo("");
      table.integer("artist_id")
        .notNullable()
        .references("id")
        .inTable("artists")
        .onDelete("CASCADE");
      table.integer("rating").notNullable().defaultTo(0);
      table.timestamps(true, true);
    })
  ])
};

exports.down = (knex, Promise) => {

};
