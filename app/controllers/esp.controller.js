const Esp = require("../models/esp.model.js");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Esp
  const esp = new Esp({
    status: req.body.status,
  });

  // Save Esp in the database
  Esp.create(esp, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Esp."
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body, req.params);

  Esp.updateById(
    req.params.id,
    new Esp(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Esp with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Esp with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};