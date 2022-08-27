import React from 'react'
import {createBooking} from '../../Services/booking.service'
import { useRef, useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { Button, Typography } from '@mui/material'
import FormButton from '../UniversalComponents/FormButton'
import  {updateAvailability} from '../../Services/availability.service'
import BookingConfirmation from '../Bookings/BookingConfirmation'
function BookAppointment({bookingData}) {


  const[booking,setBooking]=useState([])  

    const handleSubmit=()=>{
        createBooking(bookingData).then((book)=>setBooking(book))
        updateAvailability(bookingData.availability_id,{booked:true})
      
    }
  return (
    <Box>
        <Button onClick={handleSubmit}>Confirm Booking</Button>
        {booking&&<h3>{booking.id}{booking.barber.first_name}{booking.barber.last_name}{booking.availability.start}</h3>}
        
    </Box>

    

  )
}

export default BookAppointment