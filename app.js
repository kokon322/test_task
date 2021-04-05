const express = require('express');
const mongoose = require('mongoose');

const app = express();

MONGO_URL = 'mongodb://localhost/test_task';

app.use(express.json());
app.use(express.urlencoded({extended: true}));

_ConnectToDB();

app.listen('5000', () => {
    console.log('5000 work');
});

function _ConnectToDB() {
    mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

    const {connection} = mongoose;

    connection.on('error', err => {
        console.log(err);
    });
}