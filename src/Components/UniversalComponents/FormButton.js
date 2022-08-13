import { Button } from '@mui/material'
import React from 'react'

function FormButton({text,disable}) {
  return (
    
    <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ m:1 }}
        disabled={disable}
    >
        {text}
  </Button>


  )
}

export default FormButton