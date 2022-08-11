import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import{createBarber} from '../../Services/barber.service'
import { useGlobalState } from "../../utils/stateContext"
import Typography from '@mui/material/Typography'
import InputFieldText from '../UniversalComponents/InputFieldText'
import FormButton from '../UniversalComponents/FormButton'



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
        createBarber(formData)
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,padding:2 }}>
        {/* <TextField 
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
          /> */}


          <InputFieldText
            type="text"
            name='first name'
            label='first name'
            id='first_name'
            value={formData.first_name}
            onChange={handleFormData}
          />
          
          <InputFieldText
            type="text"
            name='first name'
            label='Last name'
            id='last_name'
            value={formData.last_name}
            onChange={handleFormData}
          />
          <FormButton text={'Add Barber'}/>
         
        </Box>
  
      </Box>
  

)
}


export default NewBarber