const express = require("express");
const bodyParser = require('body-parser');
const { registerUser, successfullyLoginUser } = require("./db_access");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Access-Control-Allow-Headers");
  next();
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server wohoooo!" });
});

app.post("/register", (req,res) => {
  console.log(req.body);
  let r = ''
  try {
    registerUser(req.body.email, req.body.name, req.body.password);
    r = {
      '200':'User registered successfully'
    }
  } catch {
    r = {
      '500':'Wrong request'
    }
  }
  res.end(JSON.stringify(r));
});

app.post("/login", (req,res) => {
  console.log(req.body);
  let r = ''
  try {
    if (successfullyLoginUser(req.body.email, req.body.password)) {
      r = {
        '200':'User logged in successfully'
      }
    } else {
      r = {
        '400':'Invalid credentials'
      }
    }
  } catch { 
    r = {
      '500':'Wrong request'
    }
  }
  res.end(JSON.stringify(r));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});