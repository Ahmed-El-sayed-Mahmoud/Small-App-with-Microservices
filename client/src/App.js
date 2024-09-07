import React, { useState } from "react";
import axios from "axios";
import PostsList from "./PostsList";

function App() {
  const [postInput, setPostInput] = useState("");

  const handlePostAdd = async () => {
    try {
      console.log("Post input:", postInput);
      await axios.post("http://localhost:4000/posts", { title: postInput });
      setPostInput("");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div className="w-[100vw] flex justify-center">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What are you thinking about?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input-md input-bordered w-full max-w-xs"
            value={postInput}
            onChange={(e) => setPostInput(e.target.value)}
          />
          <button onClick={handlePostAdd} className="btn mt-2">
            Add Post
          </button>
        </label>
      </div>
      <div className="w-[100vw] ">
            <PostsList/>
      </div>
    </>
  );
}

export default App;
