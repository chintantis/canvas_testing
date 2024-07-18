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
        <Box
            border={'2px solid #30475E'}
            sx={{ background: 'white' }}
            borderRadius={3}
            height={55}
            width={180}
        >
            <Box display={'flex'} p={'10px 11px'}>
                <Box display={"flex"} alignItems={"center"}>
                    {icon}
                </Box>
                <Box color={'#1E231C'}>
                    <Cardtext style={{ fontSize: 12, fontWeight: 300 }} fontFamily={"'Kumbh Sans', 'sans-serif'"} whiteSpace={'nowrap'} fontWeight={400} lineHeight={0.7}>
                        {preText}
                    </Cardtext>
                    <Medium_text3 style={{ fontSize: 19, fontFamily: "'Montserrat', sans-serif" }} whiteSpace={'nowrap'}>
                        {mainText}
                    </Medium_text3>
                </Box>
            </Box>
        </Box>
    );
};

export default GooglePlayBadge;
