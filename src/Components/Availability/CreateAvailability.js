import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import  { useState,useEffect } from 'react'
import {createAvailability} from "../../Services/availability.service"
import FormTitle from "../UniversalComponents/FormTitle";
import FormButton from "../UniversalComponents/FormButton";
import {getAllBarbers} from '../../Services/barber.service'





function CreateAvailability() {

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [barbers, setBarbers] = useState([]);
    const [age, setAge] = useState('');
    useEffect(() => {
      getAllBarbers().then((getAllBarbers)=>setBarbers(getAllBarbers))
         }, [])

    const handleChange = (event) => {
      setAge(event.target.value);
    }
    console.log(barbers)
    
    


    const handleChangeStart = (value) => {
      setStart(value);
      console.log(start)

    }
    const handleChangeEnd = (value) => {
        setEnd(value);

    }
    const handleSubmit= (e)=> {
        e.preventDefault()
        createAvailability(age,start,end)
    }

   


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
   
    <Box component={"form"} noValidate onSubmit={handleSubmit} sx={{display:'flex',gap:4 ,flexWrap:'wrap',margin:4 ,backgroundColor:'lightblue' ,padding:2,borderRadius:1,boxShadow:1}}>
    <FormTitle text={"Add Availability"}/>

        
        <DateTimePicker
          label="START AT"
          value={start}
          onChange={handleChangeStart}
          renderInput={(params) => <TextField {...params} />}
          id='end'
          
        />

        <DateTimePicker
          label="END AT"
          value={end}
          onChange={handleChangeEnd}
          renderInput={(params) => <TextField {...params} />}
          id='end'
          
        />
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Barber</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {barbers?.map((barber)=>
            <MenuItem sx={{color:'black'}} value={barber.id}>{barber.first_name}</MenuItem>
          )}
      

        </Select>
      </FormControl>
    </Box>
    
        <FormButton text={"Add"}/>
        
    
     
    </Box>
    </LocalizationProvider>

  )
}

export default CreateAvailability