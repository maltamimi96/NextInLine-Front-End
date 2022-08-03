import {getAll} from "../Services/store.service"
import  { useState,useEffect } from 'react'
import StoreList from "../Components/Stores/StoreList"
import { AppBar } from "@mui/material"
import NewStore from "../Components/Stores/NewStore"



function AdminDashboard() {
  const [stores, setStores] = useState(null)

  useEffect(() => {

      const data = getAll()
      data.then((data)=>setStores(data))

  }, [])
  return (
    <div>
        {stores && <StoreList stores={stores} />}
    </div>  )
}

export default AdminDashboard