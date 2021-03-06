const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const {MONGO_URL, PORT} = require('./configs/config');
const apiRouter = require('./routes/api.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', apiRouter);

app.use('*', (err, req, res, next) => {
    res.json(err.message).status(err.status);
});

_ConnectToDB();

app.listen(PORT, () => {
    console.log(`${PORT} is work`);
});

function _ConnectToDB() {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

    const {connection} = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}