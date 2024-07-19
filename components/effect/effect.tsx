import { Box } from '@mui/material';
import React from 'react';
import style from './effect.module.css'
import { Cardtext, Medium_text } from '../typography';

const Effect = () => {

    return (
        <>
            <Box display={'flex'} justifyContent={'space-around'}>
                <Box className={style.img}>
                    <Box className={style.relative}>
                        <Box className={style.absolute}>
                            <Medium_text sx={{ color: 'white', textAlign: 'left' }} className={style.title}>Car Dashboard</Medium_text>
                            <Cardtext className={style.description} sx={{color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Cardtext>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Effect;