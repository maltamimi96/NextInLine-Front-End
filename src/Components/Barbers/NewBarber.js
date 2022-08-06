import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import{createBarber} from '../../Services/barber.service'

function NewBarber() {

        const [store_id,setStore_id]=useState(1)
        const [first_name,setFirst_Name]=useState(null)
        const [last_name,setLast_Name]=useState(null)

    const handleSubmit= (e)=> {
        e.preventDefault()
        createBarber(first_name,last_name,store_id)
    }

  return (
    <Box component={"form"} noValidate onSubmit={handleSubmit}>
        <TextField id="outlined-basic" onChange={(e)=>setFirst_Name(e.target.value)} label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" onChange={(e)=>setLast_Name(e.target.value)} label="Outlined" variant="outlined" />

        <Button type='submit'>Add New Barber</Button>

    </Box>
  )
}

export default NewBarber