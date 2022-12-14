import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export const TopBar = () => {
  const pages: { [key: string]: () => void }[] = [
    { Games: () => (window.location.href = "https://joe-brothers.com/#/game/") },
    { Utilities: () => (window.location.href = "https://joe-brothers.com/#/utility/") },
    { Blog: () => (window.location.href = "https://joe-brothers.com/blog/") },
    { Company: () => (window.location.href = "https://joe-brothers.com/#/company/") },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      color="transparent"
      elevation={5}
      sx={{ backdropFilter: "blur(10px)" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => (window.location.href = "https://joe-brothers.com/")}
          >
            <img src="assets/logo.png" width={20} style={{ marginRight: 10 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                fontFamily: "Source Code Pro",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Joe
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={`menu_side_${Object.entries(page)[0][0]}`}
                  onClick={() => {
                    handleCloseNavMenu();
                    Object.entries(page)[0][1]();
                  }}
                >
                  <Typography textAlign="center">
                    {Object.entries(page)[0][0]}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={`menu_center_${Object.entries(page)[0][0]}`}
                onClick={() => {
                  handleCloseNavMenu();
                  Object.entries(page)[0][1]();
                }}
                sx={{ my: 2, color: "inherit", display: "block" }}
              >
                {Object.entries(page)[0][0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
