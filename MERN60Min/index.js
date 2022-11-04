const express = require('express');
const mongoose = require('mongoose');
const userModel = require('./models/Users');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const fun = async () => {
    try {

        const res = await mongoose.connect('mongodb+srv://krish:krushna123@cluster0.hnaw9wr.mongodb.net/merntut?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,

                useUnifiedTopology: true
            }
        )
        console.log("succesfull");
    }
    catch (err) {
        console.log("error has been occured", err);
    }
}
console.log("hello");

app.get('/getusers', (req, res) => {
    userModel.find({}, async (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
           await res.json(result);
        }
    })
})

app.post('/createUser' ,async (req,res)=>{
    const user = req.body;
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user);
})
const getDocument = async () => {
    const result = await userModel.find({});
    console.log(result)

}

getDocument();

// const getDocument = async () => {
//     const result = await userModel.find({ });
//     console.log(result)

// }

// getDocument();

app.listen(3000, () => {0
    console.log("app is listening on port 3000");
})
fun();
