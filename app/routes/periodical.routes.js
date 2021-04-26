module.exports = app => {
    const periodicals = require("../controllers/periodical.controller.js");
    const employess = require("../controllers/employee.controller.js");
    const orders = require("../controllers/order.controller.js");
    const controller = require("../controllers/controller.js");
  
    app.get("/periodicalsall", periodicals.findAll);

    app.get("/periodicals/:periodical_id", periodicals.findOne);

    app.get("/periodicalsname/:name", periodicals.findByName);

    app.get("/periodicalsauthor/:publisher", periodicals.findByAuthor);

    app.get("/periodicalsauthorandname/:publisher", periodicals.findByAuthorAndName);

    app.post("/periodicalsall", periodicals.create);

    app.get("/employee/:first_name/:password", employess.login);

    app.get("/employees/:employee_id", employess.getInfoEmployee);

    app.get("/order/:employee_id", orders.orderCount);

    app.get("/orders/:employee_id", orders.orderAll);

    app.get("/deadlines/:employee_id", orders.deadlineCount);

    app.get("/orderP/:periodical_id_1", orders.queue);

    app.get("/orderP2/:periodical_id_1", orders.queue2);

    app.post("/order/:periodical_id", orders.create);

    app.get("/maxTime/:periodical_id_1", orders.maxCount);

    app.get("/checkReading/:employee_id", orders.checkReading);

    app.get("/selectUpdated", orders.selectUpdated);

    app.get("/deleteUpdated", orders.deleteUpdated);


    app.get("/selectAll/:periodical_id_1/:employee_id", orders.selectAll);

    app.get("/updateSendBtn/:periodical_id_1/:employee_id", orders.updateSendBtn);


    app.get("/updateConfirmRec/:order_id", orders.updateConfirmRec);


    app.get("/selectStatus/:periodical_id_1", orders.selectStatus);


    app.put("/order/:order_id/:order_date", orders.update);

    app.get("/notification/:employee_id", controller.count);

    app.get("/notifications/:employee_id", controller.getAll);



  
  };