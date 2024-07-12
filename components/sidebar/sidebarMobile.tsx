"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import SideBar from "./sidebar";

interface ResponsiveSidebarProps {
    window?: () => Window;
}

const ResponsiveSidebar: React.FC<ResponsiveSidebarProps> = (props) => {
    const Drawer_: React.FC<{ onClick: () => void }> = ({ onClick }) => {
        return (
            <div>
                <SideBar onClosedrawer={onClick} />
            </div>
        );
    };
    return (
        <>
            <Box>
                <Drawer_
                    onClick={() => {
                    }}
                />
            </Box>
        </>
    );
}

export default ResponsiveSidebar;
