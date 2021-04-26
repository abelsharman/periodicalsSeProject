const Notifications = require("../models/notifications.model.js");




exports.count = (req, res) => {
  Notifications.countA(req.params.employee_id, (err, data) => {
    res.send(data);
  });
};


exports.getAll = (req, res) => {
  Notifications.getAll(req.params.employee_id, (err, data) => {
    res.send(data);
  });
};


