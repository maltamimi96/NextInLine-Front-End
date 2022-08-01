import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRef, useState, useReducer,useEffect } from 'react'
import {Navigate,} from 'react-router-dom'
import { login } from '../../Services/auth.service'


const initialState={
    email:'',
    password:''
  }
  function reducer(state,action){
    switch (action.type){
      case 'setEmail':
        return {...state,email:action.payload}
      case 'setPassword':
          return {...state,password:action.payload}  
      default:
        throw new Error()    
    }
  }



function Login() {
    const [state,dispatch]= useReducer(reducer,initialState)
    const emailRef = useRef()
    const errRef = useRef()
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
  
    useEffect(() => {
      emailRef.current.focus()
  }, [])
  
  useEffect(() => {
      setErrMsg('')
  }, [state.email, state.password])
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const response = login(state.email,state.password)
    response.then((response)=>{
    const jwt = response?.data?.jwt
    const username =response?.data.username
    const admin =response?.data.admin

    sessionStorage.setItem("token",jwt)
    sessionStorage.setItem("user",username)
    sessionStorage.setItem("admin",admin)

    setSuccess(true)
    }).catch ((err)=>{ if (!err?.response) {
        setErrMsg('No Server Response')
    } else if (err.response?.status === 400) {
        setErrMsg('Wrong  emailname or Password')
    } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
    } else {
        setErrMsg('Login Failed')
    }
    errRef.current.focus()}) 
}
  
  return (
    <>
  {success ? (

          <Navigate replace to="/" /> 
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
              margin="normal"
              required
              fullWidth
              id="emailname"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              inputRef={emailRef}
              onChange={(e) => dispatch({type:"setEmail",payload:e.target.value})}
              value={state.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={state.password}
              autoComplete="current-password"
              onChange={(e) => dispatch({type:"setPassword",payload:e.target.value})}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           
          </Box>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        </Box>
    
    )}
            </>

  )
}

export default Login