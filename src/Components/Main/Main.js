import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'



function Main() {
  return (



<Box
 sx={{display:'flex', flexDirection:'column'}}
 >
    <Box sx={{backgroundColor:'primary'}}>
    <Typography variant='h2'>YOUR ONE PLACE SOLUTION FOR YOUR BARBER SHOP</Typography></Box>
    <Button  
    sx=
    {{color:'black',backgroundColor:'white',width:'300px',alignSelf:'center',mt:4}}
    
    variant='contained'>
      
      Join Now
    
    </Button>

</Box>


    
  )
}

export default Main