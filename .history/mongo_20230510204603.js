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
     password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model('collection', newSchema);

