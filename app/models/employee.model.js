const sql = require("./db.js");

// constructor
const Employee = function(employee) {
  this.employee_id = employee.employee_id;
  this.last_name = employee.last_name;
  this.first_name = employee.first_name;
  this.email = employee.email;
  this.job_title = employee.job_title;
  this.phone_number = employee.phone_number;
  this.zip_code = employee.zip_code;
  this.password = employee.password;
};


Employee.login = (first_name, password, result) => {
  sql.query(`SELECT * FROM employee WHERE first_name = '${first_name}' and password='${password}';`, (err, res) => {
    res.set('Access-Control-Allow-Origin', '*') 
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found employee: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};



Employee.getInfoEmployee = (employee_id, result) => {
  sql.query(`SELECT * FROM employee WHERE employee_id = ${employee_id};`, (err, res) => {
    res.set('Access-Control-Allow-Origin', '*') 
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found employee: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};






module.exports = Employee;

