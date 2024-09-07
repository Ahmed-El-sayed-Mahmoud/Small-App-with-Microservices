import React, { useState,useEffect } from 'react'
import axios from 'axios'
function CommentList({postId}) {
    const [Commnets,setComments]=useState([]);
    const fetchCommnets=async()=>{
        setComments((await axios.get(`http://localhost:4001/posts/${postId}/comments`)).data);
    }
    useEffect(() => {
        fetchCommnets();
    }, [])
    
  return (
    <ul className='mt-3 text-center'>
        {Commnets.map((val,i)=>(<li key={i}>
            <p >{val.commentContent}</p>
        </li>))}
    </ul>
  )
}

export default CommentList