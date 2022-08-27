import { Box, Container } from '@mui/system'
import { DataGrid } from '@mui/x-data-grid';




function StoreList({stores}) {
  
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
   
    {
      field: 'location',
      headerName: 'Store Location',
      width: 400,
    },
    {
      field: 'name',
      headerName: 'Store Name',
      width: 400,
    },
  
  ];

const rows = stores.map((row)=>({
  id:row.id,
  location:row.location,
  name:row.name,
  

}))

  return (    

    
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        
      />
    </Box> 
  
  




  )
}

export default StoreList