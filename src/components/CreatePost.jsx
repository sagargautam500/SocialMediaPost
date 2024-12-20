/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";


function CreatePost() {
  const navigate=useNavigate();
  const { addPost } = useContext(PostList)

  const userIdEmt = useRef();
  const titleEmt = useRef();
  const bodyEmt = useRef();
  const likesEmt = useRef();
  const dislikesEmt = useRef();
  const tagsEmt = useRef();

  const handlePost = (event) => {
    event.preventDefault();
    const userId = userIdEmt.current.value;
    const title = titleEmt.current.value;
    const body = bodyEmt.current.value;
    const reactions = {
      likes: likesEmt.current.value,
      dislikes: dislikesEmt.current.value,
    }
    const tags = tagsEmt.current.value.split(" ");

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        title,
        body,
        reactions,
        tags,
      })
    })
      .then(res => res.json())
      .then(data => {
        addPost(data)
       navigate('/')
      }
      );

    // addPost(userId,title,body,reaction,tags)
    userIdEmt.current.value = '';
    titleEmt.current.value = '';
    bodyEmt.current.value = '';
    likesEmt.current.value = '';
    dislikesEmt.current.value = '';
    tagsEmt.current.value = '';
  }

  return (
    <>
      <form className="create-post" onSubmit={handlePost}>
        <div className="mb-3 ">
          <label
            htmlFor="userId"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            User Id :
          </label>
          <input
            ref={userIdEmt}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your user Id..."
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Post Title :
          </label>
          <input
            ref={titleEmt}
            type="text"
            className="form-control"
            id="title"
            placeholder="how are you feelings today.................."
            required
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="body"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Post Content :
          </label>
          <textarea
            ref={bodyEmt}
            type="text"
            className="form-control"
            id="body"
            placeholder="tell us more about it"
            rows={4}
          />
        </div>

        <div className="mb-3 ">
          <label
            htmlFor="likes"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            No of likes :
          </label>
          <input
            ref={likesEmt}
            type="text"
            className="form-control"
            id="likes"
            placeholder="Enter your no of  likes ..."
          />
        </div>

        <div className="mb-3 ">
          <label
            htmlFor="dislikes"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            No of dislikes :
          </label>
          <input
            ref={dislikesEmt}
            type="text"
            className="form-control"
            id="dislikes"
            placeholder="Enter your no of dislikes ..."
          />
        </div>

        <div className="mb-3 ">
          <label
            htmlFor="tags"
            className="form-label"
            style={{ fontSize: "25px", fontWeight: "bold" }}
          >
            Enter your tags :
          </label>
          <input
            ref={tagsEmt}
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter your  content related tags using space..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePost;
