import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

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
            <Box display={'flex'} p={'11px 16px'}>
                <Box display={"flex"} alignItems={"center"}>
                    {icon}
                </Box>
                <Box color={'#1E231C'}>
                    <Typography fontSize={14} fontFamily={"'Kumbh Sans', 'sans-serif'"} fontWeight={400} lineHeight={0.7}>
                        {preText}
                    </Typography>
                    <Typography fontSize={22} fontWeight={600} whiteSpace={'nowrap'} fontFamily="'Montserrat', sans-serif">
                        {mainText}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default GooglePlayBadge;
