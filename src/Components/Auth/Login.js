import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useRef, useState, useReducer,useEffect } from 'react'
import {Navigate,} from 'react-router-dom'
import { login } from '../../Services/auth.service'
import { useGlobalState } from "../../utils/stateContext"
import FormTitle from '../UniversalComponents/FormTitle'
import InputFieldText from '../UniversalComponents/InputFieldText'
import FormButton from '../UniversalComponents/FormButton'






function Login() {
  const initialState={
      email:'',
      password:'',
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
    const response = login(formData)
    response.then((response)=>{
    const jwt = response?.data?.jwt
    const username =response?.data.username
    const admin = response?.data.admin
    console.log(admin)
  
    sessionStorage.setItem("token",jwt)
    sessionStorage.setItem("user",username)
    sessionStorage.setItem("admin",admin)
    
    dispatch({
      type: "setLoggedInUser",
      data: response.username
  })
  dispatch({
      type: "setToken",
      data: response.jwt
  })
  dispatch({
    type: "setAdmin",
    data: response.admin
})

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
  
const handleFormData = (e) => {
  setFormData({
      ...formData,
      [e.target.id]: e.target.value
  })
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
              

          <FormTitle text={"Sign In"}/>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <InputFieldText 
            type="email"
            name="email"
            label={"email"}
            id="email"
            value={formData.email}
            onChange={handleFormData}
            />

            <InputFieldText
    
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleFormData}
            />

            <FormButton text={"sign in"}/>
            
           
          </Box>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    
        </Box>
    
    )}
            </>

  )
}

export default Login