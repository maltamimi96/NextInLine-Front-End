import { theme } from "./Theme/Theme";
import { ThemeProvider} from '@mui/material/styles';
import Appbar from "./Components/Nav/Appbar";
import Main from "./Components/Main/Main";
import { Button, Card, CardContent, Typography } from "@mui/material";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { Box, height } from "@mui/system";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
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


      
    </ThemeProvider>
  );
}

export default App;
