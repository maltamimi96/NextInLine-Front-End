import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {getAllHair} from '../../Services/hair_style.service'
function AllHairStyles() {
    const[hair,setHair]=React.useState([])
    React.useEffect(() => {
          
        getAllHair().then((getAllHair)=>setHair(getAllHair))
      }, [])


      const handleChange = (event) => {
        setHair(event.target.value);
        
      }
  return (
    <Box>
        <Typography></Typography>
        <FormControl fullWidth>
        <InputLabel sx={{color:'black'}} id="hair-label">Select Hair Style </InputLabel>
            <Select
              labelId="hair-label"
              id="hair-select"
              value={hair}
              label="hair"
              onChange={handleChange}
            >
        {hair?.map((style)=>
                <MenuItem sx={{color:'black'}}  value={style.id}>{style.name}</MenuItem>
            )}
         
            </Select>
        </FormControl>
    </Box>
  )
}

export default AllHairStyles