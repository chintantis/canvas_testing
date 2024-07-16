import { Style } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import React from 'react'
import style from './body.module.css'
import { Cardtext, Medium_text } from '../typography';
import GooglePlayBadge from '../button';
import AppleIcon from '@mui/icons-material/Apple';

const Comeight = () => {
    const icon = (
        <svg fill="none" height="28" viewBox="0 0 15 15" width="37" xmlns="http://www.w3.org/2000/svg"><path d="M1.25097 0.0664289C1.40622 -0.0227402 1.59729 -0.0220988 1.75194 0.0681106L9.59402 4.64266L7.16668 6.82726L1 1.27725V0.5C1 0.320967 1.09572 0.155598 1.25097 0.0664289Z" fill="#1E231C" /><path d="M1 2.62262V12.3773L6.41925 7.49994L1 2.62262Z" fill="#1E231C" /><path d="M1 13.7226V14.5C1 14.679 1.09572 14.8444 1.25097 14.9336C1.40622 15.0227 1.59729 15.0221 1.75194 14.9319L9.59409 10.3573L7.16668 8.17262L1 13.7226Z" fill="#1E231C" /><path d="M10.5011 9.82822L13.7519 7.93189C13.9055 7.84228 14 7.67783 14 7.5C14 7.32217 13.9055 7.15772 13.7519 7.06811L10.501 5.17173L7.9141 7.49994L10.5011 9.82822Z" fill="#1E231C" />
        </svg>
    );
    return (
        <>
            <Box>
                <Grid container>
                    <Grid item lg={9} md={9} xs={12} sx={{ backgroundColor: '#4ca1ff' }}>
                        <Box className={style.bgimgg}>
                            <Box className={style.containerEight} display={'flex'} flexDirection={'column'} gap={8}>
                                <Box></Box>
                                <Box className={style.Eighttext}>
                                    <Medium_text sx={{ fontSize: 35, width: '35%', textAlign: 'left', color: 'white' }}>Download the Avendy
                                        app Today!</Medium_text>
                                    <Cardtext width={'44%'} style={{ fontSize: 15, color: 'white' }}>You can download the Avendy app on the Google play store on
                                        Apple store.</Cardtext>
                                </Box>
                                <Box>
                                    <Grid container gap={3}>
                                        <Grid item lg={2.5} md={12} xs={12} className={style.eightbuttons}>
                                            <GooglePlayBadge
                                                icon={icon}
                                                preText="Available on the"
                                                mainText="Google Play"
                                            />
                                        </Grid>
                                        <Grid item lg={2.5} md={12} xs={12} className={style.eightbuttons}>
                                            <GooglePlayBadge
                                                icon={<AppleIcon style={{ fontSize: 35, paddingRight: '8px' }} />}
                                                preText="Download on the"
                                                mainText="App Storee"
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box></Box>
                            </Box>
                        </Box>
                    </Grid >
                    <Grid item lg={3} md={3} xs={3} className={style.background}></Grid >
                </Grid >
            </Box >
        </>
    )

}

export default Comeight;