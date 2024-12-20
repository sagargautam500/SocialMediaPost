/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { PostList } from '../store/post-list-store';

function Post({ post }) {
  const { deletePost } = useContext(PostList)
  return (

    <div className="card post-card" style={{ width: "30rem" }}>
      <img src="https://images.unsplash.com/photo-1721832281439-96e1d0042b4c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." height={"180px"} />
      <div className="card-body">
        <h5 className="card-title">{post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)} >
            <MdDeleteForever />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map(tag =>
          <span key={tag} style={{ margin: "0px 5px" }} className='badge text-bg-primary'>{tag}</span>
        )}
        <div style={{ margin: "10px 0 0 0" }} className="alert alert-info" role="alert">
         This post Likes by {post.reactions.likes} people and  Dislikes by {post.reactions.dislikes} people.
        </div>
      </div>
    </div>

  )
}

export default Post