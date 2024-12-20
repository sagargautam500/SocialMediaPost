/* eslint-disable react/prop-types */
import { useCallback, useEffect, useReducer, useState } from "react";
import { createContext } from "react";


const PostList = createContext(
   {
      postList: [],
      addPost: () => { },
      deletePost: () => { },
      fetching:false
   }
);


const reducer = (currPostList, action) => {
   let newPostList = currPostList
   if (action.type === "delete-post") {
      newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
   } else if (action.type === "add-post") {
      const newPostLists = action.payload
      // {
      //    id: Date.now(),
      //    userId: action.payload.userId,
      //    title: action.payload.title,
      //    body: action.payload.body,
      //    reaction: action.payload.reaction,
      //    tags: action.payload.tags,
      // }

      newPostList = [newPostLists, ...newPostList]
   } else if(action.type==="add-initial-post"){
      newPostList=action.payload.posts;
   }

   return newPostList;
}



const PostListProvider = ({ children }) => {
   const [postList, dispatch] = useReducer(reducer, [])

   const addInitialPost = (posts) => {
      dispatch(
         {
            type: "add-initial-post",
            payload: {
               posts,
            }
         }
      )
   }

   const addPost = (post) => {
      dispatch(
         {
            type: "add-post",
            payload: post,
            // {
            //    userId,
            //    title,
            //    body,
            //    reaction,
            //    tags,
            // },
         }
      )
   }
   const deletePost = useCallback((postId) => {   //useCallback  hook ::::
      dispatch(
         {
            type: "delete-post",
            payload: {
               postId,
            }
         },
      )
   },[dispatch])


   const [fetching, setFetching] = useState(false)

   useEffect(() => {
      setFetching(true)
      const controller=new AbortController();
      const signal=controller.signal;
      fetch('https://dummyjson.com/posts',signal)
        .then(res => res.json())
        .then(data => {
          addInitialPost(data.posts)
          setFetching(false)
        })
      
  
        return ()=>{
          // console.log('cleaun up data')
          controller.abort();
        }
        
    }, [])
  

   return (
      <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
         {children}
      </PostList.Provider>
   )
}



export { PostList };
export default PostListProvider;