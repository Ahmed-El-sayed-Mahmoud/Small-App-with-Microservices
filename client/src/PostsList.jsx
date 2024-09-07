import React, { useState,useEffect } from 'react'
import axios from 'axios'
import CreateComments from './CreateComments';
import CommentList from './CommentList';
function PostsList() {
  const [posts,setPosts]=useState([]);
  const fetchposts=async()=>{
    const res=await axios.get("http://localhost:4000/posts");
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
          posts.map((val,idnex)=>{
            return <div className='w-64 h-64 bg-gray-950' key={idnex}>
              <p className='text-center text-2xl'>{val.title}</p>
              
              <CreateComments postId={val.id}/>
              <CommentList postId={val.id}/>
            </div>
          })
        }
</div>
</>
  )
}

export default PostsList