const supertest = require('supertest')
const {test, expect} = require('@jest/globals')
const app = require('../index');
const Category = require('../models/category')


//TEST NEW CATEGORY
test('POST /server/categories', async () => {
    const data = {
        name: "cats"
    }

    const response = await supertest(app)
    .post('/server/categories')
    .set('Accept', 'application/json')
    .send(data)

    expect(response.status).toEqual(200)
    expect(response.body.name).toEqual('cats')
    expect(response.body._id).toBeTruthy()
    testCatId = response.body._id
})

//TEST GET ALL CATEGORIES
test('GET /server/categories', async () => {

    const response = await supertest(app)
    .get('/server/categories')
    .expect(200)
    .then((response) => {
        expect(Array.isArray(response.body)).toBeTruthy()
    })
})


test('delete test category', async () => {
    await Category.findByIdAndDelete(testCatId)
})