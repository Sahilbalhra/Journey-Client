import { TextField, Typography, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/postsAction'
import { MainContainer, FormContainer, FileInput } from './styles'

export default function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const dispatch = useDispatch()

  const post = useSelector(state => currentId ? state.postsReducer.find(p => p._id === currentId) : null)

  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])
  const handleSybmit = (e) => {
    e.preventDefault()
    if (currentId) {
      console.log('updatedPostData:',postData)
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    Clear()
  }
  
  const Clear = () => {
    setCurrentId(null)
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }

  return (
    <MainContainer elevation={3} sx={{
      '& .MuiTextField-root': { m: 1 },
    }}>
      <FormContainer autoComplete='off' noValidate onSubmit={handleSybmit}>
        <Typography variant="h6" color="initial">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField name="creator" variant='outlined' label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant='outlined' label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant='outlined' label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant='outlined' label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <FileInput>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </FileInput>
        <Button variant="contained" type='submit' fullWidth sx={{ mb: 1 }}>Submit</Button>
        <Button variant="contained" color="error" fullWidth onClick={Clear}>Clear</Button>
      </FormContainer>
    </MainContainer>
  )
}
