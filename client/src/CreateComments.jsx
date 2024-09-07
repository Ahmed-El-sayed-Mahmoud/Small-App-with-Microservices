import React, { useState } from "react";
import axios from 'axios'
function CreateComments({ postId }) {
    const [commentContent,setComment]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{commentContent})
        setComment("")
    }
  return (
    <div className="flex justify-center ">
      <form onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Type here"
            className="input-md input-bordered w-full max-w-xs"
            value={commentContent}
            onChange={(e) => setComment(e.target.value)}
          />
          <button  className="btn mt-2">
            Add Comment
          </button>
        </label>
      </form>
    </div>
  );
}

export default CreateComments;
