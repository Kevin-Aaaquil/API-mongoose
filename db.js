const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const chalk = require('chalk');

console.clear();


const connect = (() => {
    try {
        mongoose.connect(
            process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        );
        console.log(chalk.magenta.bold("le château est ouvert"));      // Translation eng-fre  =>   The Castle Is Open
    }
    catch (err) {
        console.log(err.message);
    }
});

// mongoose.Promise = global.promise;  Fix this shit

module.exports = connect();



