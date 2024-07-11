import React from 'react';
import { Box } from '@mui/material';
import { Medium_text3, Cardtext } from './typography'; // Make sure to import your custom text components correctly

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <Box display={'flex'} mt={3}>
            <Box height={55} width={55} sx={{ background: '#f3f3ff', borderRadius: 3, m: 1.3 }}>
                {icon}
            </Box>
            <Box>
                <Medium_text3 lineHeight={1.7}>{title}</Medium_text3>
                <Cardtext>{description}</Cardtext>
            </Box>
        </Box>
    );
};

export default FeatureCard;
