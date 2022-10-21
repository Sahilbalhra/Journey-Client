// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { Button, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, MenuItem } from '@mui/material';
import { LOGOUT } from '../../constants/authtypes'
import { Heading, NavBar } from './styles'

function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [anchorElUser, setAnchorElUser] = useState(null);
    // console.log("user", user);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const logOut = () => {
        dispatch({ type: LOGOUT })
        navigate("/auth")
        setUser(null)
    }


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <NavBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Heading
                        component="a"
                        variant="h5"
                        noWrap
                        href="/"
                    >
                        Memories
                    </Heading>
                    {user ? (<Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu}>
                            <Avatar src={user.result.imageUrl} alt={user.result.name}>{user.result.name.charAt(0)}</Avatar>
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClose={handleCloseUserMenu}>
                                <Typography textAlign="center">{user.result.name}</Typography>
                            </MenuItem>
                            <MenuItem onClick={logOut}>
                                <Typography textAlign="center">LogOut</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>) : (
                        <Button component={Link} to="/auth" variant="contained">Sign In</Button>
                    )}
                </Toolbar>
            </Container>
        </NavBar>
    );
}
export default Navbar;
