import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import  { useState,useEffect } from 'react'
import {getAll} from "../../Services/availability.service"
import Availability from './Availability'


function AllAvailability() {
  const [availability, setAvailability] = useState(null)

  useEffect(() => {
     getAll().then((getAll)=>setAvailability(getAll)).then(console.log(availability)

)

}, [])
// Get all availability and Displays Them
  return (

    <Box sx={{display:'flex'}}>
        {availability?.map((av)=>
        
        <Availability available={av}/>

        )}
    </Box>


  )
}

export default AllAvailability