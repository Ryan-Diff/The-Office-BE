const { Router } = require ('express');
const Character = require('../models/Character-Model');

module.exports = new Router()
    .post('/', (req, res, next) => {
        Character
          .insert(req.body)
          .then(character => res.send(character))
          .catch(next);
    })

    .get('/', (req, res, next) => {
      Character
        .find()
        .then(characters => res.send(characters))
        .catch(next);
    })

    .get('/:id', (req, res, next) => {
      Character
        .findById(req.params.id)
        .then(log => res.send(log))
        .catch(next);
    });