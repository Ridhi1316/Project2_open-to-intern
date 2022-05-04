const express = require('express')
const app = express()
const bodyParser = require('body-parser');
 const route = require('./routes/route.js');
 const mongoose = require('mongoose');
 const moment = require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://Project2:GroupNo_38@project2.ouhjz.mongodb.net/Project-2-Group-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(
    function (req,res,next){
        console.log(moment().format('YYYY-MM-DD HH:mm:ss'),',',req.ip,',',req.method,',',req.path);
        next();
    }
);

 app.use("/", route)

app.listen(process.env.PORT || 3000, (err)=> {
    console.log("Connected to PORT 3000")
})

