"use client"
import {
    Typography
  } from "@mui/material";
  
  import { styled } from "@mui/material";
  
  export const Medium_text = styled(Typography)(({ }) => ({
    color: 'black',
    fontSize:"26px",
    textAlign:'center',
    "@media (max-width: 767px)": {
      fontSize: "24px",

    },
  }));
  export const Medium_text2 = styled(Typography)(({ }) => ({
    color: 'black',
    fontSize:"20px",
    textAlign:'center',
    "@media (max-width: 767px)": {
      fontSize: "24px",
    },
  }));
  
  export const Cardtext = styled(Typography)(({ }) => ({
    color: 'grey',
    fontSize:"13px",
  }));
  export const Cardtext2 = styled(Typography)(({ }) => ({
    color: 'black',
    fontSize:"13px",
    fontWeight:900
  }));
