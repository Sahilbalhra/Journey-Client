import React from 'react'
import { MainCard, Media, Div, Overlay, Details, Title, Actions } from './styles'
import Typography from '@mui/material/Typography'
import moment from 'moment/moment'
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import { CardContent, Button } from '@mui/material'
import { Delete, ThumbUpAlt, ThumbUpAltOutlined } from '@mui/icons-material'
import { useDispatch } from "react-redux"
import { deletePost, likePost } from '../../../actions/postsAction';
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))
  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(like => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <>
            <ThumbUpAlt fontSize='small' /> &nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like ${post.likes.length > 1 ? 's' : ''}`}
          </>
        ) : (
          <>
            <ThumbUpAltOutlined fontSize='small' />&nbsp;{post.likes.length}{post.likes.length === 1 ? "Like" : "Likes"}
          </>
        )
    }
  }


  return (
    <MainCard>
      <Media image={post.selectedFile} title={post.title}></Media>
      <Div>
        <Typography variant="h6" color="white">{post.name}</Typography>
        <Typography variant="body2" color="white">{moment(post.createdAt).fromNow()}</Typography>
      </Div>
      <Overlay>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&
          <Button variant="text" size='small' sx={{ color: "white" }} onClick={() => setCurrentId(post._id)}>
            <MoreHoriz fontSize="default" />
          </Button>
        }
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
          // dispatch(getPosts())
          dispatch(likePost(post._id));
        }}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&
          <Button variant="text" size='small' sx={{ color: "gray" }} onClick={() => dispatch(deletePost(post._id))}>
            <Delete fontSize='small' />
            Delete
          </Button>
        }
      </Actions>
    </MainCard>
  )
}

export default Post