"use client";
import {
    Button,
    Grid,
    Paper,
    Toolbar,
    Typography,
    styled,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import SidebarStyle from "./sidebar.module.css";
import { useRouter, usePathname } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import style from './header.module.css';
import { Cardtext, Medium_text, Medium_text2 } from "../typography";
import GooglePlayBadge from "../button";
import AppleIcon from '@mui/icons-material/Apple';

interface SideBarProps {
    onClosedrawer: () => void;
}
const SideBar: React.FC<SideBarProps> = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const navItems = ['Home', 'About', 'investors', 'Contact'];
    const headphone = (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style={{ margin: -14, padding: '0 4px' }} viewBox="0 0 36 32" fill="none">
            <path xmlns="http://www.w3.org/2000/svg" d="M8 0.9C4.67716 0.9 1.97891 3.55308 1.90306 6.85754C1.30968 7.16633 0.9 7.78799 0.9 8.5V10.5C0.9 11.5161 1.73392 12.35 2.75 12.35C3.76608 12.35 4.6 11.5161 4.6 10.5V8.5C4.6 7.60677 3.95596 6.85545 3.11043 6.68628C3.27011 4.11152 5.38202 2.1 8 2.1C10.618 2.1 12.7299 4.11152 12.8896 6.68628C12.044 6.85545 11.4 7.60677 11.4 8.5V10.5C11.4 11.5161 12.2339 12.35 13.25 12.35C13.2859 12.35 13.3215 12.3489 13.3568 12.3468C13.2044 12.9552 12.6592 13.4 12 13.4H10.5534C10.3971 12.828 9.86874 12.4 9.25 12.4H7.75C7.01092 12.4 6.4 13.0109 6.4 13.75C6.4 14.4891 7.01092 15.1 7.75 15.1H9.25C9.66908 15.1 10.0464 14.9034 10.2946 14.6H12C13.43 14.6 14.6 13.43 14.6 12V11.7598C14.909 11.429 15.1 10.9855 15.1 10.5V8.5C15.1 7.78799 14.6903 7.16633 14.0969 6.85753C14.0211 3.55308 11.3228 0.9 8 0.9Z" fill="white" stroke="white" stroke-width="0.2" />
        </svg>
    )
    const icon = (
        <svg fill="none" height="28" viewBox="0 0 15 15" width="37" xmlns="http://www.w3.org/2000/svg"><path d="M1.25097 0.0664289C1.40622 -0.0227402 1.59729 -0.0220988 1.75194 0.0681106L9.59402 4.64266L7.16668 6.82726L1 1.27725V0.5C1 0.320967 1.09572 0.155598 1.25097 0.0664289Z" fill="#1E231C" /><path d="M1 2.62262V12.3773L6.41925 7.49994L1 2.62262Z" fill="#1E231C" /><path d="M1 13.7226V14.5C1 14.679 1.09572 14.8444 1.25097 14.9336C1.40622 15.0227 1.59729 15.0221 1.75194 14.9319L9.59409 10.3573L7.16668 8.17262L1 13.7226Z" fill="#1E231C" /><path d="M10.5011 9.82822L13.7519 7.93189C13.9055 7.84228 14 7.67783 14 7.5C14 7.32217 13.9055 7.15772 13.7519 7.06811L10.501 5.17173L7.9141 7.49994L10.5011 9.82822Z" fill="#1E231C" />
        </svg>
    );
    const DrawerList = (
        <Box sx={{ width: 250, padding: "20px 10px", display: "flex", gap: "20px", flexDirection: "column" }} role="presentation" onClick={toggleDrawer(false)}>
            <Divider />
            <Box className={SidebarStyle.Route_btn_view}>
                {Route_btn_Arr.map((item) => {
                    return (
                        <Button
                            key={item.id}
                            id={SidebarStyle.Route_btn_}
                            sx={
                                pathname === item.route
                                    ? {
                                        background: "#ecf5ef !important",
                                        justifyContent: "left !important",
                                        padding: "10px",
                                    }
                                    : {
                                        background: "none !important",
                                        justifyContent: "left !important",
                                        padding: "10px",
                                    }
                            }
                            className={
                                pathname === item.route
                                    ? SidebarStyle.Route_btn_active
                                    : SidebarStyle.Route_btn_
                            }
                            onClick={() => {
                                router.push(item.route);
                            }}
                        >
                            {item.name}
                        </Button>
                    );
                })}
            </Box>
        </Box>
    );
    return (
        <>
            <Box className={style.bgimg}>
                <Box className="container">
                    <Box display={'flex'} flexDirection={'column'} gap={3}>
                        <Box></Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography
                                fontSize={6}
                                sx={{ flexGrow: 1, pl: 7, color: '#000000', lineHeight: 9.5 }}
                                fontFamily={"'Poppins', 'sans-serif'"}
                            >
                                BRAND MARKETING TEAM
                            </Typography>
                            <Toolbar style={{ paddingRight: 0 }} className={style.hidemenu}>
                                <Box display={'flex'} gap={4}>
                                    {navItems.map((item) => (
                                        <Button key={item} sx={{ color: 'black', fontSize: 13, fontFamily: "'Poppins', 'sans-serif'" }}>
                                            {item}
                                        </Button>
                                    ))}
                                    <button
                                        style={{ fontSize: 11, fontWeight: 800, fontFamily: "'Kumbh Sans', 'sans-serif'" }}
                                        className={style.button}> {headphone}CONTACT US</button>
                                </Box>
                            </Toolbar>
                            <div>
                                <Button onClick={toggleDrawer(true)} className={style.hide} sx={{ background: "none !important", color: "var(--green) !important" }}><MenuIcon /></Button>
                                <Drawer open={open} onClose={toggleDrawer(false)}>
                                    {DrawerList}
                                </Drawer>
                            </div>
                        </Box>
                        <Grid container>
                            <Grid item lg={5} md={6} sm={12} xs={12}>
                                <Box className={style.app}>
                                    <Medium_text className={style.gap} fontSize={56} fontWeight={700} lineHeight={1.2}>
                                        BRIDGING
                                        THE GAP
                                    </Medium_text>
                                </Box>
                                <Cardtext fontSize={20} className={style.para} color={'#474747'} lineHeight={2} fontFamily={"'Poppins', 'sans-serif'"} >Empowering  connection between Clients and Vendors</Cardtext>
                                <Box display={'flex'} flexDirection={'column'} gap={6} sx={{ pt: 5 }}>
                                    <Box className={style.mdside} display={'flex'} sx={{ flexDirection: 'row' }} gap={4}>
                                        <GooglePlayBadge
                                            icon={icon}
                                            preText="Available on the"
                                            mainText="Google Play"
                                        />
                                        <GooglePlayBadge
                                            icon={<AppleIcon style={{ fontSize: 38, paddingRight: '8px' }} />}
                                            preText="Download on the"
                                            mainText="App Store"
                                        />
                                    </Box>
                                    <Grid container gap={6} className={style.Three} sx={{ pb: 9 }}>
                                        <Grid item lg={3} md={4} xs={12}>
                                            <Medium_text2>16K+</Medium_text2>
                                            <Cardtext sx={{ fontSize: 18, whiteSpace: 'nowrap', fontWeight: 600 }} >Active users</Cardtext>
                                        </Grid>
                                        <Grid item lg={3} md={4} xs={12}>
                                            <Medium_text2>08K+</Medium_text2>
                                            <Cardtext sx={{ fontSize: 18, whiteSpace: 'nowrap', fontWeight: 600 }}>Property sales</Cardtext>
                                        </Grid>
                                        <Grid item lg={2} md={4} xs={12}>
                                            <Medium_text2>12K+</Medium_text2>
                                            <Cardtext sx={{ fontSize: 18, fontWeight: 600 }}>Reviews</Cardtext>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} xs={6}></Grid>
                        </Grid>
                    </Box>
                </Box >
            </Box>
        </>
    );
};
export default SideBar;
const Route_btn_Arr = [
    {
        name: "HOME",
        id: 1,
        route: "/home",
    },
    {
        name: "ABOUT",
        id: 2,
        route: "/about",
    },
    {
        name: "INVESTORS",
        id: 3,
        route: "/investors",
    },
    {
        name: "CONTACT",
        id: 4,
        route: "/contact",
    },
];