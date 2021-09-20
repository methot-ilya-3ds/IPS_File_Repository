const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');


// Middlewares

app.use(bodyParser.json());

app.use(cors());

//Routes

const postRoutes = require('./Routes/posts');

app.use('/post', postRoutes);

app.get('/', (req, res) => {
    res.send("We are on home");
})

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });

//listen
mongoose.connect(process.env.DB_CONNECTION, 
{
    useUnifiedTopology: true,
    useNewUrlParser: true 
}, 
    () => {
    console.log("connected to DB")
});

//Connect to DB

app.listen(3000);