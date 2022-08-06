import { Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"

function Availability({available}) {
  return (

        <Paper variant="outlined">
                <Typography variant="body2">{available.id}</Typography>
                <Typography variant="body">{available.start}</Typography>
                <Typography variant="body">{available.end}</Typography>
        </Paper>
  )
}

export default Availability