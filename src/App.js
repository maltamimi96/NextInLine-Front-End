import { theme } from "./Theme/Theme";
import { ThemeProvider} from '@mui/material/styles';
import NavBar from "./Components/Nav/NavBar";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import StoreDashboard from "./Pages/StoreDashboard";
import Booking from "./Pages/Booking";
import{StateContext} from '../src/utils/stateContext'
import {reducer} from '../src/utils/reducer'
import React, {useReducer}from 'react'
import PrivateRoutes from "./Components/Nav/PrivateRoutes";
import Unauthorised from "./Components/Auth/Unauthorised";
import AdminRoutes from "./Components/Nav/AdminRoutes";
import {getAll} from '../src/Services/store.service'

import  { useState,useEffect } from 'react'
import StoreHome from "./Pages/StoreHome";

function App() {

  const [stores,setStores]=useState([])
  useEffect(() => {
    getAll().then((getAll)=>setStores(getAll))
}, [])
  const initialState = {
    loggedInUser: sessionStorage.getItem("user") || null,
    token: sessionStorage.getItem("token") || null,
    admin:  sessionStorage.getItem("admin") ,
    storeId:null,
    client:{},
    barber:{},
 
  }
  const [store, dispatch] = useReducer(reducer, initialState)


  return (
  
  <>
    <StateContext.Provider value={{store, dispatch}}>
    <ThemeProvider theme={theme}>
        
        
        <Router>
          <Routes>
            {/* Public Routes */}
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Authentication/>}/>
              <Route path="/booking" element={<Booking/>}/>

              {stores.map((str)=>
                <Route path={str.domain} element={<StoreHome name={str.name} id={str.id}/>}>
                </Route>
              )}
              

              {/* Private Routes */}
              <Route element={<PrivateRoutes/>}>
                <Route path='/dashboard' element={<StoreDashboard/>} />
              </Route>
              {/* Admin Routes */}
              <Route element={<AdminRoutes/>}>
                <Route path='/admin' element={<AdminDashboard/>} />
              </Route>
              <Route path='/unauthorised' element={<Unauthorised/>} />
          </Routes>
        </Router>
      </ThemeProvider>
      </StateContext.Provider>
      </>
  );
}

export default App;
