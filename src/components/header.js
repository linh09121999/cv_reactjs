import React, { useState, useRef } from 'react';
import { styled, Stack, Badge, Avatar, Box, IconButton, Button } from '@mui/material';
import '../assets/css/index.css';
import { useGlobalContext } from "../context/contextGlobal";
// import { SpeedDialCV } from '../view/action';

const StyledBadge = styled(Badge)(({ theme }) => ({
    width: '190px',
    height: '190px',
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const Header = () => {
    const anchorOrigin = { vertical: 'bottom', horizontal: 'right' }
    const sxBox = {
        position: "relative",
        width: '190px',
        height: '190px',
        "&:hover .overlay": { opacity: 1 },
        borderRadius: "50%",
        overflow: "hidden",
        cursor: "pointer",
    }
    const sxAvata = { width: "100%", height: "100%" }
    const sxBoxHover = {
        position: "absolute",
        top: '50%',
        left: 0,
        width: "100%",
        height: "50%",
        bgcolor: "rgba(0,0,0,0.4)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0,
        transition: "opacity 0.3s",
    }
    const sxIconButton = { color: "white" }

    const sxButton = {
        display: 'flex',
        // background: 'rgba(248, 248, 248, 0.7)',
        // border: '1px solid var(--border)',
        // color: 'var(--text-medium)',
        background: "transparent",
        boxShadow: 'var(--shadow-water)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'var(--white)',
        backdropFilter: 'blue(8px)',
        alignItems: 'center',
        fontSize: '0.95rem',
        borderRadius: '8px',
        textTransform: "none",
        lineHeight: '1.6',
        transition: 'all 0.2s',
        padding: '8px 15px',
    }

    const { userInfo, isMobileDevice, gmailUrl, mapUrl, icon } = useGlobalContext();

    const [avatarUrl, setAvatarUrl] = useState(userInfo.avatar);
    const inputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => setAvatarUrl(e.target.result);
        reader.readAsDataURL(file);
    };

    const handleClick = () => inputRef.current.click();

    return (
        <header>
            <div className='header-filter'>
                <div className='container'>
                    <div className="header-content">
                        <div className='avatar'>
                            <Stack direction="row" spacing={2}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={anchorOrigin}
                                    variant="dot"
                                >
                                    <Box
                                        sx={sxBox}
                                        onClick={handleClick}
                                    >
                                        <Avatar
                                            src={avatarUrl}
                                            alt="avatar"
                                            sx={sxAvata}
                                        />
                                        <Box
                                            className="overlay"
                                            sx={sxBoxHover}
                                        >
                                            <IconButton sx={sxIconButton}>
                                                {icon.iconCamera}
                                            </IconButton>
                                        </Box>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            ref={inputRef}
                                            style={{ display: "none" }}
                                            onChange={handleFileChange}
                                        />
                                    </Box>
                                </StyledBadge >
                            </Stack>
                        </div>
                        <div className="header-text grid gap-2">
                            <h1>{userInfo.username}</h1>
                            <div className="job-title">{userInfo.job}</div>
                            <div className="contact-info">
                                <Button className="contact-item"
                                    variant="outlined"
                                    href={isMobileDevice ? `tel:${userInfo.phone}` : undefined}
                                    onClick={() => {
                                        if (!isMobileDevice) alert("Chỉ gọi được trên điện thoại!");
                                    }}
                                    sx={sxButton}>
                                    {icon.iconPhone}
                                    {userInfo.phone}
                                </Button>
                                <Button className="contact-item"
                                    variant="outlined"
                                    href={gmailUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={sxButton}
                                >
                                    {icon.iconEmail}
                                    {userInfo.email}
                                </Button>
                                <Button className="contact-item"
                                    variant="outlined"
                                    href={mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={sxButton}
                                >
                                    {icon.iconMap}
                                    {userInfo.address}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;