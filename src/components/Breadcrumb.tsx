import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

export const Breadcrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: 70 }}>
      <Link underline="hover" color="inherit" href="https://joe-brothers.com/">
        Joe Brothers
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="https://joe-brothers.com/#/utility"
      >
        Utility
      </Link>
      <Typography color="text.primary">Korean Age Calculator</Typography>
    </Breadcrumbs>
  );
};
