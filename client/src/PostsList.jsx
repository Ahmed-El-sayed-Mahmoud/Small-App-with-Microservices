import React, { useState,useEffect } from 'react'
import axios from 'axios'
import CreateComments from './CreateComments';
import CommentList from './CommentList';
function PostsList() {
  const [posts,setPosts]=useState([]);
  const fetchposts=async()=>{
    const res=await axios.get("http://localhost:4002/posts");
    console.log(res.data)
    setPosts(res.data)
  }
  useEffect(() => {
    
  fetchposts()
    
  }, [])
  
  return (
    <>
    <h1 className='text-center text-3xl'>Posts</h1>
    <div className='flex gap-2 mt-5'>
      
        {
          Object.keys(posts).map((key)=>{
            return <div className='w-64 h-64 bg-gray-950' key={key}>
              <p className='text-center text-2xl'>{posts[key].title}</p>
              {console.log(posts[key].comments)}
              <CreateComments postId={posts[key].id}/>
              <CommentList comments={posts[key].comments}/>
            </div>
          })
        }
</div>
</>
  )
}

export default PostsList