import React from 'react'
import Typography from '@mui/material/Typography'

function FormTitle({text}) {
  return (
    <Typography variant='h4' sx={{color:'black'}}>{text}</Typography>
  )
}

export default FormTitle