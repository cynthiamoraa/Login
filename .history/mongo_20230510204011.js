const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
db.on('error', console.error.bind(console, 'connection error:'));
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);
const express = require('express');
const app = express();
const port = 5000;