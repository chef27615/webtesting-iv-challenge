
const Foods = require('./foodsModel');
const db = require('../data/dbConfig')


describe('foods router', () => {
    beforeEach(async () => {
        await db('foodsTable').truncate();
    })
    
    it('should insert', async () => {
        await Foods.insert({ name: 'cabbage'});
        const foods = await db('foodsTable');
        expect(foods).toHaveLength(1)
    })

    it('should insert the provided foods into the db', async () => {
        let food = await Foods.insert({ name: 'fish' });
        expect(food.name).toBe('fish');
    })
})


describe('delete()', async () => {
    beforeEach(async () => {
        await db('foodsTable').truncate();
    })
    it('should remove', async() => {
        await Foods.insert({name: 'rosemary'});
        await Foods.insert({name: 'cumin'});
        const foods = await db('foodsTable');
        expect(foods).toHaveLength(2);

        const id = foods[0].id;

        await Foods.remove(id)
        const changedFoods = await db('foodsTable')
        expect(changedFoods).not.toHaveLength(2)
        expect(changedFoods).toHaveLength(1)
    })
})