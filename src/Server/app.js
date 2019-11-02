const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();


mongoose.connect(
    "mongodb+srv://zainab_30:30sep2004@precious-pieces-clmkw.mongodb.net/test?retryWrites=true&w=majority",
    (err) => {
        if (err) {
            console.log("Database error-----------", err);
        } else {
            console.log("Database is connected");
        }
    }
)
mongoose.Promise = global.Promise;


app.use(bodyParser.json())
app.use(cors());

//initialize routes
app.use('/api', require('./Routes/api'));

//error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({ error: err.message })
})


app.listen(process.env.port || 4000, () => {
    console.log('Server is running in port 4000')
})