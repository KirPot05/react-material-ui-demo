import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { sidebarLinks } from "../mock";
import { ModeNight } from "@mui/icons-material";

function Sidebar({ mode, setMode }) {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", md: "block" } }}
      maxHeight="92vh"
    >
      <List>
        {sidebarLinks.map(({ label, icon: Icon }) => (
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#">
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton LinkComponent="a" href="#">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch
              onChange={() =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
              }
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
