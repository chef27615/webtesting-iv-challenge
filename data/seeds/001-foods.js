
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foodsTable')
  .truncate()
  .then(function(){
    return knex('foodsTable').insert([
      { name:'lamb' },
      { name:'chicken' },
      { name:'beef' },
      { name:'pork' },
    ])
  })
};
