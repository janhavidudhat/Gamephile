const express = require("express");
const bodyParser = require('body-parser');
const registerUser = require("./register");
// const registerUser = require("../../db/setup")

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.post("/register", (req,res) => {
    console.log(req.body);
    response = {  
      email:req.body.email,  
      name:req.body.name,  
      password:req.body.password  
    };
    console.log(response);  

    registerUser(req.body.email, req.body.name, req.body.password);

    res.end(JSON.stringify(response));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});