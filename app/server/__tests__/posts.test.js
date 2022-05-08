const {beforeAll, describe, it, expect} = require('@jest/globals')
const supertest = require ('supertest')
const express = require('express')
const app = express()


const loggedInUser = {
    username: '',
    token: ''
}

beforeAll(async () => {
    const data = {
      username: "laura",
      password: "pass",
    };
  
    const response = await supertest(app)
      .post("/server/auth/signup")
      .set("Accept", "application/json")
      .send(data);
    loggedInUser.userId = response.body.userId;
    loggedInUser.username = response.body.username;
    loggedInUser.token = response.body.token;
  });
  
  //TEST CREATE POST
  describe("create new post", () => {
    it("should return the post", async () => {
      const post = {
        title: "test title",
        desc: "testing description",
        username: loggedInUser.userId,
      };
      const response = await supertest(app)
        .post("/server/posts")
        .set("Authorization", "Bearer" + loggedInUser.token)
        .set("Accept", "application/json")
        .send(post);
      console.log(response);
      expect(response.status).toEqual(200);
      expect(response.body.post.id).toBeTruthy();
      expect(response.body.post.title).toEqual("test title");
      expect(response.body.post.desc).toEqual("testing description");
      expect(response.body.post.username).toEqual(loggedInUser.userId);
    })
  })


//TEST UPDATE POST
describe("update post", () => {
    it("should update the post", async () => {
      const post = {
        title: "test title update",
        desc: "testing description update",
        username: loggedInUser.userId,
      };
      const response = await supertest(app)
        .post("/server/posts/62742396c96e9623691b7703")
        .set("Authorization", "Bearer" + loggedInUser.token)
        .set("Accept", "application/json")
        .send(post);
      console.log(response);
      expect(response.status).toEqual(200);
      expect(response.body.post.title).toBeTruthy();
      expect(response.body.post.title).toEqual("test title update");
      expect(response.body.post.desc).toEqual("testing description update");
    })
  })


  //TEST DELETE POST
  describe("delete post", () => {
    it("should delete the post", async () => {
      const response = await supertest(app)
        .delete("/server/posts/62742396c96e9623691b7703")
        .set("Authorization", "Bearer" + loggedInUser.token)
        .set("Accept", "application/json")
      console.log(response);
      expect(response.status).toEqual(200);
      expect(response.body.message).toEqual("Post has been deleted");
    })
  })

  