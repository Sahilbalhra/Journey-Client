import React, { useState } from 'react'
import { GridContainer } from './styles'
import { Grid, Container, Grow, Paper, AppBar, TextField, Button } from '@mui/material'
import { MuiChipsInput } from 'mui-chips-input'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux'
import { getPostsBySearch } from '../../actions/postsAction'
import Paginate from '../Pagination/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const query = useQuery()
    const page = query.get('page') || 1

    const searchQuery = query.get('searchQuery')



    const searchPosts = () => {
        if (search.trim() || tags) {
            //dispatch search post
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`)

        } else {
            navigate("/")
        }

    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            //enter key press
            searchPosts();
        }

    }
    const handleAdd = (tag) => setTags([...tags, tag]);
    const handleDelete = (tag) => setTags(tags.filter(t => t !== tag))


    return (
        <Grow in>
            <Container maxWidth="xl">
                <GridContainer
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar position='static' color='inherit' sx={{ borderRadius: 1, marginBottom: "1rem", display: "flex", padding: "16px" }}>
                            <TextField name='search' variant='outlined' label='Search Memories' fullWidth onKeyPress={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)} />
                            <MuiChipsInput style={{ margin: '10px 0' }} value={tags} onAddChip={handleAdd} onDeleteChip={handleDelete} label="Select Tags" variant="outlined" />
                            <Button variant='contained' onClick={searchPosts}>Search</Button>

                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {(!searchQuery && !tags.length) && (
                            <Paper elevation={6} sx={{ padding: "0.5rem", marginTop: "0.5rem" }}>
                                <Paginate page={page} />
                            </Paper>
                        )}
                    </Grid>
                </GridContainer>
            </Container>
        </Grow>
    )
}

export default Home
