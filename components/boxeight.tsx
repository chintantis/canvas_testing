import React from 'react';
import { Box } from '@mui/material';
import { Medium_text2, Cardtext } from './typography'; // Make sure to import your custom text components correctly

interface DynamicCardProps {
    marginLeft?: number;
    height?: number;
    width?: number;
    border?: string;
    borderRadius?: number;
    boxShadow?: string;
    title: string;
    description: string;
}

const DynamicCard: React.FC<DynamicCardProps> = ({
    marginLeft = 6,
    height = 190,
    width = 190,
    border = '8px solid #4CA1FF1F',
    borderRadius = 10,
    boxShadow = '1px 0px 6px 1px gainsboro',
    title,
    description,
}) => {
    return (
        <Box>
            <Box
                marginLeft={marginLeft}
                height={height}
                width={width}
                border={border}
                borderRadius={borderRadius}
                boxShadow={boxShadow}
            ></Box>
            <Box>
                <Medium_text2 style={{ fontSize: 30, textAlign: 'center' }}>{title}</Medium_text2>
                <Cardtext width={'40%'} textAlign={'center'}>
                    {description}
                </Cardtext>
            </Box>
        </Box>
    );
};

export default DynamicCard;
