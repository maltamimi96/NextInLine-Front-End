import { CssBaseline } from '@mui/material'
import React from 'react'
<<<<<<< Updated upstream
import AllAvailability from '../Components/Availability/AllAvailability'

=======
import AddNewBooking from '../Components/Bookings/AddNewBooking'
import StoreNav from '../Components/Nav/StoreNav'
import { useGlobalState } from '../utils/stateContext'
>>>>>>> Stashed changes
function Booking() {
  const {store} = useGlobalState()
  console.log(store)
  
  return (

    <>
<<<<<<< Updated upstream
   
    <div>Booking
        <AllAvailability/>
=======
    <StoreNav name={store.storesName}/>
  
      <Box>
       <AddNewBooking/>
      </Box>
>>>>>>> Stashed changes
        
    </div>
     </>
  )
}

export default Booking