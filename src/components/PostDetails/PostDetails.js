
import React, { useEffect } from 'react'
import { Paper, Typography, CircularProgress, Divider, Box } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useParams, useNavigate } from 'react-router-dom'
import { getPost, getPostsBySearch } from '../../actions/postsAction'
import CommentSection from './CommentSection'
const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.postsReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  // dispatch(getPost(id))
  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }))
    }
  }, [post, dispatch])

  useEffect(() => {
    console.log("dispatching action")
    dispatch(getPost(id))
  }, [dispatch, id])
  if (!post) {
    return null
  }

  if (isLoading) {
    return <Paper elevation={6}>
      <CircularProgress size="7rem" />
    </Paper>

  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== posts._id)
  return (
    <Paper sx={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <Box component="div" style={{ display: "flex", width: "100%", maxHeight: "600px" }}>
        <Box component="div" style={{ width: "50%", height: "100%" }}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" component="h2">{post.tags}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider />
          <Typography variant="body1"><strong>Realtime Chat -coming soon</strong></Typography>
          <Divider />
          <CommentSection post={post} />
          <Divider />
        </Box>
        <Box component="div" style={{ width: "50%", height: "100%", marginLeft: "1rem" }}>
          <Box component="img" src={post.selectedFile} alt='image' style={{ width: "100%", height: "100%", borderRadius: "20px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
          </Box>
        </Box>
      </Box>
      {recommendedPosts.length && (
        <Box component="div">
          <Typography variant="h5">You might also like :</Typography>
          <Divider />
          <Box component="div">
            {
              recommendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => (
                <Box style={{ margin: '20px', cursor: "pointer" }} onClick={() => navigate(`/posts/${_id}`)} key={_id}>
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="subtitle2">{name}</Typography>
                  <Typography variant="subtitle2">{message}</Typography>
                  <Typography variant="subtitle1">Likes:{likes}</Typography>
                  <Box component="img" width="200px" src={selectedFile} alt="post image" />
                </Box>
              ))
            }
          </Box>
        </Box>

      )}
    </Paper>
  )
}

export default PostDetails
