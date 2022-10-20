const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());
const states = require('./Database/states.json') //Module for accessing Data from JSON database

//Route - 1
app.get('/',(req,res)=>{

    res.send("This start page");
    res.end();
})

//Route - 2
app.get('/api',(req,res)=>{

    res.send("Your are Entering in the end point of State data API || please enter /state to access the Data" )
    res.end()
    
})

//Final endpoint
app.get('/api/states',(req,res)=>{
    
        res.send(states);
        res.end();
    
})

//fetching Data by perticular id
//Handeling GET request
app.get('/api/states/:id',(req,res)=>{

    const state = states.find(c=>c.id===String(req.params.id));
    if (!state) {
        
        res.status(404).send(`Data not found on this id`);
    }else{

        res.send(state);
    }
})

//Posting data 
//Handeling Post request
app.post('/api/states',(req,res)=>{

    if (!req.body.name || req.body.name.length < 3) {
        
        res.status(400).send(`Bad request ${400}, Name should be minimum 3 characters`);
        res.end();
    } 
    else {

        const state = {

        id:states.length+1,
        name:req.body.name,
        state:req.body.state
        }
        states.push(state);
        res.send(state);
        
    }  
})

//Update the existing json Data 
//Handeling Update Request
app.put('/api/states/:id',(req,res)=>{
        
    const state = states.find(c=>c.id===String(req.params.id));

    if (!state) {
        
        res.status(404).send(`Data not found on this id`);

    }else{

        state.name = req.body.name; //updating Name
        res.send(state);

    }
})

//Handeling delete Requests
app.delete('/api/states/:id',(req,res)=>{
    const state = states.find(c=>c.id===String(req.params.id));
    
    if (!state) {

        res.status(404).send(`Data not found on this ${id}`)
        
    } else {

        const index = states.indexOf(state);
        states.splice(index,1);

        res.send(state);

    } 
})
app.listen(port,(req,res)=>{

    console.log(`Running on port ${port}`);
})