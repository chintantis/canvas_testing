"use client";
import * as React from "react";
import { Cardtext, Cardtext2 } from "../typography";
import { Box, Grid, Rating, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const sections = [
    {
      title: "COMPANY",
      items: ["company", "About Us", "Blog", "Press Info", "Features", "Successes"],
    },
    {
      title: "Travellers",
      items: ["Why Travellers", "Enterprise", "Customer Stories", "Pricing", "Security"],
    },
    {
      title: "Resources",
      items: ["Download", "Help Center", "Guides", "Events", "Developers", "App Directory"],
    },
    {
      title: "Extras",
      items: ["Why Travellers", "Enterprise", "Customer Stories", "Pricing", "Security"],
    },
  ];

  const footerLinks = [
    { name: "Terms & Conditions" },
    { name: "Privacy Policy" },
    { name: "Feedback" },
    { name: "Contact" },
  ];

  const socialIcons = [
    { icon: <FacebookIcon />, width: 50 },
    { icon: <InstagramIcon />, width: 50 },
    { icon: <TwitterIcon />, width: 50 },
    { icon: <YouTubeIcon />, width: 20 },
  ];

  return (
    <>
      <Box className="container">
        <Grid container>
          <Grid item lg={4} sx={{ margin: "auto" }}>
            <div>
              <Box pt={9}>
                <Typography fontSize={8} pl={9} sx={{fontFamily:'Poppins'}}>
                  BRAND MARKETING TEAM
                </Typography>
                <Cardtext pt={2.5}>
                  Lorem ipsum dolor sit amet, consectetur
                  <br /> adipiscing elit, sed do eiusmod tempor.
                </Cardtext>
              </Box>
              <Box pt={4}>
                <Cardtext2>10/10</Cardtext2>
                <Cardtext>Overall Rating</Cardtext>
                <Rating name="size-medium" defaultValue={5} />
              </Box>
            </div>
          </Grid>
          <Grid item lg={8} style={{ display: "flex", justifyContent: "space-around" }}>
            {sections.map((section, index) => (
              <Box key={index}>
                <ul>
                  <li><Cardtext2 style={{paddingBottom:10 , fontFamily:'Kumbh Sans'}}>{section.title}</Cardtext2></li>
                  {section.items.map((item, idx) => (
                    <li key={idx}><Cardtext>{item}</Cardtext></li>
                  ))}
                </ul>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Box sx={{ border: '0.75px solid #ebebeb', m: '55px 0' }} ></Box>
        <Grid container mb={8}>
          <Grid item lg={5}>
            <Box sx={{ display: "flex" }}>
              {footerLinks.map((link, index) => (
                <Typography key={index} whiteSpace={'nowrap'} sx={{ marginRight: "20px", fontSize: 14 }} >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item lg={7}>
            <Box display={"flex"} justifyContent={"flex-end"} >
              {socialIcons.map((social, index) => (
                <Box key={index} width={social.width}>
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Footer;
