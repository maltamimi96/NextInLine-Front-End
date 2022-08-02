import { theme } from "./Theme/Theme";
import { ThemeProvider} from '@mui/material/styles';
import Appbar from "./Components/Nav/Appbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Authentication from "./Pages/Authentication";
import Home from "./Pages/Home";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
      <Router>
        <Routes>
            <Route path="/login" element={<Authentication/>}></Route>
            <Route path="/" element={<Home/>}></Route>

        </Routes>
      </Router>


      
    </ThemeProvider>
  );
}

export default App;
