const express=require('express');
const axios = require('axios')
const app=express();
const parser=require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(parser.json());
const posts=[];
app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/posts', (req,res)=>{
    try{
        const {title}=req.body;
        const id=posts.length
        console.log({id,title})
        posts.push({id,title});
        axios.post("http://localhost:4005/events",{type:"PostCreated",data:{id,title}})
        res.status(201).send({id})
    }
    catch(e)
    {
        console.log(e.message)
    }
    
})

app.post('/events',(req,res)=>{
    console.log(req.body.type + " event received")
    res.status(200).send({status:'ok'})
})

app.listen(4000,()=>{
console.log("Server listening to Port 4000")
})