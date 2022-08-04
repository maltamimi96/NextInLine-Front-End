import {getAll} from "../Services/store.service"
import  { useState,useEffect } from 'react'
import StoreList from "../Components/Stores/StoreList"
import NewStore from "../Components/Stores/NewStore"
import { AppBar, CssBaseline, Grid, Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import AllAvailability from "../Components/Availability/AllAvailability"




function AdminDashboard() {
  const [stores, setStores] = useState(null)
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {

      const data = getAll()
      data.then((data)=>setStores(data))

  }, [])
  return (
    <>
   
        
    <CssBaseline/>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Stores" />
          <Tab label="Add Store" />
          <Tab label="USERS" />
        </Tabs>
        {selectedTab===1&&<NewStore/>}
        {selectedTab===0&&stores&&<StoreList stores={stores} />}

      </Box>
      <AllAvailability/>
      </>
    )
}

export default AdminDashboard