import { AppBar, CssBaseline, Grid, Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CreateAvailability from '../Components/Availability/CreateAvailability';
import NewBarber from '../Components/Barbers/NewBarber';
import AllClients from '../Components/Clients/AllClients';
import NewStore from '../Components/Stores/NewStore'
import TabMenu from '../Components/TabMenu';

function StoreDashboard() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const tabs=['add','all']
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
        {selectedTab===2&&<NewBarber/>}

        {selectedTab===3&&<TabMenu tabs={tabs}/> }
        
      </Box>
</>

    )
}

export default StoreDashboard