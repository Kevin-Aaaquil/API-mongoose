// clear console
console.clear();

// Express Intialized
const express = require('express');

// Express App intialized
const app = express();

// connecting to server
const connect = require('./db');

// Requiring apiroute.js for, you know routes nand shit
const routes = require('./api/routes/apiroute');

// Chalk intialized for decoration and shit
const chalk = require('chalk');

// Dotenv intialized for .env files
const dotenv = require('dotenv');
dotenv.config();

// Setting up middleware       // one can use body-parser library
app.use(express.json());        // for datbase and shit
app.use(express.urlencoded({    // for websites and shit
    extended: true
}));

// app using routes
app.use(routes);
//or use
//app.use(require('./api/routes/apiroute'));                // Much shorter and less Space

// Listening to port
try {
    let port = process.env.PORT || 3000;
    app.listen(port || 3000, function () {
        //console.log(chalk.blue.bold(`******************LISTENING ON PORT ${port}`));
        console.log(chalk.magentaBright.bold(`Soldat an der Tür ${port}`));    // Translation eng-ger => Soldier on door 
    });
}
catch (err) {
    console.log(error.message);
}



