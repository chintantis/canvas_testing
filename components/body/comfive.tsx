import { Box } from '@mui/material'
import React from 'react'
import { Cardtext, Medium_text, Medium_text2 } from '../typography'

const Comfive = () => {
    const title = ['DJ']
    const item = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do']
    return (
        <>
            <Box>
                <Box className="container">
                    <Box>
                        <Medium_text>
                            Who can benefit from using Avendy?
                        </Medium_text>
                        <Cardtext width={'67%'} textAlign={'center'} paddingLeft={'16%'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.</Cardtext>
                    </Box>
                    <Box display={'flex'} paddingTop={4}>
                        {item.map((item) => (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Box key={`${item}-${index}`} padding={'0 15px '}>
                                    <Box marginLeft={5} height={170} width={170} border={'8px solid #4CA1FF1F'} boxShadow={'1px 0px 6px 1px gainsboro'} borderRadius={10}></Box>
                                    <Medium_text style={{ fontSize: 30, textAlign: 'center' }}>
                                        {title}
                                    </Medium_text>
                                    <Cardtext style={{ textAlign: 'center', fontSize: 20, fontWeight: 400 }}>
                                        {item}
                                    </Cardtext>
                                </Box>
                            ))
                        ))}
                    </Box>
                    <Box display={'flex'} paddingTop={10}>
                        {item.map((item) => (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Box key={`${item}-${index}`} padding={'0 15px '}>
                                    <Box marginLeft={5} height={170} width={170} border={'8px solid #4CA1FF1F'} boxShadow={'1px 0px 6px 1px gainsboro'} borderRadius={10}></Box>
                                    <Medium_text style={{ fontSize: 30, textAlign: 'center' }}>
                                        {title}
                                    </Medium_text>
                                    <Cardtext style={{ textAlign: 'center', fontSize: 20, fontWeight: 400 }}>
                                        {item}
                                    </Cardtext>
                                </Box>
                            ))
                        ))}
                    </Box>
                    <Box textAlign={'center'} pt={8}>
                        <button className='button'>
                            VIEW MORE
                        </button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default Comfive