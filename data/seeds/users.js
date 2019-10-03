const crypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'jim', password: crypt.hashSync('yup')},
        {id: 2, username: 'bob', password: crypt.hashSync('yup')},
        {id: 3, username: 'barnbarn',  password: crypt.hashSync('yup')}
      ]);
    });
};
