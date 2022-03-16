import supertest from 'supertest';
import app from '../app.js'

//http errors:
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

const request = supertest(app);

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request.get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("POST /users", () => {
  // Given-When-Then
  describe("Given a user and password", () => {
    //It should response with 200 status code
    test("It should response with 200 status code", async () => {
      const response = await request.get("/users").send({
        username: "username",
        password: "password"
      });
      expect(response.statusCode).toBe(200);
    });
    //It should response with a json object
    //It should response with a json object containg the user id
    //It should response with a json object containg the user password

  });
 
});