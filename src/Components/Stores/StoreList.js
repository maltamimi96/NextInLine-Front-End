import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import {Link} from  'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const fields=["store name","store location"]
function StoreList({stores}) {
  return (    
  
  <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
          <TableRow>
            {fields.map((field)=>
            <TableCell>{field}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {fields.map((field) => (
            <TableRow
              key={field.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" >
                {field.name}
              </TableCell>
              <TableCell component="th" >
                <Typography variant='h6'>{field.location}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>

    </TableContainer>

  )
}

export default StoreList