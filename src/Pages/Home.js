import Main from '../Components/Main/Main';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import StoreNav from '../Components/Nav/StoreNav';
import barberTrim from '../images/barber-trim.jpg';
import barberSeats from '../images/barber-seats.jpg';
import barberTools from '../images/barber-tools.jpg';
import barberTools2 from '../images/barber-tools2.jpg';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Nav/NavBar';
//Styles
const styleBoxImage = {
  borderStyle: 'solid',
  width: '200px',
  height: '200px',
  objectFit: 'cover',
};
const text="NEXT IN LINE will tranform your walk-in business with our Barber Queue App and Beauty Queue App. We are the only system to combine the flexibility of a queue or walk-ins with the certainty of bookings. The transition for clients is easier because clients can still walk-in, you minimize walk past clients by reducing your in-store wait time and smoothing the arrivals. We are a complete management tool capturing your client data and automating alerts and notifications."

function Home() {
  return (
    <>
      <NavBar />
      <section className="jumbotron">
        <Main button={"Join Now"}href={"/login"} text={text}></Main>
      </section>
      <section className="banner theme--color">
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
          <Box component="img" src={barberTrim} sx={styleBoxImage}></Box>
          <Box component="img" src={barberSeats} sx={styleBoxImage}></Box>
          <Box component="img" src={barberTools} sx={styleBoxImage}></Box>
          <Box component="img" src={barberTools2} sx={styleBoxImage}></Box>
        </Box>
      </section>
      <section className="banner theme--color3">
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            Easy To Implement in any Salon and hair Dresser{' '}
          </Typography>
          <Button sx={{ backgroundColor: 'black' }} variant="contained">
            View How
          </Button>
        </Box>
      </section>
      <Footer />
    </>
  );
}

export default Home;
