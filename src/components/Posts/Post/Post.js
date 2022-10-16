import React from 'react'
import { MainCard, Media, Div, Overlay, Details, Title, Actions } from './styles'
import Typography from '@mui/material/Typography'
import moment from 'moment/moment'
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { CardContent, Button } from '@mui/material'
import { Delete, ThumbUpAlt } from '@mui/icons-material'
import { useDispatch } from "react-redux"
import { deletePost, likePost, getPosts } from '../../../actions/postsAction';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()

  return (
    <MainCard>
      <Media image={post.selectedFile} title={post.title}></Media>
      <Div>
        <Typography variant="h6" color="white">{post.creator}</Typography>
        <Typography variant="body2" color="white">{moment(post.createdAt).fromNow()}</Typography>
      </Div>
      <Overlay>
        <Button variant="text" size='small' sx={{ color: "white" }} onClick={() => setCurrentId(post._id)}>
          <MoreHoriz fontSize="default" />
        </Button>
      </Overlay>
      <Details>
        <Typography variant="body2" color="gray">{post.tags.map(tag => `# ${tag}`)}</Typography>
      </Details>
      <Title variant="h6" color="initial" m={0} p={0}>{post.title}</Title>
      <CardContent>
        <Typography variant="body2" color="initial">{post.message}</Typography>
      </CardContent>
      <Actions>
        <Button variant="text" size='small' sx={{ color: "gray" }} onClick={() => {
          dispatch(getPosts())
          dispatch(likePost(post._id));
        }}>
          <ThumbUpAlt fontSize='small' />
          Like&nbsp;
          {post.likeCount > 0 && post.likeCount}
        </Button>
        <Button variant="text" size='small' sx={{ color: "gray" }} onClick={() => dispatch(deletePost(post._id))}>
          <Delete fontSize='small' />
          Delete
        </Button>
      </Actions>
    </MainCard>
  )
}

export default Post