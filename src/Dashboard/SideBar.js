import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
export default function PermanentDrawerLeft({
  setmode,
  mode,
  toggleMenu,
  setToggle,
}) {
  const drawerWidth = 240;

  const theme = useTheme();

  var loc = useLocation().pathname;

  if (loc === "/") {
    loc = loc + "Home";
  }
  console.log(loc);

  const linkShow = [
    [<HomeIcon />, "Home"],
    [<CreateIcon />, "Create"],
    [<PersonIcon />, "Profile"],
    [<SettingsIcon />, "Settings"],
    [<LogoutIcon />, "Logout"],
  ].map((item, index) => (
    <Link
    key={index}
      style={{ textDecoration: "none", color: "inherit" }}
      to={`/${item[1] == "Home" ? "" : item[1].toLowerCase()}`}
    >
      <ListItem
        sx={{
          bgcolor:
            loc === "/" + item[1] || loc === `/${item[1].toLowerCase()}`
              ? theme.palette.side.main
              : "",
        }}
        disablePadding
        key={index}
      >
        <ListItemButton>
          <ListItemIcon>{item[0]}</ListItemIcon>
          <ListItemText primary={item[1]} />
        </ListItemButton>
      </ListItem>
    </Link>
  ));
  console.log(theme.palette.mode);
  return (
    <Box component="nav">
    <Drawer
      sx={{
        display: { xs: toggleMenu, md: "block" },

        width: ` ${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
    
      anchor="left"
     
    >
      <List>
        <ListItem
          sx={{
            my: "7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          disablePadding
        >
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              setmode(theme.palette.mode === "light" ? "dark" : "light");

              localStorage.setItem(
                "mode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
            }}
            color="inherit"
          >
            {theme.palette.mode === "light" ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon sx={{ color: "yellow" }} />
            )}
          </IconButton>
          <IconButton
            sx={{ display: { xs: "block", md: "none"},padding:"0" ,paddingLeft:"10px" }}
            onClick={(e) => setToggle(toggleMenu === "none" ? "block" : "none")}
            aria-label=""
          >
            <MenuIcon />
          </IconButton>
        </ListItem>

        <Divider />
        {linkShow}
      </List>
    </Drawer></Box>
  );
}
