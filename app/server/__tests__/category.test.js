

//TEST NEW CATEGORY
test('POST /server/categories', async () => {
    const data = {
        name: "cats"
    }

    const response = await supertest(app)
    .post('/server/categories')
    .set('Accept', 'application/json')
    .send(data)

    console.log(response)
    expect(response.status).toEqual(400)
    expect(response.body.category).toEqual('cats')
})

//TEST GET ALL CATEGORIES
test('GET /server/categories', async () => {

    const response = await supertest(app)
    .get('/server/categories')
    .expect(200)
    .then((response) => {
        expect(Array.isArray(response.body.categories)).toBeTruthy()
    })
})