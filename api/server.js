const express = require('express');
const foods = require('../foods/foodsModel');

const server = express();
server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({message: 'ok'})
})

server.get('/foods', async (req, res) => {
    const rows = await foods.getAll();
    res.status(200).json(rows)
})

module.exports = server;