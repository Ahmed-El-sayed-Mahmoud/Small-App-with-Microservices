const express=require('express');
const axios = require('axios')
const app=express();
const parser=require('body-parser')
const cors=require('cors')
app.use(cors())
app.use(parser.json());
const posts={}
app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/events',(req,res)=>{
    const eventType=req.body.type;
    if(eventType==='PostCreated')
    {
        const post=req.body.data;
        posts[post.id]={id:post.id,title:post.title,comments:[]}
    }
    if(eventType==='CommentCreated')
    {
        const comment=req.body.data;
        posts[comment.postId].comments.push({content:comment.commentContent,id:comment.id})
    }

})

app.listen(4002,()=>{
console.log("Server listening to Port 4002")
})