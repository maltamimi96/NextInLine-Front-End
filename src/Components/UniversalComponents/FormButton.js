import { Button } from '@mui/material'
import React from 'react'

function FormButton({text}) {
  return (
    
    <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ m:1 }}
    >
        {text}
  </Button>


  )
}

export default FormButton