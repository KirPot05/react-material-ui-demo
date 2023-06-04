import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Demo App
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          {" "}
          <InputBase placeholder="Search..." fullWidth />{" "}
        </Search>

        <IconsContainer>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>

          <Badge badgeContent={4} color="error">
            <Notifications color="white" />
          </Badge>

          <Avatar
            src="https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            sx={{
              width: 30,
              height: 30,
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          />
        </IconsContainer>

        <UserInfo onClick={handleOpen}>
          <Avatar
            src="https://images.pexels.com/photos/5794945/pexels-photo-5794945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            sx={{ width: 30, height: 30, objectFit: "cover" }}
          />
          <Typography variant="body2" sx={{ color: "white" }}>
            John Doe
          </Typography>
        </UserInfo>
      </StyledToolbar>

      <Menu
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
