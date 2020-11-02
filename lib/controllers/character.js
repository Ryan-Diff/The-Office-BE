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
        .then(character => res.send(character))
        .catch(next);
    })

    .put('/:id', (req, res, next) => {
      Character
        .update(req.params.id, req.body)
        .then(character => res.send(character))
        .catch(next);
    })

    .delete('/:id', (req, res, next) => {
      Character
        .delete(req.params.id)
        .then(character => res.send(character))
        .catch(next);
    });