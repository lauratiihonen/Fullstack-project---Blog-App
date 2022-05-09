const {beforeAll, describe, it, expect} = require('@jest/globals')
const supertest = require ('supertest')
const app = require('../index');


beforeAll(async () => {
    const data = {
      username: "laura",
      password: "pass",
    };
  
    const response = await supertest(app)
      .post("/server/auth/login")
      .set("Accept", "application/json")
      .send(data);

      
    expect(response.status).toEqual(200)
  });
  
  
  //TEST CREATE POST
  describe("create new post", () => {
    it("should return the post", async () => {
      const post = {
        title: "test title",
        desc: "testing description",
        username: 'laura'
      };
      const response = await supertest(app)
        .post("/server/posts")
        .set("Authorization", "Bearer" + 'pass')
        .set("Accept", "application/json")
        .send(post);

      expect(response.status).toEqual(200);
      expect(response.body._id).toBeTruthy();
      expect(response.body.title).toEqual("test title");
      expect(response.body.desc).toEqual("testing description");
      expect(response.body.username).toEqual('laura');
      testPostId = response.body._id
    })
  })


//TEST UPDATE POST
describe("update post", () => {
    it("should update the post", async () => {
      const post = {
        title: "test title update",
        desc: "testing description update",
        username: 'laura'
      };
      const response = await supertest(app)
        .put(`/server/posts/${testPostId}`)
        .set("Authorization", "Bearer" + 'pass')
        .set("Accept", "application/json")
        .send(post);
 
      expect(response.status).toEqual(200);
      expect(response.body._id).toBeTruthy();
      expect(response.body.title).toEqual("test title update");
      expect(response.body.desc).toEqual("testing description update");
    })
  })


  //TEST DELETE POST
  describe("delete post", () => {
    it("should delete the post", async () => {
      const post = {
        title: "test title update",
        desc: "testing description update",
        username: 'laura'
      };
      const response = await supertest(app)
        .delete(`/server/posts/${testPostId}`)
        .set("Authorization", "Bearer" + 'pass')
        .set("Accept", "application/json")
        .send(post);

      console.log(response);
      expect(response.status).toEqual(200);
      expect(response.body).toEqual("Post has been deleted");
    })
  })