import { Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"

function Availability({available}) {
  return (

        <Paper variant="outlined">
                <Typography>{available.id}</Typography>
                <Typography>{available.start}</Typography>
                <Typography>{available.end}</Typography>
        </Paper>
  )
}

export default Availability