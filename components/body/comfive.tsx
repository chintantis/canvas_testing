import { Box } from '@mui/material'
import React from 'react'
import { Cardtext, Medium_text, Medium_text2 } from '../typography'
import DynamicCard from '../boxeight'

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
                    <Box display={'flex'} paddingTop={10}>
                        {item.map((item) => (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Box key={`${item}-${index}`} >
                                    <Box marginLeft={6} height={190} width={190} border={'8px solid #4CA1FF1F'} boxShadow={'1px 0px 6px 1px gainsboro'} borderRadius={10}></Box>
                                    <Medium_text style={{ fontSize: 35, textAlign: 'center' }}>
                                        {title}
                                    </Medium_text>
                                    <Cardtext style={{ textAlign: 'center', padding: '0 15px' }}>
                                        {item}
                                    </Cardtext>
                                </Box>
                            ))
                        ))}
                    </Box>
                    <Box display={'flex'} paddingTop={10}>
                        {item.map((item) => (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Box key={`${item}-${index}`} >
                                    <Box marginLeft={6} height={190} width={190} border={'8px solid #4CA1FF1F'} boxShadow={'1px 0px 6px 1px gainsboro'} borderRadius={10}></Box>
                                    <Medium_text style={{ fontSize: 35, textAlign: 'center' }}>
                                        {title}
                                    </Medium_text>
                                    <Cardtext style={{ textAlign: 'center', padding: '0 15px' }}>
                                        {item}
                                    </Cardtext>
                                </Box>
                            ))
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default Comfive