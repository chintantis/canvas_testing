import React from 'react'
import { Cardtext, Medium_text } from '../typography'
import { Box, Grid } from '@mui/material';
import style from './body.module.css'

const Comsix = () => {
    return (
        <>
            <Box className="container">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 9 }} className={style.sixGap}>
                    <Box></Box>
                    <Box className={style.sixtext} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <Medium_text width={'67%'}>
                            Join the largest Community of
                            Vendors and Shoppers
                        </Medium_text>
                        <Cardtext width={'60%'} textAlign={'center'} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </Cardtext>
                    </Box>
                    <Box></Box>
                </Box>
                <Grid container>
                    <Grid item lg={8} md={6} sm={12} xs={12}>
                        <Medium_text sx={{ textAlign: 'left' }}>Shopper benefits</Medium_text>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <Cardtext className={style.alignsix} width={'71%'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Cardtext>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, paddingLeft: 5 }}>
                                <Cardtext>Convenient shopping</Cardtext>
                                <Cardtext>Cometitive pricing for youing</Cardtext>
                                <Cardtext>Access to local Products + Servicing</Cardtext>
                                <Cardtext>Unique offers + Deals</Cardtext>
                                <Cardtext>Up to Date Vendor Info</Cardtext>
                            </Box>
                                <Box className={style.sixbutton} pb={6}>
                                    <button className='button'> READ MORE</button>
                                </Box>
                        </Box>
                    </Grid>
                    <Grid className={style.bgimg2} item lg={4} md={6} sm={12} xs={12}>
                        <Box className={style.sixRelative}>
                            <Box className={style.sixBox} sx={{ background: 'white', width: '93%', padding: 3, boxShadow: '1px 1px 75px 0px gainsboro', borderRadius: 3 }} >
                                <Cardtext sx={{ color: 'black', fontWeight: 500,fontSize:16 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Cardtext>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Comsix;