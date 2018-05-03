"use strict";

exports.seed = function(knex, Promise) {
  return knex("artists").del()
    .then(function () {
      return knex("artists").insert([
        { id: 1, name: "Green Day", city: "Berkley, CA" },
        { id: 2, name: "Van Halen", city: "Pasadena, CA" },
        { id: 3, name: "U2", city: "Dublin, Ireland" },
        { id: 4, name: "Def Leppard", city: "Sheffield, England" }
      ]);
    });
};
