import { theme } from "./Theme/Theme";
import { ThemeProvider} from '@mui/material/styles';
import Appbar from "./Components/Nav/Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";
import StoreDashboard from "./Pages/StoreDashboard";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
      <Router>
        <Routes>
            <Route path="/login" element={<Authentication/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/admin" element={<AdminDashboard/>}></Route>
            <Route path="/dashboard" element={<StoreDashboard/>}></Route>
        </Routes>
      </Router>


      
    </ThemeProvider>
  );
}

export default App;
