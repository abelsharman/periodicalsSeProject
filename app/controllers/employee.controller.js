const Employee = require("../models/employee.model.js");




  exports.login = (req, res) => {
    Employee.login(req.params.first_name, req.params.password, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Employee with first name ${req.params.first_name}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Employee with first name" + req.params.first_name
          });
        }
      } else res.send(data);
    });
  };



  exports.getInfoEmployee = (req, res) => {
    Employee.getInfoEmployee(req.params.employee_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Employee with id ${req.params.employee_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Employee with id " + req.params.employee_id
          });
        }
      } else res.send(data);
    });
  };

