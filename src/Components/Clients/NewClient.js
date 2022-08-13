import { useRef, useState, useEffect } from 'react'
import {createClient} from '../../Services/client.service'
import Typography from '@mui/material/Typography'
import InputFieldText from '../UniversalComponents/InputFieldText'
import FormButton from '../UniversalComponents/FormButton'
import FormTitle from '../UniversalComponents/FormTitle'
import {FormControl, MenuItem, Select,Box, CssBaseline, Button} from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import CircularProgress from '@mui/material/CircularProgress';
import {getAll} from '../../Services/barber.service'
import {createBooking} from  '../../Services/booking.service'
import {getAllHair} from '../../Services/hair_style.service'
import BookAppointment from '../Bookings/BookAppointment'


function NewClient() {
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
      const [toggle, setToggle] = useState({});
       const errRef = useRef()

      useEffect(() => {
          
          getAll().then((getAll)=>setBarbers(getAll))
        }, [])
  


        const handleFormDataBooking = (e) => {
          setBookingData({
              ...bookingData,
              store_id: available.bid.store_id,
              client_id:parseInt(sessionStorage.getItem("clientId")) ,
              barber_id:available.bid.id,
              availability_id:available.aid.id,
              hair_style_id:1

          })
        }
  
    const handleChange = (event) => {
      setAvailable(event.target.value);
      handleFormDataBooking()
      setToggle(true)
      console.log(bookingData)
      
      
    }

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
        e.preventDefault()
        createClient(formData).then((response)=>{
          setClientinfo(response)
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

      }


      const handleBooking=(e)=>{
        createBooking({BookingState})
      }

   success&&sessionStorage.setItem("clientId",clientinfo.id)
   success&&sessionStorage.setItem("clientFname",clientinfo.first_name)
   success&&sessionStorage.setItem("clientLname",clientinfo.last_name)
   success&&sessionStorage.setItem("clientPhone",clientinfo.phone)
   success&&sessionStorage.setItem("clientEmail",clientinfo.email)
   


  


return (
  <>
  
  <CssBaseline/>
        {success?
        <>
         <Box sx={{display:'flex' ,flexDirection:"column", gap:2,flexWrap:'wrap' , mt:2 ,justifyContent:'center' ,padding:5}}>
          {barbers?.map((barber)=>
                <Box>
                  <Typography sx={{color:'black'}}>Barber: {barber.first_name} {barber.last_name}</Typography>
                    <Box sx={{ minWidth: 200 ,display:'flex' ,gap:3,mt:2} }>
                    <FormControl fullWidth>
                      <InputLabel sx={{color:'black'}} id="barber--label">Select A date </InputLabel>
                      <Select
                        labelId="barber--label"
                        id="barber-select"
                        value={available}
                        label="Barber"
                        onChange={handleChange}
                        >
                      {barber.availabilitys.map((avail)=>
                          
                        <MenuItem sx={{color:'black'}}  value={{aid:avail,bid:barber}}>
                          <Box >
                            <Typography variant='body2'>Start: {avail.start}</Typography>
                            <Typography variant='body2'>End: {avail.end}</Typography>

                          </Box>
                          
                          </MenuItem>,

                        
                      )}

                      </Select>
                    </FormControl>

                    </Box>
                </Box>
             )}
            {toggle&&<BookAppointment bookingData={bookingData}/>}
          </Box>
          
        </>
          :
        <>
        <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 1 }}>
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
          <FormButton text={success?"Booking Summary":"Add Client"} disable={success?true:false} />
        </Box>
        <br/>
        <Typography variant='body2' ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</Typography>
      </Box>
      <Box>

    </Box>
</>
      }
      


       
</>


)
}

export default NewClient