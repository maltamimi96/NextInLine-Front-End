import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Main from "../Components/Main/Main";
import StoreNav from "../Components/Nav/StoreNav";
import MyStore from "../Components/Stores/MyStore";
import Home from "./Home";
import { useEffect } from 'react'

import { useGlobalState } from '../utils/stateContext'

function StoreHome({name,id}) {
    const {store,dispatch} = useGlobalState()
    useEffect(() => {
        dispatch({
            type: "setStoresId",
            data: id
        })
    }, [id])
    const{storeId}=store
    console.log(store)

  return (
    <>
    <StoreNav name={name}/>


    
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
      </>  )
}

export default StoreHome