const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Character = require('../lib/models/Character-Model');

describe('Character routes', () => {
   beforeEach(() => {
       return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
   });
   
   it('Creates a new Character via POST', () => {
       return request(app)
         .post('/api/v1/characters')
         .send({
           name: 'Dwight',
           position: 'Assistant to the Regional Manager',
           quote: 'Identity Theft is not a joke Jim!',
           imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',
           favoriteDessert: 'Can of Pickled Beets from his survival shelter'
         })
         .then(res => {
             expect(res.body).toEqual({
                id: expect.any(String),
                name: 'Dwight',
                position: 'Assistant to the Regional Manager',
                quote: 'Identity Theft is not a joke Jim!',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',
                favoriteDessert: 'Can of Pickled Beets from his survival shelter'
             });
         });
   });
})