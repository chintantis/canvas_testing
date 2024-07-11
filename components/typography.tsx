"use client"
import {
  Typography
} from "@mui/material";
import { styled } from "@mui/material";
import '@fontsource/kumbh-sans';
import '@fontsource/poppins';

export const Medium_text = styled(Typography)(({ }) => ({
  color: 'black',
  fontSize: "49px",
  textAlign: 'center',
  fontWeight: 600,
  fontFamily: "'Kumbh Sans', 'sans-serif'",
  "@media (max-width: 767px)": {
    fontSize: "45px",
  },
}));
export const Medium_text2 = styled(Typography)(({ }) => ({
  color: 'black',
  fontSize: "50px",
  fontWeight: 600,
 fontFamily: "'Kumbh Sans', 'sans-serif'",
  "@media (max-width: 767px)": {
    fontSize: "30px",
  },
}));
export const Medium_text3 = styled(Typography)(({ }) => ({
  color: 'black',
  fontSize: "26px",
  fontWeight: 600,
  fontFamily: "'Kumbh Sans', 'sans-serif'",
  "@media (max-width: 767px)": {
    fontSize: "20px",
  },
}));

export const Cardtext = styled(Typography)(({ }) => ({
  color: '#474747',
  fontSize: "17px",
  fontWeight: 500,
  fontFamily: "'Poppins', 'sans-serif'"
}));
export const Cardtext2 = styled(Typography)(({ }) => ({
  color: 'black',
  fontSize: "16px",
  fontWeight: 600,
 fontFamily: "'Kumbh Sans', 'sans-serif'"
}));
