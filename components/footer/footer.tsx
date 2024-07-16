"use client";
import * as React from "react";
import { Cardtext, Cardtext2 } from "../typography";
import { Box, Grid, Rating, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from "next/link";
import style from "./footer.module.css"

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
      items: ["Download", "Help Center", "Guides", "Events", "Developers", "App Directory", "Partners"],
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
      <Box display="flex" flexDirection="column" gap={6}>
        <Box></Box>
        <Box className='container'>
          <Grid container>
            <Grid item lg={4} md={4} xs={12} display="flex" flexDirection="column" justifyContent="space-around">
              <Box display="flex" flexDirection="column" gap={3}>
                <Box></Box>
                <Box>
                  <Typography fontSize={8} sx={{ fontFamily: 'Poppins' }}>
                    BRAND MARKETING TEAM
                  </Typography>
                  <Cardtext style={{ fontWeight: 400 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                  </Cardtext>
                </Box>
                <Box>
                  <Cardtext2>10/10</Cardtext2>
                  <Cardtext>Overall Rating</Cardtext>
                  <Rating name="size-medium" defaultValue={5} />
                </Box>
                <Box></Box>
              </Box>
            </Grid>
            <Grid item lg={8} md={8} xs={12} className={style.loop}>
              <Box display="flex" flexWrap="wrap" gap={5}>
                {sections.map((section, index) => (
                  <Box key={index} className={style.sectionBox}>
                    <Cardtext2 className={style.sectionTitle}>
                      {section.title}
                    </Cardtext2>
                    {section.items.map((item, idx) => (
                      <Link href={'#'} key={idx}>
                        <Cardtext style={{ fontWeight: 400, lineHeight: 2 }}>{item}</Cardtext>
                      </Link>
                    ))}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ border: '0.75px solid #ebebeb', margin: '20px 0' }}></Box>
          <Grid container>
            <Grid item lg={5} md={5} xs={12} sx={{ display: 'flex', gap: '17px' }} className={style.footerend}>
              {footerLinks.map((link, index) => (
                <Link href={'#'} key={index} style={{ color: 'black', textDecoration: 'none' }}>
                  <Typography sx={{ fontSize: 14, fontFamily: 'Poppins', display: 'flex' }}>
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </Grid>
            <Grid item lg={7} md={12} xs={12}>
              <Box display="flex" justifyContent="flex-end">
                {socialIcons.map((social, index) => (
                  <Box key={index} width={social.width}>
                    {social.icon}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
