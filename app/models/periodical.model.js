const sql = require("./db.js");

// constructor
const Periodical = function(periodical) {
  this.periodical_id = periodical.periodical_id;
  this.publisher = periodical.publisher;
  this.circulation = periodical.circulation;
  this.name = periodical.name;
  this.year = periodical.year;
  this.description = periodical.description;
  this.url_image = periodical.url_image;
};




Periodical.getAll = result => {
    sql.query("SELECT * FROM periodical;", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Periodical: ", res);
      result(null, res);
  });
};



Periodical.findById = (periodical_id, result) => {
  sql.query(`SELECT * FROM periodical WHERE periodical_id = ${periodical_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found periodical: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};


Periodical.findByName = (name, result) => {
  sql.query(`SELECT * FROM periodical WHERE name like '%${name}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Periodical: ", res);
    result(null, res);
  });
};


Periodical.findByAuthor = (publisher, result) => {
    sql.query(`SELECT * FROM periodical WHERE publisher like '%${publisher}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Periodical: ", res);
      result(null, res);
    });
};



Periodical.findByAuthorAndName = (publisher, result) => {
  sql.query(`SELECT * FROM periodical WHERE publisher like '%${publisher}%' or name like '%${publisher}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Periodical: ", res);
    result(null, res);
  });
};


Periodical.create = (newPeriodical, result) => {
  sql.query("INSERT INTO periodical SET ?", newPeriodical, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created periodical: ", { id: res.insertId, ...newPeriodical });
    result(null, { id: res.insertId, ...newPeriodical });
  });
};



module.exports = Periodical;

