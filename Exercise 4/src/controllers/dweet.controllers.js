const Dweet = require('../models/dweet.model.js');
// Retrieve and return all dweets from the database.
exports.findAll = (req, res) => {
  Dweet.find()
    .then(dweets => {
    res.send(dweets);
  }).catch(err => {
    res.status(500).send({
    message: err.message || "Something went wrong while getting list of dweets."
  });
  });
};
// Create and Save a new Dweet
exports.create = (req, res) => {
    // Validate request
    if(!req.body) {
      return res.status(400).send({
      message: "Please fill all required field"
    });
    }
    // Create a new Dweet
    const dweet = new Dweet({
      dweet: req.body.dweet,
      posted_by: req.body.posted_by
    });
    // Save dweet in the database
    dweet.save()
      .then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
      message: err.message || "Something went wrong while creating new dweet."
    });
    });
};
// Find a single Dweet with a id
exports.findOne = (req, res) => {
   Dweet.findById(req.params.id)
    .then(dweet => {
    if(!dweet) {
     return res.status(404).send({
     message: "Dweet not found with id " + req.params.id
   });
  }
   res.send(dweet);
  }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).send({
      message: "Dweet not found with id " + req.params.id
    });
  }
  return res.status(500).send({
    message: "Error getting dweet with id " + req.params.id
  });
  });
};
// Update a Dweet identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if(!req.body) {
    return res.status(400).send({
    message: "Please fill all required field"
  });
  }
  // Find dweet and update it with the request body
  Dweet.findByIdAndUpdate(req.params.id, {
    dweet: req.body.dweet,
  }, {new: true})
  .then(dweet => {
   if(!dweet) {
     return res.status(404).send({
     message: "dweet not found with id " + req.params.id
   });
  }
  res.send(dweet);
  }).catch(err => {
  if(err.kind === 'ObjectId') {
    return res.status(404).send({
    message: "dweet not found with id " + req.params.id
  });
  }
  return res.status(500).send({
    message: "Error updating dweet with id " + req.params.id
  });
  });
};
// Delete a Dweet with the specified id in the request
exports.delete = (req, res) => {
  Dweet.findByIdAndRemove(req.params.id)
  .then(dweet => {
    if(!dweet) {
      return res.status(404).send({
      message: "dweet not found with id " + req.params.id
    });
    }
    res.send({message: "dweet deleted successfully!"});
  }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
      message: "dweet not found with id " + req.params.id
    });
    }
    return res.status(500).send({
      message: "Could not dweet dweet with id " + req.params.id
    });
  });
};