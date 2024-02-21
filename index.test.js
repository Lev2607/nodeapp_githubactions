const request = require('supertest');
const server = require('./index');

afterAll(done => {
  server.close(done);
});

describe('GET /', () => {
  it('responds with Hello, World!', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});