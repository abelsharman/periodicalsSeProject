const sql = require("./db.js");

// constructor
const Notifications = function(notifications) {
  this.employee_id = notifications.employee_id;
  this.description = notifications.description;
  this.name = notifications.name;
  this.unixtime = notifications.unixtime;
  this.link = notifications.link;
};


Notifications.countA = (employee_id, result) => {
    sql.query(`SELECT count(*) as c from notifications where employee_id = ${employee_id} or ISNULL(employee_id);`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found notification: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };

  Notifications.getAll = (employee_id, result) => {
    sql.query(`
    SELECT findById(name) as name, employee_id, description, unixtime, link from notifications where ISNULL(employee_id) and CONVERT(name, DECIMAL) > 0
    union SELECT name, employee_id, description, unixtime, link from notifications where employee_id = ${employee_id} or  ISNULL(employee_id) and description <> 'New offer pending'  order by unixtime desc;`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found notification: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };


  module.exports = Notifications;
