const express = require('express');
const app = express();
const collection = require('./mongo');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));