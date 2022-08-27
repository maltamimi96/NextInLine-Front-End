import { Box } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';


function AllClients({clients}) {

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
   
    {
      field: 'first_name',
      headerName: 'First Name',
      width: 400,
    },
    {
      field: 'last_name',
      headerName: 'Last Name',
      width: 400,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 400,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 400,
    },
  
  ];
  
    
  const rows = clients.map((row)=>({
    id:row.id,
    location:row.location,
    name:row.name,
    
  
  }))
  return (

    
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>  )
}

export default AllClients