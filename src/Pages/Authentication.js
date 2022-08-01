import { Button } from '@mui/material'
import { borderColor, Box, Container } from '@mui/system'
import {useState} from 'react'
import Login from '../Components/Auth/Login'
import Register from '../Components/Auth/Register'

function Authentication() {
const[account,setAccount]=useState(true)
  return (
    <Container maxWidth='md'>

    {account?
        <>
      <Box sx=
      {{backgroundColor:'white',
      display:'flex' ,
      flexDirection:'column',
      padding:2,
      justifyContent:'center',
      borderRadius:'10px',
      borderWidth:'2px',
      borderStyle:'solid',
      borderColor:'grey'

      
      }}>
        <Login/>
        <Button onClick={()=>{setAccount(false)}}>Need an Account? Click here</Button>
        </Box>
        
        
        </>
        :
        <>
 <Box sx=
      {{backgroundColor:'white',
      display:'flex' ,
      flexDirection:'column',
      padding:2,
      justifyContent:'center',
      borderRadius:'10px',
      borderWidth:'2px',
      borderStyle:'solid',
      borderColor:'grey'

      
      }}>
        <Register/>
        <Button onClick={()=>{setAccount(true)}}>Need an Account? Click here</Button>
        </Box>
        
        </>
        }
             
    </Container>
 



    

    )
}

export default Authentication