const express=require('express');
const app=express();
const parser=require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(parser.json());
const posts=[];
app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/posts',(req,res)=>{
    const {title}=req.body;
    const id=posts.length
    posts.push({id,title});
    res.status(201).send({id});
})

app.listen(4000,()=>{
console.log("Server listening to Port 4000")
})