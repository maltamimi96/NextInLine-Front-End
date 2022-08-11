import React from 'react'
import {getMyStore} from '../../Services/store.service'
import { useRef, useState, useReducer,useEffect } from 'react'
import { useGlobalState } from "../../utils/stateContext"

function MyStore() {


      const [store, setStore] = useState(null)



    useEffect(() => {
      getMyStore(1).then((str)=>setStore(str))
  
  }, [])
  return (
        <div>{store.name}</div>
  )
}

export default MyStore