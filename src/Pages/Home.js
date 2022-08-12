import Main from "../Components/Main/Main";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import StoreNav from "../Components/Nav/StoreNav";
import NavBar from "../Components/Nav/NavBar";
function Home() {
  return (

    <>
    <NavBar/>
    <section className="jumbotron">
    <Main></Main>
    </section>
    <section className="banner theme--color" >
      <Box sx={{display:'flex' ,justifyContent:'center',gap:10}}>
        <Box sx={{borderStyle:'solid' ,width:'200px',height:'200px'}}></Box>
        <Box sx={{borderStyle:'solid' ,width:'200px',height:'200px'}}></Box>
        <Box sx={{borderStyle:'solid' ,width:'200px',height:'200px'}}></Box>
        <Box sx={{borderStyle:'solid' ,width:'200px',height:'200px'}}></Box>
      </Box>
    </section>
    <section className="banner theme--color3" >
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography variant="h6">Easy To Implement in any Salon and hair Dresser </Typography>
        <Button sx={{backgroundColor:'black'}} variant="contained">View How</Button>
      
      </Box>
      </section>
      </>
  )
}

export default Home