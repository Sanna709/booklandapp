const express = require('express')
const path=require('path')
const app = express()
// const cors= require('cors')
const bodyParser = require('body-parser')
const cloudinary =require('cloudinary')
var port=process.env.PORT || 2000

app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(cors())

cloudinary.config({ 
    cloud_name: 'dp8x0d1mj', 
    api_key: '259176128371547', 
    api_secret: 'RX9Gv-8DKeAHmCG-BGhJicN_8Qs' 
  });

app.use('/',express.static(path.join(__dirname,'/Public')))
app.use('/Api',require('./Routes/Api').route)

app.listen(port, function () {
    console.log("Server started on http://localhost:2000/")
})