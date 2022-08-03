import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function NewStore() {
  return (
    
        <Box maxWidth={'md'} component='form'sx={{maxWidth:'800px',display:'flex',flexDirection:'column',backgroundColor:'white',justifyContent:'center'}}>
        <TextField 
          label="Store Name:"
        />
        <TextField 
          label="Location:"
        />

        <Button>Create Store</Button>

        </Box>

    )
}

export default NewStore