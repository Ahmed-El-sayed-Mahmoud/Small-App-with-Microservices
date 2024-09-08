
function CommentList({comments}) {
  
  return (
    <ul className='mt-3 text-center'>
        {comments.map((val,i)=>(<li key={i}>
            <p >{val.content}</p>
        </li>))}
    </ul>
  )
}

export default CommentList