import React from 'react'
import {TextField } from '@mui/material'

function InputFieldText({type,name,label,id,value,onChange,disabled}) {
  return (
  <TextField 
    type= {type}
    name={name}
    label={label}
    id={id}
    value={value}
    onChange={onChange}
    fullWidth
    sx={{"& label": {color: "black"},margin:1}}
    required
    disabled={disabled}

    />
  )
}

export default InputFieldText