import React from 'react'
import { AppBar, CssBaseline, Grid, Tab, Tabs } from '@mui/material'
import MyStore from '../Stores/MyStore';
import NewStore from '../Stores/NewStore';


function TabMenu({tabs,component}) {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
  return (
    <>
    <Tabs value={selectedTab} onChange={handleChange} centered>

        {tabs?.map((tab)=>

        <Tab label={tab} />
        )}

  </Tabs>
  
  {selectedTab===0&&component[0]}
  {selectedTab===1&&component[1]}
          
</>
  )
}

export default TabMenu