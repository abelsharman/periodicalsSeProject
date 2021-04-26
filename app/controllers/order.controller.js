const Order = require("../models/order.model.js");



exports.orderCount = (req, res) => {
    Order.orderCount(req.params.employee_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Order with id ${req.params.employee_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Order with id " + req.params.employee_id
          });
        }
      } else res.send(data);
    });
  };


exports.orderAll = (req, res) => {
    Order.orderAll(req.params.employee_id, (err, data) => {
      res.send(data);
    });
  };



  exports.deadlineCount = (req, res) => {
    Order.deadlineCount(req.params.employee_id, (err, data) => {
      res.send(data);
    });
  };



  exports.queue = (req, res) => {
    Order.queue(req.params.periodical_id_1, (err, data) => {
      res.send(data);
    });
  };

  exports.queue2 = (req, res) => {
    Order.queue2(req.params.periodical_id_1, (err, data) => {
      res.send(data);
    });
  };


  exports.create = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    const order = new Order({
      periodical_id_1: req.body.periodical_id_1,
      order_date: req.body.order_date,
      order_status: req.body.order_status,
      employee_id: req.body.employee_id,
    });
  
    Order.create(order, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the order."
        });
      else res.send(data);
    });
  };


  exports.maxCount = (req, res) => {
    Order.maxCount(req.params.periodical_id_1, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Order with id ${req.params.periodical_id_1}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Order with id " + req.params.periodical_id_1
          });
        }
      } else res.send(data);
    });
  };


  exports.checkReading = (req, res) => {
    Order.checkReading(req.params.employee_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Order with id ${req.params.employee_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Order with id " + req.params.employee_id
          });
        }
      } else res.send(data);
    });
  };



  exports.selectUpdated = (req, res) => {
    Order.selectUpdated((err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Order.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Order"
          });
        }
      } else res.send(data);
    });
  };



  exports.update = (req, res) => {
    Order.updateById(req.params.order_date, req.params.order_id, (err, data) => {
      res.send(data);
    });
  };


  exports.updateSendBtn = (req, res) => {
    Order.updateSendBtn(req.params.employee_id, req.params.periodical_id_1, (err, data) => {
      res.send(data);
    });
  };

  exports.updateConfirmRec = (req, res) => {
    Order.updateConfirmRec(req.params.order_id, (err, data) => {
      res.send(data);
    });
  };

  exports.selectStatus = (req, res) => {
    Order.selectStatus(req.params.periodical_id_1, (err, data) => {
      res.send(data);
    });
  };



  exports.deleteUpdated = (req, res) => {
    Order.deleteUpdated((err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Order.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Order"
          });
        }
      } else res.send(data);
    });
  };


  exports.selectAll = (req, res) => {
    Order.selectAll(req.params.employee_id, req.params.periodical_id_1, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Order.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Order"
          });
        }
      } else res.send(data);
    });
  };


