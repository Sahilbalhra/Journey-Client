import { CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from "./Post/Post"

const Posts = () => {
  const posts = useSelector((state) => state.postsReducer)

  console.log(posts);
  return (
    <>
      {
        !posts.length ? <CircularProgress /> : (
          <Grid container alignItems="stretch" spacing={3}>
            {posts.map(post => <Grid item key={post._id} xs={12} sm={6}>
              <Post post={post} />
            </Grid>)}

          </Grid>
        )
      }
    </>
  )
}

export default Posts