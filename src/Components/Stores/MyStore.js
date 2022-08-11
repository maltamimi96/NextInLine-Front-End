import React from 'react'
import {getMyStore} from '../../Services/store.service'
import { useRef, useState, useReducer,useEffect } from 'react'
import { useGlobalState } from "../../utils/stateContext"
import { Box } from '@mui/system'
import { Button, TextField, Typography } from '@mui/material'
import InputFieldText from '../UniversalComponents/InputFieldText'
import FormButton from '../UniversalComponents/FormButton'
import FormTitle from '../UniversalComponents/FormTitle'
function MyStore() {

      const initialState={
            name:'',
            location:'',
            user_id:1,
          }
const [store, setStore] = useState(initialState)
const [allowEdit, setAllowEdit] = useState(false)


    useEffect(() => {
      getMyStore(1).then((str)=>setStore(str))
  
  }, [])

  

    const handleClick=()=>{
      setAllowEdit(true)
    }
  return (
    <>
      <Box
        
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      }}
    >
      <Box
      sx={{
            marginTop: 4,
            display: 'flex',
            alignItems: 'center',
            flexWrap:'wrap',
            backgroundColor:'lightblue'
            
          }}>

        {store.name? 
        <>
      <Typography variant='h5' sx={{padding:1 ,color:'black'}}>ID: {store.user_id}</Typography>
      <Typography variant='h5' sx={{padding:1,color:'black'}}>Store Name: {store.name}</Typography>
      <Typography variant='h5' sx={{padding:1,color:'black'}}>Store Location: {store.location}</Typography> 
      
      <Box sx={{padding:1}}>
            <Button variant='contained' color='warning' sx={{marginX:1}}>Delete Store</Button>
            <Button variant='contained'>Update Store</Button>
      </Box>
      </>
      :
      
      <FormTitle text={'No Store Found'}/>
      
    
        }
            
      

      </Box>
     
      
  
   
    </Box>
    </>
  )
}

export default MyStore