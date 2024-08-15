//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
//need to para mabasa yung mga nasa body ng HTTP request
import bodyParser from "body-parser";
//need para makuha yung file path dynamically
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "ILoveProgramming";
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

//function to validate password
function ValidatePassword(req, res, next){
    console.log("The request body is", req.body);
    var userInput = req.body["password"];

    if(password == userInput) {
        userIsAuthorised = true;
    }
    next();
};

//add to middleware
app.use(ValidatePassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) => {
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  