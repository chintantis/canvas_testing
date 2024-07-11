import React from 'react'
import { Cardtext, Medium_text } from '../typography'
import { Box, Grid } from '@mui/material';
import style from './body.module.css'

const Comsix = () => {

    return (
        <>
            <Box className="container">
                <Box>
                    <Medium_text width={'67%'} paddingLeft={28}>
                        Join the largest Community of
                        Vendors and Shoppers
                    </Medium_text>
                    <Cardtext width={'60%'} textAlign={'center'} paddingLeft={33}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Cardtext>
                </Box>
                <Grid container>
                    <Grid item lg={6} md={6} xs={6}>
                        <Box pt={17}>
                            <Medium_text style={{ textAlign: 'left' }}>Shopper benefits</Medium_text>
                            <Cardtext>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Cardtext>
                        </Box>
                        <Box pt={3}>
                            <Cardtext padding={'8px 30px'}>Convenient shopping</Cardtext>
                            <Cardtext padding={'8px 30px'}>Cometitive pricing for youing</Cardtext>
                            <Cardtext padding={'8px 30px'}>Access to local Products + Servicing</Cardtext>
                            <Cardtext padding={'8px 30px'}>Unique offers + Deals</Cardtext>
                            <Cardtext padding={'8px 30px'}>Up to Date Vendor Info</Cardtext>
                        </Box>
                        <Box pt={5}>
                            <button className='button' style={{ fontWeight: 800 }}> READ MORE</button>
                        </Box>
                    </Grid>
                    <Grid className={style.bgimg2} item lg={6} md={6} xs={6}>
                        <Box sx={{ background: 'white', width: '75%', boxShadow: '1px 1px 3px 0px gainsboro', marginTop: '95%', borderRadius: 3 }}>
                            <Cardtext padding={3}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Cardtext>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Comsix;