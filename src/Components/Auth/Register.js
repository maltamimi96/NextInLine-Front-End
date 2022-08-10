import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRef, useState, useReducer,useEffect } from 'react'
import {Navigate,} from 'react-router-dom'
import { sign_up } from '../../Services/auth.service'
import { useGlobalState } from "../../utils/stateContext"




function Register() {
  const initialState={
    username:'',
    email:'',
    password:'',
    confirm_password:''
  
  }
const {dispatch} = useGlobalState()
const [formData, setFormData] = useState(initialState)

  const emailRef = useRef()
  const errRef = useRef()
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)


useEffect(() => {
  setErrMsg('')
}, [formData.email, formData.password])

const handleSubmit = async (e)=>{
  e.preventDefault()
  const response = sign_up(formData)
  response.then((response)=>{
  
  setSuccess(true)
  }).catch ((err)=>{ if (!err?.response) {
      setErrMsg('No Server Response')
  } else if (err.response?.status === 400) {
      setErrMsg('Wrong  emailname or Password')
  } else if (err.response?.status === 401) {
      setErrMsg('Unauthorized')
  } else {
      setErrMsg('sign-up Failed')
  }
  errRef.current.focus()}) 
}

const handleFormData = (e) => {
setFormData({
    ...formData,
    [e.target.id]: e.target.value
})
}
return (
  <>
{success ? (

        <Navigate replace to="/login" /> 
) : (
  



      <Box
      
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

        }}
      >
            

        <Typography variant="h6">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField 
          type="text"
          name="username"
          id="username"
          
          label='username'
          value={formData.username}
          onChange={handleFormData}
          fullWidth
          sx={{}}
          />
        <TextField 
          type="email"
          name="email"
          id="email"
          
          label='E-mail'
          value={formData.email}
          onChange={handleFormData}
          fullWidth
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            autoComplete="current-password"
            onChange={handleFormData}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="Confirm-Password"
            type="password"
            id="confirm-password"
            value={formData.confirmpassword}
            onChange={handleFormData}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
         
        </Box>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
  
      </Box>
  
  )}
          </>
  )
}

export default Register