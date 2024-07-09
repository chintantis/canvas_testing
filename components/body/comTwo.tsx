import { Box } from '@mui/material';
import React from 'react'
import { Cardtext, Cardtext2, Medium_text } from '../typography';
import Image from 'next/image';
import style from "./body.module.css"

const ComTwo = () => {

    return (
        <>
            <Box className="container">
                <Box mt={9} >
                    <Medium_text>Join the biggest community<br />
                        of Travellers</Medium_text>
                    <Cardtext textAlign={'center'} >We are privileged to work with hundred future thinking awesome business including many <br />
                        of the world's top hardware.</Cardtext>
                </Box>
                <Image
                    src={'/Content.jpg'}
                    width={1200}
                    height={500}
                    alt='img'
                />
            </Box>
        </>
    )
}

export default ComTwo;
