import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type MenuType = "day" | "month" | "year";

const LABEL_BY_TYPE: Record<MenuType, string> = {
  day: "Jour",
  month: "Mois",
  year: "Année",
};

interface IHeader {
  type: MenuType;
}

const Header: React.FunctionComponent<IHeader> = ({ type }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {LABEL_BY_TYPE[type]}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
