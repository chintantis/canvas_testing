import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Cardtext, Medium_text } from '../typography';
import style from './body.module.css'

const Comfive = () => {
    const data = [
        { title: 'DJ', item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' },
        { title: 'Musician', item: 'Sed ut perspiciatis unde omnis iste natus error sit ' },
        { title: 'Artist', item: 'At vero eos et accusamus et iusto odio dignissimos' },
        { title: 'Performer', item: 'On the other hand, we denounce with righteous indignation' },
        { title: 'Producer', item: 'Quis autem vel eum iure reprehenderit qui in ea voluptate' },
        { title: 'Composer', item: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam' },
        { title: 'Singer', item: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur' },
        { title: 'Band', item: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit' }
    ];

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    const getBoxDimensions = () => {
        if (isSmallScreen) {
            return { width: '100%', height: '150px' };
        } else if (isMediumScreen) {
            return { width: 'calc(50% - 0px)', height: '200px' };
        } else if (isLargeScreen) {
            return { width: 'calc(16% - 0px)', height: '250px' };
        } else {
            return { width: 'calc(16% - 0px)', height: '250px' };
        }
    };

    const boxDimensions = getBoxDimensions();

    return (
        <Box>
            <Box className="container" display={'flex'} flexDirection={'column'} gap={10}>
                <Box>
                    <Medium_text>Who can benefit from using Avendy?</Medium_text>
                    <Cardtext width={'100%'} sx={{ fontSize: 20 }} textAlign={'center'} display={'flex'} justifyContent={'space-around'}>
                        Lorem iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Cardtext>
                </Box>
                <Box display={'flex'} gap={18.8} flexWrap={'wrap'} className={style.gapFive}>
                    {data.map((entry, index) => (
                        <Box key={index} width={boxDimensions.width} height={boxDimensions.height}>
                            <Box height={'75%'} className={style.heightFive} border={'8px solid #4CA1FF1F'} boxShadow={'0px 0px 8px -1px gainsboro'} borderRadius={10}>
                                <Box height={'100%'} boxShadow={'1px 0px 15px -1px gainsboro inset'} borderRadius={8}>
                                </Box>
                            </Box>
                            <Box gap={1.5} display={'flex'} flexDirection={'column'}>
                                <Box></Box>
                                <Box>
                                    <Medium_text style={{ fontSize: 30, textAlign: 'center' }}>
                                        {entry.title}
                                    </Medium_text>
                                    <Cardtext style={{ textAlign: 'center', fontSize: 18, fontWeight: 400 }}>
                                        {entry.item}
                                    </Cardtext>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box>
                    <Box gap={7} className={style.fiveGapB} display={'flex'} flexDirection={'column'} alignContent={'space-around'} flexWrap={'wrap'}>
                        <Box></Box>
                        <button className='button'>VIEW MORE</button>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default Comfive;
