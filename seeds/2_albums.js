"use strict";

exports.seed = (knex, Promise) => {
  return knex("albums")
    .del()
    .then(() => {
      return knex('albums').insert([
        { id: 1, title: "Dookie", artist_id: 1, rating: 3 },
        { id: 2, title: "American Idiot", artist_id: 1, rating: 3 },
        { id: 3, title: "5150", artist_id: 2, rating: 3 },
        { id: 4, title: "OU812", artist_id: 2, rating: 3 },
        { id: 5, title: "The Joshua Tree", artist_id: 3, rating: 3 },
        { id: 6, title: "War", artist_id: 3, rating: 3 },
        { id: 7, title: "Hysteria", artist_id: 4, rating: 3 },
        { id: 8, title: "Pyromania", artist_id: 4, rating: 3 }
      ]);
    });
};
