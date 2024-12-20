/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { PostList } from '../store/post-list-store'
import Post from './Post'
import WelcomeMsg from './WelcomeMsg'
import Loader from './Loader'


function PostList1() {
  const { postList, fetching } = useContext(PostList)
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {fetching && <Loader />}
      {
        !fetching && postList.length === 0 && <WelcomeMsg />
      }
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  )
}

export default PostList1