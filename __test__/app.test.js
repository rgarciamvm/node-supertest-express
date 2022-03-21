import app from '../app.js';
import supertest from 'supertest';


const request = supertest(app);

// CRUD Create.
// Given-when-then
describe('CRUD Create : POST /users', () => {
  describe('Dado (given) un usuario y un password', () => {
    //(then) Deberia respoder status code 200;
    test('(then) Deberia respoder status code 200', async () => {
      const response = await request.post("/users/register").send({
        username: "pep@domini.es",
        password: "pam"
      });
      expect(response.statusCode).toBe(200);
    });
    //(then) Deberia devolver un 'content-type' json";
    test('(then) Deberia devolver un content-type json', async () => {
      const response = await request.post("/users/register").send({
        username: "pep@domini.es",
        password: "pam"
      }).expect("Content-Type", /json/);

      //expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });
    //(then) Deberia tener username en el JSON request"
    test('(then) Deberia tener username en el JSON request', async () => {
      const response = await request.post("/users/register").send({
        username: "pep@domini.es",
        password: "pam"
      });
      expect(response.body.username).toBeDefined();
    });
    //(then) ...   
  });

});

describe('CRUD Read : GET /users', () => {
  describe('Dado (given) un usuario y un password en /login', () => {
    //(then) Deberia respoder status code 200 si el usuari exite;
    test('(then) Deberia respoder status code 400', async () => {
      const response = await request.get("/users/login").send({
        username: "pep@domini.es",
        password: "pam"
      });
      expect(response.statusCode).toBe(200);
    });

    //(then) Deberia devolver el password encriptado;
    //(then) Deberia devolver un timestamp"
    //(then) ...   
  });
});

