import { useRef, useState, useEffect } from 'react'
import {createClient} from '../../Services/client.service'
import Typography from '@mui/material/Typography'
import InputFieldText from '../UniversalComponents/InputFieldText'
import FormButton from '../UniversalComponents/FormButton'
import FormTitle from '../UniversalComponents/FormTitle'
import {FormControl, MenuItem, Select,Box, CssBaseline, Button} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import CircularProgress from '@mui/material/CircularProgress';
import {getAllBarbers} from '../../Services/barber.service'
import {createBooking} from  '../../Services/booking.service'
import {getAllHair} from '../../Services/hair_style.service'
import BookAppointment from '../Bookings/BookAppointment'
import AllBarbers from '../Barbers/AllBarbers'
import{useGlobalState} from '../../utils/stateContext'
import { flexbox } from '@mui/system'
import { Navigate } from 'react-router-dom'


function NewClient() {
  const store_id=sessionStorage.getItem("store")
  const {store,dispatch} = useGlobalState()
  const {storeId}=store
  const {avId}=store
    const initialState={
        first_name:'',
        last_name:'',
        phone:'',
        email:'',
        store_id:1,
      }
    const BookingState={
          store_id:'',
          client_id:'',
          barber_id:'',
          hair_style_id:'',
          availability_id:''
          
      }

      const [formData, setFormData] = useState(initialState)
      const [errMsg, setErrMsg] = useState('')
      const [success, setSuccess] = useState(false)
      const [clientinfo, setClientinfo] = useState(null)
      const [bookingData, setBookingData] = useState(BookingState)
      const [barbers, setBarbers] = useState([]);
      const [available, setAvailable] = useState([]);
       const errRef = useRef()
       

      useEffect(() => {
          
        getAllBarbers(storeId).then((getAllBarbers)=>setBarbers(getAllBarbers))
      }, [])

        const handleFormDataBooking = (e) => {
          setBookingData({
              ...bookingData,
              store_id: sessionStorage.getItem("store"),
              client_id:parseInt(sessionStorage.getItem("clientId")) ,
              barber_id:available.bId.id,
              availability_id:available.avID.id,
              hair_style_id:1

          })
        }
        
    // const handleChange = (event) => {
    //   setAvailable(event.target.value);
    //   handleFormDataBooking()
    //   console.log(bookingData)
      
      
    // }

      const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })


      }
  

      useEffect(() => {
        setErrMsg('')
    }, [formData.email, formData.last_name,formData.first_name,formData.phone])
      
    const handleSubmit = (e)=>{

        createClient(formData).then((response)=>{
          setClientinfo(response)
         
       sessionStorage.setItem("clientId",clientinfo.id)
          handleFormDataBooking()
          console.log(bookingData)
          createBooking(bookingData)
          setSuccess(true)
        }).catch ((err)=>{ if (!err?.response) {
          setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
          setErrMsg('Error Check Details Entered')
      } else if (err.response?.status === 401) {
          setErrMsg('Unauthorized')
      } else {
          setErrMsg('Unable to Submit--Make Sure Fields are All Filled')
      }
      errRef.current.focus()}) 

      console.log(available)

      

}


  
   const handleChange = (event) => {
    setAvailable(event.target.value);
    console.log(available)
    dispatch({
      type: "setAvId",
      data: available.id
    })  
  
  }
return (
<>
{success?(
        <Navigate replace to="/dashboard" /> 

):(
<Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
              <CssBaseline/>
                  <FormTitle text={'Add Your Contact Information'}/>
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

                  <Box sx={{display:'flex' , gap:2,flexWrap:'wrap' , mt:2 ,justifyContent:'center'}}>
                    {barbers.map((barb)=>
                    <>
                    <Typography sx={{color:'black'}}>Barber: {barb.first_name} {barb.last_name}</Typography>
                    <FormControl fullWidth>

                     <Select
                     labelId="barber--label"
                     id="barber-select"
                     value={available}
                     label="Barber"
                     onChange={handleChange}
                     >
                   {barb.availabilitys.map((avail)=>
                     <MenuItem sx={{color:'black'}} value={{avid:avail.id,bid:barb.id}}>{avail.id}---{avail.start}-{avail.start}</MenuItem>
                   )}
                   </Select>
                   </FormControl>

                   </> 
                    )}

                  </Box>


                  
          <FormButton text={"Book Appointment"} />

        <Typography variant='body2' ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</Typography>
  </Box>


)


}

      

</>
 
)
}

export default NewClient
// sessionStorage.setItem("clientFname",clientinfo.first_name)
// sessionStorage.setItem("clientLname",clientinfo.last_name)
// sessionStorage.setItem("clientPhone",clientinfo.phone)
// sessionStorage.setItem("clientEmail",clientinfo.email)