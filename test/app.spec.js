const app = require('../src/app');
const supertest = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, world!');
  });
});
