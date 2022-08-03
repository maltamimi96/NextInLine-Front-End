import { AppBar, CssBaseline, Grid, Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AllClients from '../Components/Clients/AllClients';
import NewStore from '../Components/Stores/NewStore'

function StoreDashboard() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
<>

    <CssBaseline/>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="My Store" />
          <Tab label="Clients" />
          <Tab label="Barbers" />
          <Tab label="Availability" />
          <Tab label="Hair Styles" />
        </Tabs>
        {selectedTab===0&&<NewStore/>}
        {selectedTab===1&&<AllClients/>}
      </Box>
</>

    )
}

export default StoreDashboard