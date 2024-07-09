"use client"
import * as React from "react";
import { Box, Button, Grid, Rating, Toolbar, Typography } from "@mui/material";
import style from './header.module.css';
import { Cardtext, Cardtext2, Medium_text, Medium_text2 } from "../typography";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppleIcon from '@mui/icons-material/Apple';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import '@fontsource/kumbh-sans';
import '@fontsource/poppins';


const Header = () => {
  const navItems = ['Home', 'About', 'investors', 'Contact'];
  const headphone = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ margin: -11 }} viewBox="0 0 36 32" fill="none">
      <path xmlns="http://www.w3.org/2000/svg" d="M8 0.9C4.67716 0.9 1.97891 3.55308 1.90306 6.85754C1.30968 7.16633 0.9 7.78799 0.9 8.5V10.5C0.9 11.5161 1.73392 12.35 2.75 12.35C3.76608 12.35 4.6 11.5161 4.6 10.5V8.5C4.6 7.60677 3.95596 6.85545 3.11043 6.68628C3.27011 4.11152 5.38202 2.1 8 2.1C10.618 2.1 12.7299 4.11152 12.8896 6.68628C12.044 6.85545 11.4 7.60677 11.4 8.5V10.5C11.4 11.5161 12.2339 12.35 13.25 12.35C13.2859 12.35 13.3215 12.3489 13.3568 12.3468C13.2044 12.9552 12.6592 13.4 12 13.4H10.5534C10.3971 12.828 9.86874 12.4 9.25 12.4H7.75C7.01092 12.4 6.4 13.0109 6.4 13.75C6.4 14.4891 7.01092 15.1 7.75 15.1H9.25C9.66908 15.1 10.0464 14.9034 10.2946 14.6H12C13.43 14.6 14.6 13.43 14.6 12V11.7598C14.909 11.429 15.1 10.9855 15.1 10.5V8.5C15.1 7.78799 14.6903 7.16633 14.0969 6.85753C14.0211 3.55308 11.3228 0.9 8 0.9Z" fill="white" stroke="white" stroke-width="0.2" />
    </svg>
  )
  const icon = (
    <svg fill="none" height="30" viewBox="0 0 15 15" width="37" style={{ marginLeft: 8 }} xmlns="http://www.w3.org/2000/svg"><path d="M1.25097 0.0664289C1.40622 -0.0227402 1.59729 -0.0220988 1.75194 0.0681106L9.59402 4.64266L7.16668 6.82726L1 1.27725V0.5C1 0.320967 1.09572 0.155598 1.25097 0.0664289Z" fill="#1E231C" /><path d="M1 2.62262V12.3773L6.41925 7.49994L1 2.62262Z" fill="#1E231C" /><path d="M1 13.7226V14.5C1 14.679 1.09572 14.8444 1.25097 14.9336C1.40622 15.0227 1.59729 15.0221 1.75194 14.9319L9.59409 10.3573L7.16668 8.17262L1 13.7226Z" fill="#1E231C" /><path d="M10.5011 9.82822L13.7519 7.93189C13.9055 7.84228 14 7.67783 14 7.5C14 7.32217 13.9055 7.15772 13.7519 7.06811L10.501 5.17173L7.9141 7.49994L10.5011 9.82822Z" fill="#1E231C" />
    </svg>
  );
  return (
    <>
      <Box className={style.bgimg}>
        <Box className="container">
          <Grid pt={2} >
            <Toolbar>
              <Typography
                fontSize={7}
                sx={{ flexGrow: 1, color: 'black' }}
                fontFamily={'Poppins'}
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
                  style={{ marginLeft: 60, fontSize: 9, fontWeight: 400, fontFamily: 'Kumbh Sans' }}
                  className={style.button}> {headphone} CONTACT US</button>
              </Box>
            </Toolbar>
          </Grid>
          <Grid container>
            <Grid item lg={5}>
              <Box>
                <Typography fontSize={45} fontWeight={700} pt={10} fontFamily={'Kumbh Sans'}>BRIDGING <br />
                  THE GAP</Typography>
              </Box>
              <Typography fontSize={17} color={'#474747'} lineHeight={2} fontFamily={'Poppins'}>Empowering  connection between Clients and Vendors</Typography>
              <Grid container mt={5}>
                <Grid border={'2px solid gray'} borderRadius={3} item lg={4.2} height={59}>
                  <Box display={"flex"} alignItems={"center"} p={1} >
                    {icon}
                    <Box color={'#1E231C'}>
                      <Typography fontSize={11} fontFamily={'Kumbh Sans'} fontWeight={100}>
                        Available on the
                      </Typography>
                      <Typography fontSize={16} fontWeight={600} fontFamily={'Kumbh Sans'}>
                        Google Play
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid border={'2px solid gray'} borderRadius={3} item lg={4.2} ml={2} height={59}>
                  <Box display={"flex"} alignItems={"center"} p={1}>
                    <AppleIcon sx={{ fontSize: 37, ml: 1, color: '#1E231C' }} />
                    <Box color={'#1E231C'}>
                      <Typography fontSize={11} fontFamily={'Kumbh Sans'} fontWeight={100}>
                        Download on the
                      </Typography>
                      <Typography fontSize={16} fontWeight={600} fontFamily={'Kumbh Sans'}>
                        App Store
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Box display="flex" gap={5} mt={8} pb={10}>
                <Box>
                  <Medium_text2>16k+</Medium_text2>
                  <Cardtext>Active users</Cardtext>
                </Box>
                <Box>
                  <Medium_text2>08k+</Medium_text2>
                  <Cardtext>Property sales</Cardtext>
                </Box>
                <Box>
                  <Medium_text2>12k+</Medium_text2>
                  <Cardtext>Reviews</Cardtext>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6}></Grid>
          </Grid>
        </Box>
      </Box >
    </>
  );
}
export default Header;
