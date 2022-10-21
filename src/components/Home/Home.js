import React, { useState, useEffect } from 'react'
import { GridContainer } from './styles'
import { Grid, Container, Grow, Paper } from '@mui/material'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/postsAction'
import Paginate from '../Pagination/Pagination'

const Home = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <GridContainer
                    container
                    justify="space-between"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper elevation={4} sx={{ padding: "1rem", marginTop: "0.5rem", justifyContent: "space-around" }}>
                            <Paginate />
                        </Paper>
                    </Grid>
                </GridContainer>
            </Container>
        </Grow>
    )
}

export default Home
