import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useGlobalState } from "../../utils/stateContext"
import { useRef, useState, useReducer,useEffect } from 'react'
import {createClient} from '../../Services/client.service'
import Typography from '@mui/material/Typography'
import InputFieldText from '../UniversalComponents/InputFieldText'
import FormButton from '../UniversalComponents/FormButton'


function NewClient() {
    const initialState={
        first_name:'',
        last_name:'',
        phone:'',
        email:'',
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

          <InputFieldText
             type="text"
             name="first_name"
             label='First Name'
             id="first_name"
             value={formData.first_name}
             onChange={handleFormData}
          />
          <InputFieldText
              type="text"
              name="last_name"
              label='last Name'
              id="last_name"
              value={formData.last_name}
              onChange={handleFormData}
          />
          <InputFieldText
           name="phone"
           label="phone number"
           type="phone"
           id="phone"
           value={formData.phone}
           onChange={handleFormData}
          />
          <InputFieldText
            name="email"
            label="email"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleFormData}
          />
          <FormButton text={"Add Client"}  />
        </Box>
  
      </Box>
  

)
}

export default NewClient