import { Button, Grid, Typography } from "@mui/material"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import  { useState,useEffect } from 'react'
import {createQuestion} from "../../Services/availability.service"


function CreateAvailability() {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const barber_id=1

    const handleChangeStart = (value) => {
      setStart(value);

    }
    const handleChangeEnd = (value) => {
        setEnd(value);

    }
    const handleSubmit= (e)=> {
        e.preventDefault()
        createQuestion(barber_id,start,end)
    }



  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

    <Grid container component={"form"} noValidate onSubmit={handleSubmit}>
        <Grid item xs={3}>
        <DateTimePicker
          label="START AT"
          value={start}
          onChange={handleChangeStart}
          renderInput={(params) => <TextField {...params} />}
        />

        </Grid>
        <Grid item xs={3}>
        <DateTimePicker
          label="END AT"
          value={end}
          onChange={handleChangeEnd}
          renderInput={(params) => <TextField {...params} />}
        />
        <Grid item>
            <Button type="submit" onvariant="contained" sx={{fontWeight:'400'}}>SUBMIT</Button>
        </Grid>
        </Grid>





    </Grid>
    </LocalizationProvider>

  )
}

export default CreateAvailability