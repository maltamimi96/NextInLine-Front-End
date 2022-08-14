import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

function Main({button,href,text}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ backgroundColor: 'primary' }}>
        <Typography variant="h5">
          {text}
        </Typography>
      </Box>
      <Button
        sx={{
          color: 'black',
          backgroundColor: 'white',
          width: '300px',
          alignSelf: 'center',
          mt: 4,
          ' &:hover': {
            backgroundColor: '#black',
            boxShadow: 'none',
            color:"red"
          }

        }}
        variant="contained"
        href={href}
      >
        {button}
      </Button>
    </Box>
  );
}

export default Main;
