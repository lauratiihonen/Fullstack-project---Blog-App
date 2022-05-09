const supertest = require('supertest')
const {test, expect} = require('@jest/globals')
const app = require('../index')


//TEST SIGNUP
test('POST /server/auth/signup', async () => {
    const data = {
        username: 'matti',
        email: 'matti@email.com',
        password: 'pass'
    }

    const response = await supertest(app)
        .post('/server/auth/signup')
        .set('Accept', 'application/json')
        .send(data)

    console.log(response)
    expect(response.status).toEqual(200)
    expect(response.body.email).toEqual('matti@email.com')
    expect(response.body.username).toEqual('matti')
    expect(response.body.token).toBeTruthy()
    expect(response.body.userId).toBeTruthy()
})

//TEST SIGNUP WITH USERNAME THAT ALREADY EXISTS
test('POST /server/auth/signup', async () => {
    const data = {
        username: 'matti',
        email: 'matt@email.com',
        password: 'pass'
    }

    const response = await supertest(app)
    .post('/server/auth/signup')
    .set('Accept', 'application/json')
    .send(data)

    console.log(response)
    expect(response.status).toEqual(200)
    expect(response.body.email).toEqual('matti@email.com')
    expect(response.body.username).toEqual('matti')
    expect(response.body.token).toBeTruthy()
    expect(response.body.userId).toBeTruthy()
})

//TEST SIGNUP WITH EMAIL THAT ALREADY EXISTS
test('POST /server/auth/signup', async () => {
    const data = {
        username: 'matt',
        email: 'matti@email.com',
        password: 'pass'
    }

    const response = await supertest(app)
    .post('/server/auth/signup')
    .set('Accept', 'application/json')
    .send(data)

    console.log(response)
    expect(response.status).toEqual(200)
    expect(response.body.email).toEqual('matti@email.com')
    expect(response.body.username).toEqual('matti')
    expect(response.body.token).toBeTruthy()
    expect(response.body.userId).toBeTruthy()
})

//TEST LOGIN
test('POST /server/auth/login', async () => {
    const data = {
        username: 'matti',
        password: 'pass'
    }

    const response = await supertest(app)
    .post('/server/auth/login')
    .set('Accept', 'application/json')
    .send(data)

    console.log(response)
    expect(response.status).toEqual(200)
    expect(response.body.username).toEqual('matti')
    expect(response.body.token).toBeTruthy()
    expect(response.body.userId).toBeTruthy()
})


//TEST LOGIN WITH WRONG PASSWORD
test('POST /server/auth/login', async () => {
    const data = {
        username: 'matti',
        password: 'pas'
    }

    const response = await supertest(app)
    .post('/server/auth/login')
    .set('Accept', 'application/json')
    .send(data)

    console.log(response)
    expect(response.status).toEqual(400)
    expect(response.body.username).toEqual('matti')
    expect(response.body.token).toBeTruthy()
    expect(response.body.userId).toBeTruthy()
})


//TEST LOGIN WITH WRONG USERNAME
test('POST /server/auth/login', async () => {
    const data = {
        username: 'matt',
        password: 'pass'
    }

    const response = await supertest(app)
    .post('/server/auth/login')
    .set('Accept', 'application/json')
    .send(data)

    console.log(response)
    expect(response.status).toEqual(400)
    expect(response.body.username).toEqual('matti')
    expect(response.body.token).toBeTruthy()
    expect(response.body.userId).toBeTruthy()
})
