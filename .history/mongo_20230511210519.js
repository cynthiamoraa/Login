import 
mongoose.connect(
  "mongodb+srv://cmoraa734:login@cluster0.yd9noon.mongodb.net/"
)
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

export default collection;