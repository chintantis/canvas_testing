import { Box, FormControlLabel, Grid, styled, Switch, SwitchProps, Typography } from '@mui/material';
import React from 'react';
import style from "./body.module.css"
import { Cardtext, Medium_text } from '../typography';

const ComFour = () => {
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
                    backgroundColor: theme.palette.mode === 'dark' ? '#8A5EF7' : '#492DAC',
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
            <Box className={style.bgimg}>
                <Box className='container'>
                    <Box pt={9}>
                        <Medium_text>
                            Plans for all sizes
                        </Medium_text>
                        <Cardtext textAlign={'center'}>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</Cardtext>
                        <Box display={'flex'} justifyContent={'center'}>
                            <FormControlLabel style={{ marginTop: 6 }}
                                control={<IOSSwitch defaultChecked />}
                                label=""
                            />
                            <Typography color={'#492DAC'} paddingTop={1} fontSize={13}>Annual pricing (save 20%)</Typography>

                        </Box>
                    </Box>
                    {/* <Grid container>
                        <Grid item lg={6}>
                            <Box height={240} width={200} sx={{ background: 'white', boxShadow: '0px 0px 3px -1px black', borderRadius: 2 }}>
                                <Typography textAlign={'center'}>Vendors</Typography>
                                <Medium_text>$0/Month</Medium_text>
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <Box>
                                <Typography>Shoppers</Typography>
                                <Medium_text>$70/Month</Medium_text>
                            </Box>
                        </Grid>
                    </Grid> */}
                </Box>
            </Box>
        </>
    )
}


export default ComFour;