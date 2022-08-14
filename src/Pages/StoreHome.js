import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Main from "../Components/Main/Main";
import StoreNav from "../Components/Nav/StoreNav";
import MyStore from "../Components/Stores/MyStore";
import Home from "./Home";
import barberTrim from '../images/barber-trim.jpg';
import barberSeats from '../images/barber-seats.jpg';
import barberTools from '../images/barber-tools.jpg';
import barberTools2 from '../images/barber-tools2.jpg';
import { useEffect } from 'react'

import { useGlobalState } from '../utils/stateContext'
import Footer from "../Components/Footer/Footer";
const styleBoxImage = {
  borderStyle: 'solid',
  width: '200px',
  height: '200px',
  objectFit: 'cover',
};
function StoreHome({name,id}) {
    const {store,dispatch} = useGlobalState()
    console.log("store id param ",id)
    useEffect(() => {

          sessionStorage.setItem('store',id)

        dispatch({
            type: "setStoresId",
            data: id
        })
    }, [id])

    const{storeId}=store
    console.log("from context",name)
    const text=`Located within the heart of Western Sydney, ${name} Barbers's crew are master hair stylists with over 13 years experience with a modern twist. Whether you're after a styled quick cut of the top or a unique custom fade, we've got you covered! Inspired from the underground talent worldwide and a spritz of cracker banter, we strive to make your experience unforgettable.`

  return (
    <>
    <StoreNav name={name} />


    
    <section className="jumbotron">
    <Main button={"Book Your Haircut Now"}href={"/booking"} text={text}></Main>
    </section>
    <section className="banner theme--color" >
      <Box sx={{display:'flex' ,justifyContent:'center',gap:10,flexWrap:"wrap"}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
          <Box component="img" src={barberTrim} sx={styleBoxImage}></Box>
          <Box component="img" src={barberSeats} sx={styleBoxImage}></Box>
          <Box component="img" src={barberTools} sx={styleBoxImage}></Box>
          <Box component="img" src={barberTools2} sx={styleBoxImage}></Box>
        </Box>
      </Box>
    </section>


      <Footer/>
      </>  )
}

export default StoreHome