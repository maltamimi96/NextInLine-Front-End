import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import{createBarber} from '../../Services/barber.service'

function NewBarber() {

 const initialState={
        first_name:'',
        last_name:'',
        store_id:1,
      }
      const {dispatch} = useGlobalState()
      const [formData, setFormData] = useState(initialState)
      const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
      }
    
      const handleSubmit = (e)=>{
        e.preventDefault()
        createClient(formData)
      }

return (
<Box
        
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
            

        <Typography variant="h4">
          Create New Store
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField 
          type="text"
          name="first_name"
          label='First Name'
          id="first_name"
          value={formData.first_name}
          onChange={handleFormData}
          fullWidth
          />
         <TextField 
          type="text"
          name="last_name"
          label='last Name'
          id="last_name"
          value={formData.last_name}
          onChange={handleFormData}
          fullWidth
          />


          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Barber
          </Button>
         
        </Box>
  
      </Box>
  

)
}


export default NewBarber