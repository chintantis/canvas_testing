import { Box } from '@mui/material';
import React from 'react'
import { Cardtext, Cardtext2, Medium_text } from '../typography';
import Image from 'next/image';
import style from "./body.module.css"

const ComTwo = () => {

    return (
        <>
            <Box className="container" display={'flex'} flexDirection={'column'} gap={9}>
                <Box display={'flex'} flexDirection={'column'} gap={10}>
                    <Box></Box>
                    <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={3}>
                        <Medium_text lineHeight={'1.1'} width={'58%'} className={style.title}>Join the biggest community
                            of Travellers</Medium_text>
                        <Box justifyContent={'space-around'} display={'flex'}>
                            <Cardtext textAlign={'center'} width={'67%'} className={style.para}>We are privileged to work with hundred future thinking awesome business including many
                                of the world's top hardware.</Cardtext>
                        </Box>
                    </Box>
                </Box>
                <Box className={style.bgContent} display={'flex'} justifyContent={'center'}>
                    {/* <Image
                    src={'/Content.jpg'}
                    width={1200}
                    height={500}
                    alt='img'
                /> */}
                </Box>

            </Box >
        </>
    )
}

export default ComTwo;
