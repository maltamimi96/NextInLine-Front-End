import React from 'react'
import { AppBar, CssBaseline, Grid, Tab, Tabs } from '@mui/material'


function TabMenu({tabs}) {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
  return (
    <Tabs value={selectedTab} onChange={handleChange}>

        {tabs?.map((tab)=>

        <Tab label={tab} />
        )}


  </Tabs>
  )
}

export default TabMenu