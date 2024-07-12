import { Box, Button, FormControlLabel, Grid, styled, Switch, SwitchProps, Typography } from '@mui/material';
import React from 'react';
import style from "./body.module.css"
import { Cardtext, Medium_text } from '../typography';
import VendorCard from '../box';
import GoldPlanCard from '../box';

const ComFour = () => {
    const item = ['Access to all basic features']
    const right = (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9" style={{ background: '#f3f3ff', borderRadius: 50, height: 15, width: 15, marginLeft: 5, padding: 6 }} viewBox="0 0 12 11" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7464 0.274437L3.58641 7.18444L1.68641 5.15444C1.33641 4.82444 0.786406 4.80444 0.386406 5.08444C-0.00359413 5.37444 -0.113594 5.88444 0.126406 6.29444L2.37641 9.95444C2.59641 10.2944 2.97641 10.5044 3.40641 10.5044C3.81641 10.5044 4.20641 10.2944 4.42641 9.95444C4.78641 9.48444 11.6564 1.29444 11.6564 1.29444C12.5564 0.374437 11.4664 -0.435563 10.7464 0.264437V0.274437Z" fill="url(#paint0_linear_6_4489)" />
            <defs>
                <linearGradient id="paint0_linear_6_4489" x1="5.99832" y1="0" x2="5.99832" y2="10.5044" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8A5EF7" />
                    <stop offset="1" stop-color="#492DAC" />
                </linearGradient>
            </defs>
        </svg>
    )
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 34,
        height: 18,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    background: theme.palette.mode === 'dark' ? '#8A5EF7' : 'linear-gradient(#8A5EF7,#492DAC)',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 15,
            height: 14,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));
    return (
        <>
            <Box className={style.bgimg} pb={9}>
                <Box className='container'>
                    <Box pt={7}>
                        <Medium_text>
                            Plans for all sizes
                        </Medium_text>
                        <Cardtext textAlign={'center'}>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</Cardtext>
                        <Box display={'flex'} justifyContent={'center'} mt={1.5}>
                            <FormControlLabel style={{ marginTop: 6 }}
                                control={<IOSSwitch defaultChecked />}
                                label=""
                            />
                            <Typography paddingTop={1} className={style.gradient} fontSize={19} fontWeight={600} fontFamily={'Kumbh Sans'}>Annual pricing (save 20%)</Typography>
                        </Box>
                    </Box>
                    <Grid mt={10} display={'flex'} justifyContent={'space-evenly'}>
                        <Grid item lg={6} md={12} maxWidth={'37%'} className={style.hoverBorder}>
                            <GoldPlanCard
                                title="VENDORS"
                                price="$0/Month"
                                planType="Free plan"
                                description="All the basics you need to start Listing your business"
                                features={item}
                            />
                        </Grid>
                        <Grid item lg={6} md={0} maxWidth={'37%'} className={style.hoverBorder}>
                            <GoldPlanCard
                                title="SHOPPERS"
                                price="$70/Month"
                                planType="Gold plan"
                                description="All Exclusive perks and extra benefits for Gold vendors"
                                features={item}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}


export default ComFour;