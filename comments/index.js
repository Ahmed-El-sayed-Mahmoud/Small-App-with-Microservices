const express=require('express');
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
    const postId=req.params.id;
    const {commentContent}=req.body;
    const postCommnets=comments[postId]||[];
    postCommnets.push({id:postCommnets.length,commentContent});
    comments[postId]=postCommnets;
    res.status(201).send(postCommnets)
})

app.listen(4001,()=>{
console.log("Server listening to Port 4001")
})