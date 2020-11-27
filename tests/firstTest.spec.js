const express = require('express');
const request = require('supertest');
const expect = require('chai').expect;

const app = express();

app.get('/first', (err, res) => {
    res.status(200).json({ ok: 'response' });
});

describe('First test', () => {
    it('OK response', () => {
        request(app)
            .get('/first/')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
            });
    });

    it.skip('Mocky OK response', (done) => {
        request('http://mocky.io')
            .get('/v3/5582c9b2-298f-450e-8a80-aa9aeb52520f')
            .expect(200, done);
    });
});
