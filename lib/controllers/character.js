const { Router } = require ('express');
const Character = require('../models/Character-Model');

module.exports = new Router()
    .post('/', (req, res, next) => {
        Character
          .insert(req.body)
          .then(log => res.send(log))
          .catch(next);
    });