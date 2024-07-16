import React from 'react'
import { Cardtext, Medium_text } from '../typography'
import { Box, Grid } from '@mui/material';
import style from './body.module.css'

const Comsix = () => {

    return (
        <>
            <Box className="container">
                <Box className={style.sixtext} display={'flex'} flexDirection={'column'} gap={3}>
                    <Box></Box>
                    <Medium_text width={'67%'}>
                        Join the largest Community of
                        Vendors and Shoppers
                    </Medium_text>
                    <Cardtext width={'60%'} textAlign={'center'} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Cardtext>
                </Box >
                <Grid container>
                    <Grid item lg={6} md={6} xs={12}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, }}>
                            <Box display={'flex'} flexDirection={'column'} gap={3} className={style.alignsix}>
                                <Box></Box>
                                <Medium_text sx={{ textAlign: 'left' }}>Shopper benefits</Medium_text>
                                <Cardtext>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Cardtext>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, paddingLeft: 5 }}>
                                <Cardtext>Convenient shopping</Cardtext>
                                <Cardtext>Cometitive pricing for youing</Cardtext>
                                <Cardtext>Access to local Products + Servicing</Cardtext>
                                <Cardtext>Unique offers + Deals</Cardtext>
                                <Cardtext>Up to Date Vendor Info</Cardtext>
                            </Box>
                            <Box className={style.sixbutton}>
                                <button className='button'> READ MORE</button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className={style.bgimg2} item lg={6} md={6} xs={12} >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 ,justifyContent:'flex-end'}}>
                            <Box></Box>
                            <Box sx={{ background: 'white', width: '70%', boxShadow: '1px 1px 3px 0px gainsboro', borderRadius: 3 }} >
                                <Cardtext>
                                    Lorem ipsum  sit amet, adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.
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