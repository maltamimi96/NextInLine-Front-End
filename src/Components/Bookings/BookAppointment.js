import React from 'react'
import {createBooking} from '../../Services/booking.service'
import { useRef, useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import FormButton from '../UniversalComponents/FormButton'
import  {updateAvailability} from '../../Services/availability.service'

function BookAppointment({bookingData}) {


  const[booking,setBooking]=useState([])  

    const handleSubmit=()=>{
        createBooking(bookingData).then((book)=>setBooking(book))
        updateAvailability(bookingData.availability_id,{booked:true})
      
    }
    console.log(booking)
  return (
    <Box>
        <Button onClick={handleSubmit}>Confirm Booking</Button>
    </Box>

    

  )
}

export default BookAppointment