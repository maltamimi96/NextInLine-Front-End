import { Button, ButtonGroup, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import {deleteAvailability} from '../../Services/availability.service'


function Availability({available}) {


  return (

        <Paper variant="outlined">
                <Box sx={{display:'flex',flexDirection:'column',padding:2 }}>
                <Typography variant="body">{available.id}</Typography>
                <Typography variant="body">{available.barber_id}</Typography>
                <Typography variant="body">{available.start}</Typography>
                <Typography variant="body">{available.end}</Typography>
                <Button color="warning" onClick={()=>deleteAvailability(available.id)}>DELETE</Button>
                </Box>
        </Paper>
  )
}

export default Availability