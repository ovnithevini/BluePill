const request = require('supertest');
const express = require('express');
const router = require('../controllers/FarmaciaController'); 

const app = express();
app.use(express.json());
app.use('/farmacias', router);

// Teste para a rota GET '/'
describe('GET /farmacias', () => {
  it('should get all farmacias', async () => {
    const response = await request(app).get('/farmacias');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});

module.exports = router;