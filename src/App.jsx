import {
  Box,
  CssBaseline,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import RightSection from "./components/RightSection";
import Sidebar from "./components/Sidebar";
import AddPost from "./components/AddPost";
import { useState } from "react";
import PostModal from "./components/PostModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor="Background.default">
        <Navbar />

        <Stack direction="row" justifyContent="space-between" maxHeight="90vh">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <RightSection />
        </Stack>

        <AddPost open={isModalOpen} setOpen={setIsModalOpen} />

        <PostModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
