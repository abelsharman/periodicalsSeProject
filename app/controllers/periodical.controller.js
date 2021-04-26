const Periodical = require("../models/periodical.model.js");


exports.findAll = (req, res) => {
    Periodical.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};


exports.findOne = (req, res) => {
  Periodical.findById(req.params.periodical_id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Periodical with id ${req.params.periodical_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Periodical with id " + req.params.periodical_id
        });
      }
    } else res.send(data);
  });
};



exports.findByName = (req, res) => {
  Periodical.findByName(req.params.name, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Periodical with name ${req.params.name}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Periodical with name " + req.params.name
        });
      }
    } else res.send(data);
  });
};



exports.findByAuthor = (req, res) => {
  Periodical.findByAuthor(req.params.publisher, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Periodical with publisher ${req.params.publisher}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Periodical with publisher " + req.params.publisher
        });
      }
    } else res.send(data);
  });
};



exports.findByAuthorAndName = (req, res) => {
  Periodical.findByAuthorAndName(req.params.publisher, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Periodical with publisher ${req.params.publisher}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Periodical with publisher " + req.params.publisher
        });
      }
    } else res.send(data);
  });
};



exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const periodical = new Periodical({
    publisher: req.body.publisher,
    circulation: 0,
    name: req.body.name,
    year: req.body.year,
    description: req.body.description,
    url_image: req.body.url_image,
  });

  Periodical.create(periodical, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the periodical."
      });
    else res.send(data);
  });
};