import { Box, Button, CssBaseline, FormControl, Grid, MenuItem, Paper, Select, Typography } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import  { useState,useEffect } from 'react'
import {getAllBarbers} from '../../Services/barber.service'
import{useGlobalState} from '../../utils/stateContext'


function AllBarbers() {
  const {store,dispatch} = useGlobalState()
  const {storeId}=store
  const [barbers, setBarbers] = useState([]);
  const [available, setAvailable] = useState([]);
  useEffect(() => {
    getAllBarbers(storeId).then((getAllBarbers)=>setBarbers(getAllBarbers))
    
}, [])
const handleChange = (event) => {
  setAvailable(event.target.value);
  dispatch({
    type: "setAvId",
    data: available.id
  })  

}

  return (
    <>
    <CssBaseline/>
          <Box sx={{display:'flex' , gap:2,flexWrap:'wrap' , mt:2 ,justifyContent:'center'}}>
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
                        <MenuItem sx={{color:'black'}} value={avail}>{avail.id}---{avail.start}-{avail.start}</MenuItem>
                      )}
                      </Select>
                    </FormControl>
                    </Box>
                </Box>
             )}
          </Box>
  
  </>
  )
}

export default AllBarbers

