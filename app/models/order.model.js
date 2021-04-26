const sql = require("./db.js");

// constructor
const Order = function(order) {
  this.periodical_id_1 = order.periodical_id_1;
  this.order_date = order.order_date;
  this.order_status = order.order_status;
  this.employee_id = order.employee_id;
};


Order.orderCount = (employee_id, result) => {
    sql.query(`SELECT count(*) as c FROM orders WHERE employee_id = ${employee_id};`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };

  Order.orderAll = (employee_id, result) => {
    sql.query(`SELECT * FROM orders inner join periodical on orders.periodical_id_1 = periodical.periodical_id WHERE employee_id = ${employee_id};`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };



  Order.deadlineCount = (employee_id, result) => {
    sql.query(`SELECT count(*) as c FROM orders WHERE employee_id = ${employee_id} and order_status = 'reading';`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };



  Order.queue = (periodical_id_1, result) => {
    sql.query(`SELECT * FROM orders inner join employee on orders.employee_id = employee.employee_id WHERE periodical_id_1 = ${periodical_id_1};`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };

  Order.queue2 = (periodical_id_1, result) => {
    sql.query(`SELECT * FROM orders inner join employee on orders.employee_id = employee.employee_id WHERE periodical_id_1 = ${periodical_id_1} and order_status <> 'updated' and order_status <> 'done';`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };



  Order.create = (newOrder, result) => {
    sql.query("INSERT INTO Orders SET ?", newOrder, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created Order: ", { id: res.insertId, ...newOrder });
      result(null, { id: res.insertId, ...newOrder });
    });
  };


  Order.maxCount = (periodical_id_1, result) => {
    sql.query(`SELECT max(order_date) as c FROM orders WHERE periodical_id_1 = ${periodical_id_1};`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };




  Order.updateById = (order_date, order_id, result) => {
    sql.query(`UPDATE orders SET order_status = 'updated', order_date = ${order_date} WHERE order_id = ${order_id};`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };










  Order.checkReading = (employee_id, result) => {
    sql.query(`SELECT order_date from Orders where order_status = 'reading' and employee_id = ${employee_id};`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };




  Order.selectUpdated = (result) => {
    sql.query(`select * from orders where order_status = 'updated' order by order_id desc limit 1;`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };


  Order.deleteUpdated = (result) => {
    sql.query(`delete from orders where order_status = 'updated' order by order_id desc limit 1;`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };




  Order.selectAll = (employee_id, periodical_id_1, result) => {
    sql.query(`select * from orders where periodical_id_1 = ${periodical_id_1} and employee_id = ${employee_id};`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };




  Order.updateSendBtn= (employee_id, periodical_id_1, result) => {
    sql.query(`UPDATE orders SET order_status = 'sent' WHERE employee_id = ${employee_id} and periodical_id_1 = ${periodical_id_1};`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };







  Order.selectStatus = (periodical_id_1, result) => {
    sql.query(`select count(*) as c  from orders where periodical_id_1 = ${periodical_id_1} and order_status = 'sent';`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };


  Order.updateConfirmRec = (order_id, result) => {
    sql.query(`call confirmReceiving(${order_id});`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found orders: ", res);
        result(null, res);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };











module.exports = Order;
