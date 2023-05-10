const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;
db
    .then(() =>{ console.log("Connected to DB")})
    .catch((err) => {console.log("Error in connecting to DB", err)});

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
     pass: {
        type: String,
        required: true
    }
});
const User = mongoose.model('User', userSchema);
const express = require('express');
const app = express();
const port = 5000;