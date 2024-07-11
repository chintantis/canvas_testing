import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Cardtext, Medium_text3 } from './typography';

// Define the props interface
interface GooglePlayBadgeProps {
    icon: React.ReactNode;
    preText: string;
    mainText: string;
}
const GooglePlayBadge: React.FC<GooglePlayBadgeProps> = ({ icon, preText, mainText }) => {
    return (
        <Grid
            border={'2px solid #30475E'}
            sx={{ background: 'white' }}
            borderRadius={3}
            item
            lg={4.7}
            md={4}
            xs={4}
            width={100}
            height={65}
            mr={3}
        >
            <Box display={'flex'} p={'10px 16px'}>
                <Box display={"flex"} alignItems={"center"}>
                    {icon}
                </Box>
                <Box color={'#1E231C'}>
                    <Cardtext style={{ fontSize: 15, fontWeight: 300 }} fontFamily={"'Kumbh Sans', 'sans-serif'"} whiteSpace={'nowrap'} fontWeight={400} lineHeight={0.7}>
                        {preText}
                    </Cardtext>
                    <Medium_text3 style={{ fontSize: 22, fontFamily: "'Montserrat', sans-serif" }} whiteSpace={'nowrap'}>
                        {mainText}
                    </Medium_text3>
                </Box>
            </Box>
        </Grid>
    );
};

export default GooglePlayBadge;
