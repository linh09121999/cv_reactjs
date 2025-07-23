import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/contextGlobal";
import '../../assets/css/index.css';
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material'
import ChangeLanguage from "./changeLanguage";

const SpeedDialCV = () => {
    const { iconAction, isMobile, language, printRef } = useGlobalContext()

    const [currentLang, setCurrentLang] = useState(language[0]);

    const sxBox = {
        transform: 'translateZ(0px)',
        flexGrow: 1,
        zIndex: 99,
        position: 'fixed',
        bottom: '60px',
    }

    const sxSpeedDial = {
        position: 'absolute',
        bottom: 16,
        left: 16,
        '& .MuiFab-primary': {
            background: 'linear-gradient(135deg, #0f9b0f, #087f23)',
            color: 'var(--white)',
            boxShadow: '0 4px 12px rgba(15, 155, 15, 0.4)',
            transition: 'all 0.3s',
            '&:hover': {
                background: 'linear-gradient(135deg, #087f23, #0c7a0c)', // màu hover
            },
        },

    }

    const sxSpeedDialAactionLanguage = {
        '&:hover': {
            background: 'var(--lang-gradient)',
            color: 'var(--white)'
        }
    }

    const sxSpeedDialAactionPdf = {
        '&:hover': {
            background: 'var(--pdf-gradient)',
            color: 'var(--white)'
        }
    }

    const handleToggleLanguage = () => {
        setCurrentLang((prev) =>
            prev.value === "vi" ? language[1] : language[0]
        );
    };

    const handlePrint = () => {
    }

    return (
        <div>
            {isMobile == false && (
                <div className="container-action">
                    <div className='header-action'>
                        {/* chon ngon ngu */}
                        <ChangeLanguage />

                        {/* xuat pdf */}
                        <button className='action-btn downloadBtn'
                            onClick={handlePrint}
                        >
                            {iconAction.iconPdf}
                        </button>
                    </div>
                </div>

            )}
            {isMobile == true && (
                <Box sx={sxBox}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={sxSpeedDial}
                        icon={<SpeedDialIcon />}
                    >
                        <SpeedDialAction sx={sxSpeedDialAactionLanguage}
                            onClick={handleToggleLanguage}
                            icon={<img src={currentLang.icon} className='language-flag-speedDial' aalt={currentLang.label} />}
                        />
                        <SpeedDialAction sx={sxSpeedDialAactionPdf}
                            onClick={handlePrint}
                            icon={iconAction.iconPdf}
                        />
                    </SpeedDial>
                </Box>
            )}
        </div>

    )
}

export default SpeedDialCV