import { theme } from "./Theme/Theme";
import { ThemeProvider} from '@mui/material/styles';
import Appbar from "./Components/Nav/Appbar";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import StoreDashboard from "./Pages/StoreDashboard";
import Booking from "./Pages/Booking";
import{StateContext} from '../src/utils/stateContext'
import {reducer} from '../src/utils/reducer'
import React, {useEffect, useReducer}from 'react'

function App() {


  const initialState = {
    loggedInUser: sessionStorage.getItem("user") || null,
    token: sessionStorage.getItem("token") || null
  }
  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser} = store


  return (
    <StateContext.Provider value={{store, dispatch}}>
    <ThemeProvider theme={theme}>
        <Router>
        <Appbar/>

          <Routes>
              <Route path="/login" element={<Authentication/>}></Route>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/admin" element={<AdminDashboard/>}></Route>
              <Route path="/dashboard" element={loggedInUser? <StoreDashboard/>:<Navigate to="/login" />
                
             
              
              }></Route>
              <Route path="/booking" element={<Booking/>}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
      </StateContext.Provider>
  );
}

export default App;
