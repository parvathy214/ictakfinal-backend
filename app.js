const express = require('express');
const cors = require('cors');
const multer = require('multer');
const csvParser = require('csv-parser');
const bodyparser = require('body-parser');
const app =express();



app.use(cors());
app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


const mongoose = require('./db')
const api = require('./routes/api')
app.use('/api',api)

const learner = require('./routes/learner')
app.use('/api',learner)

//hosting

const path = require('path');
app.use(express.static('./dist/frontend/'))
app.get('/*', function(req, res) { res.sendFile(path.join(__dirname + '/dist/frontend/index.html')); });


app.listen(2341,()=>{
    console.log("server running at 2341")
})