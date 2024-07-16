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

  const facebook = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 24" fill="none">
      <path d="M11.2137 13.3278L11.8356 9.23262H7.94521V6.57631C7.94521 5.45568 8.48767 4.36272 10.2301 4.36272H12V0.876308C12 0.876308 10.3945 0.599609 8.86027 0.599609C5.6548 0.599609 3.56164 2.56141 3.56164 6.11145V9.23262H0V13.3278H3.56164V23.2281C4.27671 23.3415 5.00822 23.3996 5.75342 23.3996C6.49863 23.3996 7.23014 23.3415 7.94521 23.2281V13.3278H11.2137Z" fill="black" />
    </svg>
  )

  const socialIcons = [
    { icon: facebook },
    { icon: <InstagramIcon /> },
    { icon: <TwitterIcon /> },
    { icon: <YouTubeIcon /> },
  ];

  return (
    <>
      <Box display="flex" flexDirection="column" gap={10}>
        <Box></Box>
        <Box className='container'>
          <Grid container>
            <Grid item lg={5} md={4} xs={12} display={"flex"} flexDirection={"column"} justifyContent={"space-around"}>
              <Box display="flex" flexDirection="column" gap={7}>
                <Box></Box>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Box></Box>
                  <Box>
                    <Typography fontSize={8} sx={{ fontFamily: 'Poppins', paddingLeft: 14 }}>
                      BRAND MARKETING TEAM
                    </Typography>
                  </Box>
                  <Box>
                    <Cardtext style={{ fontWeight: 400, maxWidth: '80%' }}>
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
                <Box></Box>
              </Box>
            </Grid>
            <Grid item lg={7} md={8} xs={12} className={style.loop}>
              <Box display="flex" flexWrap="wrap" gap={9}>
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
          <Box display={"flex"} flexDirection={"column"} gap={5}>
            <Box sx={{ border: '0.75px solid #ebebeb' }}></Box>
            <Grid container>
              <Grid item lg={5} md={5} xs={12} sx={{ display: 'flex', gap: '21px' }} className={style.footerend}>
                {footerLinks.map((link, index) => (
                  <Link key={index} href={'#'} style={{ fontSize: 14, lineHeight: 3, fontFamily: 'Poppins', display: 'flex', color: 'black', textDecoration: 'none' }}>
                    {link.name}
                  </Link>
                ))}
              </Grid>
              <Grid item lg={7} md={12} xs={12}>
                <Box display="flex" justifyContent="flex-end" gap={2}>
                  {socialIcons.map((social, index) => (
                    <Box key={index} padding={1.2} sx={{ lineHeight:0.7, boxShadow: '1px 1px 4px -1px #403c3c', background: 'white', border: '1px solid transparent', borderRadius: '50%', textAlign: 'center' }}>
                      {social.icon}
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
            <Box></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
