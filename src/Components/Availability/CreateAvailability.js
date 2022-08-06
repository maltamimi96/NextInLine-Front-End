import { Button, Grid, Typography } from "@mui/material"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import  { useState } from 'react'

function CreateAvailability() {
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());


    const handleChangeStart = (value) => {
      setStart(value);
    }
    const handleChangeEnd = (value) => {
        setEnd(value);
    };


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

    <Grid container>
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
            <Button type="submit">SUBMIT</Button>
        </Grid>
        </Grid>





    </Grid>
    </LocalizationProvider>

  )
}

export default CreateAvailability