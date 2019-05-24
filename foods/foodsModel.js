const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  const [id] = await db('foodsTable').insert(hobbit, 'id');
  return db('foodsTable')
  .where({id})
  .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return db('foodsTable')
  .where({id})
  .del()
}

function getAll() {
  return db('foodsTable');
}

function findById(id) {
  return null;
}