import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import React, { forwardRef } from 'react'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'


const Input =forwardRef( ({ value,name,handleChange, label, half, autoFocus, type, handleShowPassword,placeholder},ref) => {
    return (
        <Grid item xs={12} sm={half ? 6:12}>
            <TextField
            ref={ref}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name==='password'? {
                    endAdornment:(
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type==='password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }:null}
            />
        </Grid>
    )
})

export default Input
