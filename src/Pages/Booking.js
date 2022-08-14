import { Box, CssBaseline } from '@mui/material'
import React from 'react'
import AddNewBooking from '../Components/Bookings/AddNewBooking'
import NewClient from '../Components/Clients/NewClient'
import AllHairStyles from '../Components/HairStyle/AllHairStyles'
import StoreNav from '../Components/Nav/StoreNav'
import{useGlobalState} from '../utils/stateContext'
import {getAllBarbers}from '../Services/barber.service'

import  { useState,useEffect } from 'react'
import AvailableBooking from '../Components/Bookings/AvailableBooking'

function Booking() {
  const {store,dispatch} = useGlobalState()
  const [barbers, setBarbers] = useState(null);
  const store_id=sessionStorage.getItem("store")
  useEffect(() => {
    getAllBarbers(store_id).then((getAllBarbers)=>setBarbers(getAllBarbers))
      }, [])
  
      
  return (
    
    <>
      
      <StoreNav/>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        
        <NewClient/>
        <AvailableBooking barbers={barbers} />
      </Box>
        

        
    
     </>
  )
}

export default Booking