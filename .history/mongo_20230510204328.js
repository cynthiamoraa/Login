const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;
db
    .then(() =>{ console.log("Connected to DB")})
    .catch((err) => {console.log("Error in connecting to DB", err)});

const Schema = new mongoose.Schema({
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);
const express = require('express');
const app = express();
const port = 5000;