"use client"
import {
  Typography
} from "@mui/material";

import { styled } from "@mui/material";
import '@fontsource/kumbh-sans'; 
import '@fontsource/poppins';

export const Medium_text = styled(Typography)(({ }) => ({
  color: 'black',
  fontSize: "26px",
  textAlign: 'center',
  fontWeight: 600,
  fontFamily: "Kumbh Sans",
  "@media (max-width: 767px)": {
    fontSize: "24px",
  },
}));
export const Medium_text2 = styled(Typography)(({ }) => ({
  color: 'black',
  fontSize: "35px",
  fontWeight: 600,
  fontFamily: "Kumbh Sans",
  "@media (max-width: 767px)": {
    fontSize: "30px",
  },
}));
export const Medium_text3 = styled(Typography)(({ }) => ({
  color: 'black',
  fontSize: "20px",
  fontWeight: 600,
  fontFamily: "Kumbh Sans",
  "@media (max-width: 767px)": {
    fontSize: "20px",
  },
}));

export const Cardtext = styled(Typography)(({ }) => ({
  color: '#474747',
  fontSize: "13px",
  fontWeight: 500,
  fontFamily: "Poppins",
}));
export const Cardtext2 = styled(Typography)(({ }) => ({
  color: 'black',
  fontSize: "12px",
  fontWeight: 600,
}));
