import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import AddNewBooking from '../Components/Bookings/AddNewBooking'
import NewClient from '../Components/Clients/NewClient'
import AllHairStyles from '../Components/HairStyle/AllHairStyles'
import StoreNav from '../Components/Nav/StoreNav'

function Booking() {
  return (
    <>
      <StoreNav/>
      <Box>
        <NewClient/>
      </Box>
        

        
    
     </>
  )
}

export default Booking