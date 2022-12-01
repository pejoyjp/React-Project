import Narvar from "./components/Narvar";
import { Box, Stack,createTheme, ThemeProvider } from "@mui/material";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import LeftBar from "./components/LeftBar";


function App() {
  return (
   <Box>
      <Narvar />
       <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
           <LeftBar />
            <Feed />
           <RightBar/>
       </Stack>
   </Box>
 
  );
}

export default App;
