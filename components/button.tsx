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
            lg={5}
            height={62}
            mr={3}
        >
            <Box display={'flex'} p={'7px 16px'}>
                <Box display={"flex"} alignItems={"center"}>
                    {icon}
                </Box>
                <Box color={'#1E231C'}>
                    <Typography fontSize={10} fontFamily={'Kumbh Sans'} fontWeight={100}>
                        {preText}
                    </Typography>
                    <Typography fontSize={20} fontWeight={600} whiteSpace={'nowrap'} fontFamily="'Montserrat', sans-serif">
                        {mainText}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default GooglePlayBadge;
