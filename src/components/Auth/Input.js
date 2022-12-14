import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const Input = ({ name, label, type, autoFocus, half, handleChange,handleShowPassword }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField name={name} label={label} type={type} onChange={handleChange} variant="outlined" autoFocus={autoFocus} InputProps={name === 'password' && {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === "password" ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }} required fullWidth />

        </Grid>
    )
}

export default Input
