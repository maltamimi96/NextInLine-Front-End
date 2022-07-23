import { theme } from "./Theme/Theme";
import { ThemeProvider} from '@mui/material/styles';
import Appbar from "./Components/Nav/Appbar";
function App() {
  return (
    <ThemeProvider theme={theme}>

      <Appbar/>

    </ThemeProvider>
  );
}

export default App;
