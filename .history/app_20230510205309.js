const express = require('express');
const app = express();
const collection = require('./mongo');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', cors(),(req, res) => {

});

app.post('/register', cors(), (req, res) => {
    const {email, password} = req.body;

    try{
        const check = await collection.findOne({email:email});
        if (check){
            res.status(400).json({message: "User already exists"});
        }
        else{
            const user = new collection({email, password});
            await user.save();
            res.status(200).json({message: "User registered"});
        }
    }

});