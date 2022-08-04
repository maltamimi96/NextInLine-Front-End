import { Typography } from '@mui/material'
import React from 'react'
import  { useState,useEffect } from 'react'
import {getAll} from "../../Services/availability.service"


function AllAvailability() {
  const [availability, setAvailability] = useState(null)

  useEffect(() => {
    console.log("running")
    const data = getAll()
    data.then((data)=>setAvailability(data)).then(console.log(availability)
)

}, [])
  return (
    <div>

    </div>
  )
}

export default AllAvailability