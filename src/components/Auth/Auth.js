import React, { useState } from 'react'
import { Avatar, Button, Grid, Typography, Container, Box } from '@mui/material'
import { GoogleLogin } from 'react-google-login';
import { LockOutlined } from '@mui/icons-material'
import { useDispatch } from "react-redux"
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom"
import Input from './Input'
import { PaperContainer } from './styles'
import { GAUTH } from '../../constants/authtypes';

const Auth = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = () => { }

    const handleChange = () => { }

    const handleShowPassword = () => setShowPassword(!showPassword)

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: GAUTH, data: {result,token} })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (err) => {
        console.log(err)
        console.log('Google Sign In was unsuccessful, Try again later')
    }
    return (
        <Container component="main" maxWidth="xs">
            <PaperContainer elevation={3}>
                <Avatar sx={{ backgroundColor: "red", marginTop: "4px" }}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <Box component="form" onSubmit={handleSubmit} mt={1}>
                    <Grid container spacing={2} mb={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" type="text" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" type="text" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email" type="email" handleChange={handleChange} />
                        <Input name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Confirm Password" type="password" handleChange={handleChange} />}
                    </Grid>
                    <Button type='submit' fullWidth variant='contained'>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin
                        clientId="434596397922-ko2re27n43bgletkccj5j1q8bi1l1h1e.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button variant="contained" onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon />} fullWidth sx={{ marginTop: "10px" }}>
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"

                    />
                    <Grid container justifyContent="center" mt={1}>
                        <Grid item>
                            <Button onClick={() => {
                                setIsSignup(!isSignup)
                                setShowPassword(false)
                            }}>
                                {isSignup ? "Already have an account ? Sign In" : "Don't have an account ? signup"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </PaperContainer>
        </Container>
    )
}

export default Auth
