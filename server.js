const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


const path = __dirname + '/app/views/';
app.use(express.static(path));


var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {    
    res.sendFile(path + "index.html");
});

app.get("/main", (req, res) => {    
  res.sendFile(path + "index.html");
});

app.get("/reader", (req, res) => {    
  res.sendFile(path + "index.html");
});

app.get("/periodicals", (req, res) => {    
  res.sendFile(path + "index.html");
});

app.get("/periodical/:id", (req, res) => {    
  res.sendFile(path + "index.html");
});

app.get("/add", (req, res) => {    
  res.sendFile(path + "index.html");
});

app.get("/readnow", (req, res) => {    
  res.sendFile(path + "index.html");
});


app.get("/employee", (req, res) => {    
  res.sendFile(path + "index.html");
});


app.get("/employee/:employee_id", (req, res) => {    
  res.sendFile(path + "index.html");
});


require("./app/routes/periodical.routes.js")(app);




const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});