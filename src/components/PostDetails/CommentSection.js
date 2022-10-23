
import React, { useRef, useState } from 'react'
import { Typography, TextField, Button, Box } from '@mui/material'
import { commentPost } from '../../actions/postsAction'
import { useDispatch } from "react-redux"

const CommentSection = ({ post }) => {
  const [comments, setComments] = useState(post.comments ? post.comments : ["be the first person to Comment"])
  const [comment, setComment] = useState('')
  const commentRef = useRef();
  const user = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch()
  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;
    const newComments = await dispatch(commentPost(post._id, finalComment))
    setComments(newComments)
    setComment('')

    commentRef.current.scrollIntoView({ behavior: 'smooth' })

  }
  // console.log(post)
  return (
    <Box component="div" sx={{ display: "flex", justifyContent: 'space-between', margin: "10px 0" }}>
      <Box component="div" sx={{ height: '200px', overflowY: 'auto', marginRight: '30px' }}>
        <Typography variant='h6'>Comments</Typography>
        {
          comments.length > 0 &&
          comments.map((c, i) => (
            <Typography key={i} variant='subtitle1'><strong>{c.split(':')[0]}</strong>{c.split(':')[1]}</Typography>
          ))
        }
        <div ref={commentRef} />
      </Box>
      {
        user?.result?.name && (
          <Box component="div" style={{ width: "60%" }}>
            <Typography variant='h6'>Write a Comment</Typography>
            <TextField
              fullWidth
              rows={4}
              variant='outlined'
              label='Comment'
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button sx={{ marginTop: '10px' }} fullWidth disabled={!comment} variant='contained' onClick={handleClick}>Comment</Button>
          </Box>
        )
      }

    </Box>
  )
}

export default CommentSection