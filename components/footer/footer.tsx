"use client";
import * as React from "react";
import { Cardtext, Cardtext2 } from "../typography";
import { Box, Grid, Rating, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";

const Footer = () => {
  const sections = [
    {
      title: "COMPANY",
      items: ["company", "About Us", "Blog", "Press Info", "Features", "Successes"],
    },
    {
      title: "TRAVELLERS",
      items: ["Why Travellers", "Enterprise", "Customer Stories", "Pricing", "Security"],
    },
    {
      title: "RESOURCES",
      items: ["Download", "Help Center", "Guides", "Events", "Developers", "App Directory","Partners"],
    },
    {
      title: "EXTRAS",
      items: ["Why Travellers", "Enterprise", "Customer Stories", "Pricing", "Security"],
    },
  ];

  const footerLinks = [
    { name: "TERMS & CONDITIONS" },
    { name: "PRIVACY POLICY" },
    { name: "FEEDBACK" },
    { name: "CONTACT" },
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
          <Grid item lg={4} md={4} xs={4} sx={{ margin: "auto" }}>
            <div>
              <Box pt={9}>
                <Typography fontSize={8} pl={9} sx={{ fontFamily: 'Poppins' }}>
                  BRAND MARKETING TEAM
                </Typography>
                <Cardtext pt={2.5} style={{fontWeight:400}}> 
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor.
                </Cardtext>
              </Box>
              <Box pt={4}>
                <Cardtext2>10/10</Cardtext2>
                <Cardtext>Overall Rating</Cardtext>
                <Rating name="size-medium" defaultValue={5} />
              </Box>
            </div>
          </Grid>
          <Grid item lg={8} md={8} xs={8} style={{ display: "flex", justifyContent: "space-around" }}>
            {sections.map((section, index) => (
              <Box key={index}>
                <ul>
                  <li><Link href={'#'} style={{ paddingBottom: 10, fontFamily: 'Kumbh Sans'}}>
                  <Cardtext2>{section.title}</Cardtext2>
                  </Link></li>
                  {section.items.map((item, idx) => (
                    <Link href={'#'} key={idx}><Cardtext style={{fontWeight:400,lineHeight:2}}>{item}</Cardtext></Link>
                  ))}
                </ul>
              </Box>
            ))}
          </Grid>
        </Grid>
        <Box sx={{ border: '0.75px solid #ebebeb', m: '55px 0' }} ></Box>
        <Grid container mb={8}>
          <Grid item lg={5} md={5} xs={5}>
            <Link href={'#'} style={{ display: "flex",color:'black', fontWeight:400 }}>
              {footerLinks.map((link, index) => (
                <Typography key={index} whiteSpace={'nowrap'} sx={{ marginRight: "20px", fontSize: 14 }} >
                  {link.name}
                </Typography>
              ))}
            </Link>
          </Grid>
          <Grid item lg={7} md={12} xs={12}>
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
