import { Avatar, Toolbar, Button, Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate,useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { NavBar, Heading, Container } from './styles'
import { LOGOUT } from '../../constants/authtypes'

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    // console.log("user", user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const token = user?.token;
        console.log("User Token Id:", token)
        //JWT
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [user?.token,location])

    const logOut = () => {
        dispatch({ type: LOGOUT })
        navigate("/auth")
        setUser(null)
    }

    return (
        <NavBar position="static" color="inherit">
            <Container>
                <Box component="div">
                    <Heading component={Link} to="/" variant="h3" >
                        Memories
                    </Heading>
                </Box>
                <Box component="span">
                    {user ? (
                        <Toolbar>
                            <Avatar alt={user.result.name} src={user.result.imageUrl} sx={{ marginRight: "2px" }}>{user.result.name.charAt(0)}</Avatar>
                            <Typography variant="h6" sx={{ marginRight: "2px" }}>{user.result.name}</Typography>
                            <Button variant="contained" onClick={logOut}>LogOut</Button>
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
