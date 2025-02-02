import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Cardtext, Medium_text } from './typography';
import style from "./body/body.module.css"
interface GoldPlanCardProps {
    title: string;
    price: string;
    planType: string;
    description: string;
    features: string[];
}
const item = ['Access to all basic features']
const GoldPlanCard: React.FC<GoldPlanCardProps> = ({ title, price, planType, description, features }) => {
    const right = (
        <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" style={{ background: '#f3f3ff', borderRadius: 50, marginRight: 10, height: 13, width: 13, marginLeft: 5, padding: 6 }} viewBox="0 0 12 11" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.7464 0.274437L3.58641 7.18444L1.68641 5.15444C1.33641 4.82444 0.786406 4.80444 0.386406 5.08444C-0.00359413 5.37444 -0.113594 5.88444 0.126406 6.29444L2.37641 9.95444C2.59641 10.2944 2.97641 10.5044 3.40641 10.5044C3.81641 10.5044 4.20641 10.2944 4.42641 9.95444C4.78641 9.48444 11.6564 1.29444 11.6564 1.29444C12.5564 0.374437 11.4664 -0.435563 10.7464 0.264437V0.274437Z" fill="url(#paint0_linear_6_4489)" />
            <defs>
                <linearGradient id="paint0_linear_6_4489" x1="5.99832" y1="0" x2="5.99832" y2="10.5044" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8A5EF7" />
                    <stop offset="1" stopColor="#492DAC" />
                </linearGradient>
            </defs>
        </svg>
    );
    return (
        <Grid item lg={12}  >
            <Box display={'flex'} gap={2} flexDirection={'column'} sx={{ background: 'white', boxShadow: '0px 0px 50px -1px #e4e1e1', borderRadius: 4, padding: 3 }}>
                <Typography textAlign={'center'} className={style.gradient} fontSize={20} fontWeight={600} fontFamily={"'Kumbh Sans','sans-serif'"}>{title}</Typography>
                <Medium_text lineHeight={1}>{price}</Medium_text>
                <Typography lineHeight={1} textAlign={'center'} color={'#474747'} fontWeight={600} fontSize={22} fontFamily={"'Kumbh Sans','sans-serif'"}>
                    {planType}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-around', flexWrap: 'wrap' }}>
                        <Cardtext textAlign={'center'} style={{ fontWeight: 400, width: '80%' }}>{description}</Cardtext>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={3}>
                        {item.map((item) => (
                            Array.from({ length: 5 }).map((_, index) => (
                                <Box display={'flex'}>
                                    <Box key={`${item}-${index}`} sx={{ color: '#474747', fontWeight: 400, textAlign: 'left' }}>
                                        {right}
                                    </Box>
                                    <Cardtext key={`${item}-${index}`} sx={{ whiteSpace: 'nowrap', color: '#474747', fontWeight: 400, textAlign: 'left' }}>
                                        {item}
                                    </Cardtext>
                                </Box>
                            ))
                        ))}
                    </Box>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={6}>
                    <Box></Box>
                    <Box display={'flex'} justifyContent={'center'}>
                        <button className='button' style={{ width: '100%', fontWeight: 800, fontFamily: "'Kumbh Sans','sans-serif'", fontSize: 14 }}>GET STARTED</button>
                    </Box>
                    <Box></Box>
                </Box>
            </Box>
        </Grid>
    );
}

export default GoldPlanCard;
