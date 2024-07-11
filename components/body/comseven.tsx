import { Box, Grid } from '@mui/material';
import React from 'react'
import { Cardtext, Medium_text } from '../typography';
import style from './body.module.css'

const Comseven = () => {

    return (
        <>

            <Box className="container">
                <Grid container mt={6} mb={9}>
                    <Grid item lg={6} md={6} xs={6} >

                    </Grid>
                    <Grid item lg={6} textAlign={'left'} md={6} xs={6}>
                        <Box>
                            <Medium_text sx={{ textAlign: 'left', fontSize: 51, width: '110%', lineHeight: 1.2 }} >Vendor Benefits</Medium_text>
                            <Cardtext sx={{ width: '95%' }}>Monotonectally implement integrated commerce & distributed is conveniently unleash b2b
                                customer service via long. </Cardtext>
                        </Box>
                        <Box pt={3}>
                            <Cardtext padding={'8px 34px'}>Increased Visibility</Cardtext>
                            <Cardtext padding={'8px 34px'}>Expanded Customer Base</Cardtext>
                            <Cardtext padding={'8px 34px'}>Cost Effective Marketing </Cardtext>
                            <Cardtext padding={'8px 34px'}>Vendor reward and Incentives</Cardtext>
                            <Cardtext padding={'8px 34px'}>Bid on Gigs</Cardtext>
                        </Box>
                        <Box pt={5}>
                            <button className='button' style={{ textAlign: 'center' }}>
                                READ MORE
                            </button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Comseven;