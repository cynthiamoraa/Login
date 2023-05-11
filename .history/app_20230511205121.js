import express from 'express';
const app = express();
const collection = import ('./mongo.js') from,('./mongo.js')
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', cors(),async(req, res) => {

});

app.post('/register', cors(), async(req, res) => {
    const {email, password} = req.body;

    const data= {
        email:email,
        password:password
    }
    try{
        const check = await collection.findOne({email:email});
        if (check){
            res.status(400).json({message: "User already exists"});
        }
        else{
       
            res.status(200).json({message: "User registered"});
            await collection.insertMany([data]);
        }
    }
    catch(e){
        res.json({message: "Error in registering user"});
    }

});

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});