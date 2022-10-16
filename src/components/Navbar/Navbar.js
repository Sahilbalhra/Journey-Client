import { Avatar, Toolbar, Button, Typography, Box } from '@mui/material'
// import { Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"
import { NavBar, Heading, Container } from './styles'

const Navbar = () => {
    const user = null
    return (
        <NavBar position="static" color="inherit">
            <Container>
                <Box component="span">
                    <Heading component={Link} to="/" variant="h6" >
                        Memories
                    </Heading>
                </Box>
                <Box component="span">
                    {user ? (
                        <Toolbar >
                            <Avatar alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                            <Typography variant="h6">{user.result.name}</Typography>
                            <Button variant="contained">LogOut</Button>
                        </Toolbar>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained">Sign In</Button>
                    )}

                </Box>
            </Container>

        </NavBar>
    )
}

export default Navbar
