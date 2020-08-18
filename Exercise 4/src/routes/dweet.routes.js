const express = require('express')
const router = express.Router()
const dweetController = require('../controllers/dweet.controllers');
// Retrieve all dweets
router.get('/s', dweetController.findAll);
// Create a new dweet
router.post('/create', dweetController.create);
// Retrieve a single dweet with id
router.get('/:id', dweetController.findOne);
// Update a dweet with id
router.put('/:id/update', dweetController.update);
// Delete a dweet with id
router.delete('/:id/delete', dweetController.delete);

module.exports = router