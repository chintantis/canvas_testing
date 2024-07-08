"use client"
import * as React from "react";
import { Box, Button, Grid, Rating, Toolbar, Typography } from "@mui/material";

import style from './header.module.css';

export default function Footer() {

  const navItems = ['Home', 'About', 'investors', 'Contact'];
  return (
    <>
      <Box className={style.bgimg}>
        <Box position={'fixed'}>
          <img src="/bg.jpg" alt="img" />
        </Box>
        <Box className={style.appbar}>
          <Toolbar>
            <Typography
              fontSize={7}
              component="div"
              sx={{ flexGrow: 1, color: 'black' }}
            >
              BRAND MARKETING TEAM
            </Typography>
            <Box>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: 'black', fontSize: 13 }}>
                  {item}
                </Button>
              ))}
              
              <button
                style={{ marginLeft: 40 }}
                className={style.button}>CONTACT US</button>
            </Box>
          </Toolbar>
        </Box>
        <Box>
          <Box>
            text
          </Box>
        </Box>
      </Box>
    </>
  );
}
