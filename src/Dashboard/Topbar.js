import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Link, Button, IconButton, Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

export default function Topbar({ toggleMenu, setToggle }) {
  const drawerWidth = 240;
  return (
    <Box component="header">
      <AppBar
        className="topBar"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)`, xs: "100" },
          marginLeft: { md: `${drawerWidth}px`, xs: "0" },
        }}
        position="static"
      >
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, paddingBottom: "12px" ,marginRight:"10px"}}
            onClick={(e) => setToggle(toggleMenu==="none"?"block":"none")}
            aria-label=""
          >
            <MenuIcon />
          </IconButton>

          <Link
            href="/"
            underline="none"
            sx={{
              flexGrow: 1,
              color: "white",
              "&:hover": { fontSize: "16.5px" },
            }}
          >
            My expenseive
          </Link>
          <Typography variant="body2" color="white" sx={{ marginRight: "5px" }}>
            Karam Zohud
          </Typography>

          <Avatar
            alt="Karam zohud"
            src={require("../Images/1705609826088.jpg")}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
