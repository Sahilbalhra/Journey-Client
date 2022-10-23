import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from "./Post/Post"

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.postsReducer)
  // console.log("Posts are:", posts);
  if (!posts.length && !isLoading) {
    return 'No Posts';
  }
  return (
    <>
      {
        isLoading ? <CircularProgress /> : (
          <Grid container display="flex" alignItems="stretch" spacing={3}>
            {posts.map(post => <Grid item key={post._id} xs={12} sm={12} md={6} lg={4}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>)}
          </Grid>
        )
      }
    </>
  )
}

export default Posts