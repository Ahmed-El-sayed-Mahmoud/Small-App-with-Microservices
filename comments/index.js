const express=require('express');
const axios = require('axios')
const app=express();
const parser=require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(parser.json());
const comments={};
app.get('/posts/:id/comments',(req,res)=>{

    res.send(comments[req.params.id]||[]);
})

app.post('/posts/:id/comments',(req,res)=>{
    try{
        const postId=req.params.id;
        const {commentContent}=req.body;
        const postCommnets=comments[postId]||[];
        postCommnets.push({id:postCommnets.length,commentContent});
        comments[postId]=postCommnets;
        axios.post("http://localhost:4005/events",{type:"CommentCreated",data:{postId,id:postCommnets.length-1,commentContent}})
        res.status(201).send(postCommnets)
    }
    catch(e){
        console.log(e.message)
    }
    
})

app.post('/events',(req,res)=>{
    console.log(req.body.type + " event received");
    res.status(200).send({status:'ok'})
})
app.listen(4001,()=>{
console.log("Server listening to Port 4001")
})