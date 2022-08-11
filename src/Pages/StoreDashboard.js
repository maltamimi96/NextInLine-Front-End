import { CssBaseline, Tab, Tabs } from '@mui/material'
import { Box } from '@mui/system'

import TabMenu from '../Components/UniversalComponents/TabMenu';
import CreateAvailability from '../Components/Availability/CreateAvailability';
import AllAvailability from '../Components/Availability/AllAvailability';
import NewBarber from '../Components/Barbers/NewBarber';
import AllBarbers from '../Components/Barbers/AllBarbers';
import AllClients from '../Components/Clients/AllClients';
import NewClient from '../Components/Clients/NewClient';
import MyStore from '../Components/Stores/MyStore'
import NewStore from '../Components/Stores/NewStore'
import {useState} from 'react'


function StoreDashboard() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const storeComponents=[<MyStore/>,<NewStore/>,]
  const availabilityComponents=[<CreateAvailability/>,<AllAvailability/>]
  const barberComponents=[<NewBarber/>,<AllBarbers/>]
  const hairStyleComponents=[<CreateAvailability/>,<AllAvailability/>]
  const ClientComponents=[<NewClient/>,<AllClients/>]
  const BookingComponents=[<NewClient/>,<AllClients/>]




  
  return (
<>

    <CssBaseline/>
    <Box sx={{ borderBottom: 1 }}>
        <Tabs value={selectedTab} onChange={handleChange}  >

          <Tab label="My Store" />
          <Tab label="Clients" />
          <Tab label="Barbers" />
          <Tab label="Availability" />
          <Tab label="Hair Styles" />
          <Tab label="Bookings" />

        </Tabs>
        {selectedTab===0&&<TabMenu tabs={['My store','Create New Store',]} component={storeComponents} />}
        {selectedTab===1&&<TabMenu tabs={['add New Client','view all Clients']} component={ClientComponents}/>}
        {selectedTab===2&&<TabMenu tabs={['add New Barber','view all Barbers']} component={barberComponents}/> }
        {selectedTab===3&&<TabMenu tabs={['add New','view all']} component={availabilityComponents}/> }
        {selectedTab===4&&<TabMenu tabs={['add New Hair Style','view all Hair Styles']} component={hairStyleComponents}/> }
        {selectedTab===5&&<TabMenu tabs={['add New Booking','view all Bookings']} component={hairStyleComponents}/> }

        
      </Box>
      
</>

    )
}

export default StoreDashboard