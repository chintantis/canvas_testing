"use client"
import * as React from "react";
import { Cardtext, Cardtext2 } from "../typography";
import { Box, Grid, Rating, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import style from '../footer/footer.module.css'

export default function Footer() {
  return (
    <>
      <Box className={style.container}>
        <Grid container>
          <Grid item lg={4} sx={{ margin: 'auto', p: 3 }}>
            <div>
              <Box pt={2}>
                <Typography fontSize={8} pl={8}>
                  BRAND MARKETING TEAM
                </Typography>
                <Cardtext>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />adipiscing elit, sed do eiusmod tempor.
                </Cardtext>
              </Box>
              <Box pt={3}>
                <Cardtext2>10/10</Cardtext2>
                <Cardtext>Overall  Rating</Cardtext>
                <Rating name="size-medium" defaultValue={2} />
              </Box>
            </div>
          </Grid>
          <Grid item lg={8} style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box>
              <ul>
                <li><Cardtext2>COMPANY</Cardtext2></li>
                <li><Cardtext >company</Cardtext></li>
                <li><Cardtext >About Us</Cardtext></li>
                <li><Cardtext >Blog</Cardtext></li>
                <li><Cardtext >Press Info</Cardtext></li>
                <li><Cardtext >Features</Cardtext></li>
                <li><Cardtext >Successes</Cardtext></li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li><Cardtext2>Travellers</Cardtext2></li>
                <li><Cardtext >Why Travellers</Cardtext></li>
                <li><Cardtext >Enterprise</Cardtext></li>
                <li><Cardtext >Customer Stories</Cardtext></li>
                <li><Cardtext >Pricing</Cardtext></li>
                <li><Cardtext >Security</Cardtext></li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li><Cardtext2>Resources</Cardtext2></li>
                <li><Cardtext >Download</Cardtext></li>
                <li><Cardtext >Help Center</Cardtext></li>
                <li><Cardtext >Guides</Cardtext></li>
                <li><Cardtext >Events</Cardtext></li>
                <li><Cardtext >Developers</Cardtext></li>
                <li><Cardtext >App Directory</Cardtext></li>
              </ul>
            </Box>
            <Box>
              <ul>
                <li><Cardtext2>Extras</Cardtext2></li>
                <li><Cardtext >Why Travellers</Cardtext></li>
                <li><Cardtext >Enterprise</Cardtext></li>
                <li><Cardtext >Customer Stories</Cardtext></li>
                <li><Cardtext >Pricing</Cardtext></li>
                <li><Cardtext >Security</Cardtext></li>
              </ul>
            </Box>
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <Grid item lg={5}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Typography>TErms & condition</Typography>
              <Typography>privacy policy</Typography>
              <Typography>Feedback</Typography>
              <Typography>contant</Typography>
            </Box>
          </Grid>
          <Grid item lg={7}>
            <Box display={'flex'} justifyContent={'flex-end'}>
              <Box width={50}>
                <FacebookIcon />
              </Box>
              <Box width={50}>
                <InstagramIcon />
              </Box>
              <Box width={50}>
                <TwitterIcon />
              </Box>
              <Box width={60}>
                <YouTubeIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
