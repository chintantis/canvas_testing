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
                    <Grid item lg={6} textAlign={'left'} md={6} sm={12} xs={12} mt={13}>
                            <Box>
                                <Medium_text sx={{ textAlign: 'left', fontSize: 51, width: '100%', lineHeight: 1.2 }} >Vendor Benefits</Medium_text>
                                <Cardtext sx={{ width: '95%' }} className={style.alignsix}>Monotonectally implement integrated commerce & distributed is conveniently unleash b2b
                                    customer service via long. </Cardtext>
                            </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <Box pt={3} sx={{ display: 'flex', flexDirection: 'column', gap: 3, paddingLeft: 5 }}>
                                <Cardtext>Increased Visibility</Cardtext>
                                <Cardtext>Expanded Customer Base</Cardtext>
                                <Cardtext>Cost Effective Marketing </Cardtext>
                                <Cardtext>Vendor reward and Incentives</Cardtext>
                                <Cardtext>Bid on Gigs</Cardtext>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 9 }} className={style.sevenGap}>
                                <Box className={style.sixbutton}>
                                    <button className='button' style={{ textAlign: 'center' }}>
                                        READ MORE
                                    </button>
                                </Box>
                                <Box></Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Comseven;