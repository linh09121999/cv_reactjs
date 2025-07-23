import React, { useState, useContext, useRef, useEffect } from 'react';
import '../assets/css/index.css';
import { Box, BottomNavigation, BottomNavigationAction, colors } from '@mui/material'
import { useGlobalContext } from "../context/contextGlobal";

const BottomNavigations = () => {

    const {
        pages,
        scrollTo,
        selectBottomNavigations,
        setSelectBottomNavigations,
        isMobile490
    } = useGlobalContext();

    const sxBox = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    }

    const sxBottomNavigation = {
        position: "fixed",
        bottom: '0',
        height: '65px ',
        background: 'var(--gradient-primary)',
        width: '100%',
        zIndex: 10,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)", // nhẹ nhàng
        backdropFilter: "blur(10px)", // hiệu ứng mờ nền sau (nếu dùng background translucent)
    }

    const sxBottomNavigationAction = {
        minWidth: '0 !important',
        color: 'var(--white)',
        fontSize: '20pt',
        padding: 0,
        "&.Mui-selected": {
            color: 'var(--white)',
            transition: "all 0.3s ease",
            background: isMobile490? " rgba(255, 255, 255, 0.15)": "transparent"
        },
        "& .MuiBottomNavigationAction-label": {
            display: "none",
        },
        "&.Mui-selected .MuiBottomNavigationAction-label": {
            fontSize: '11pt',
            display: isMobile490 ? "none" : "block",
            transition: "all 0.3s ease",
        },
    }

    const handleChange = (event, newValue) => {
        setSelectBottomNavigations(newValue);
    };


    return (
        <Box sx={sxBox}>
            <BottomNavigation
                showLabels={false}
                sx={sxBottomNavigation}
                value={selectBottomNavigations}
                onChange={handleChange}
            >
                {pages.map((page, index) => (
                    <BottomNavigationAction
                        key={page.id}
                        label={page.value}
                        value={page.id}
                        icon={page.icon}
                        sx={sxBottomNavigationAction}
                        onClick={() => {
                            setSelectBottomNavigations(page.id)
                            scrollTo(page.id)
                        }}
                    >

                    </BottomNavigationAction>
                ))}
            </BottomNavigation>
        </Box>
    )
}

export default BottomNavigations;