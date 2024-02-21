const request = require('supertest');
const server = require('./index');

afterAll(done => {
  server.close(done);
});

describe('GET /', () => {
  it('responds with the expected HTML', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<h1>Willkommen auf der Startseite</h1>');
    expect(response.text).toContain('<p>Hier ist etwas zusätzlicher Text.</p>');
    expect(response.text).toContain('<p>Du kannst auch andere HTML-Elemente verwenden.</p>');
  });
});