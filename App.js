const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const url = `mongodb+srv://Ashutosh:1GR8bbD3g8EB2GgX@cluster0.ms7wsze.mongodb.net/Student_Data?retryWrites=true&w=majority`
const postsRoute = require('./posts');
const bodyParser = require('body-parser');



app.use(bodyParser.json())
app.use('/post',postsRoute);

mongoose.connect(url,{

    useNewUrlParser:true,
    useUnifiedTopology:true

},()=>{
   
    console.log(`connected to Database !!!`);

})
app.get('/',(req,res)=>{

    res.send(`server stated on port ${port}`);
    res.end();

}).listen(port,()=>{

    console.log(`Database is running on server ${port}`);
})