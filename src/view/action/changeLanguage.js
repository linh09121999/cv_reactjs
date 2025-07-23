import React, { useState, useRef } from 'react';
import { useGlobalContext } from "../../context/contextGlobal";
import '../../assets/css/index.css';
import { Menu, MenuItem } from '@mui/material';

const ChangeLanguage = () => {
    const PaperProps = {
        sx: {
            transform: 'translateX(0%)',
            borderRadius: 2,
            boxShadow: 'var(--shadow-lg)',
            padding: '20px',
            width: '240px',
            transition: 'all 0.3s ease'
        },
    }

    const MenuListProps = {
        sx: {
            paddingY: 0.5,
        },
    }

    const sxMenuItem = {
        display: 'flex !important',
        alignItems: 'center',
        gap: '12px',
        transform: 'all 0.2s',
        padding: '10px 15px',
        borderRadius: '8px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(15, 155, 15, 0.08)',
            // color: 'white',
        },
    }

    const {
        iconAction, language, titleLanguage,
        setPages,
        setUserInfo,
        serTitleLanguage,
        setLanguage,
        setProfileTitles,
        setUserInfoDetail,
        setReference,
        setInstroductionContent,
        setExperienceContent,
        setEducationContent,
        setProjectContent,
        setStrengths,
        setTextFooter,
        setTextSubject,
        setTextBody
    } = useGlobalContext();

    const [anchorElLanguage, setAnchorElLanguage] = useState(null);
    const handleClickLanguage = (event) => {
        setAnchorElLanguage(event.currentTarget);
    };

    const handleCloseLanguage = () => {
        setAnchorElLanguage(null);
    };

    const handleChangeEN = () => {
        setPages(prevPages =>
            prevPages.map(page => {
                switch (page.id) {
                    case "intro":
                        return { ...page, value: "About", label: "About" };
                    case "experience":
                        return { ...page, value: "Experience", label: "Work Experience" };
                    case "education":
                        return { ...page, value: "Education", label: "Education" };
                    case "projects":
                        return { ...page, value: "Projects", label: "Featured Projects" };
                    case "skills":
                        return { ...page, value: "Skills", label: "Professional Skills" };
                    case "strengths":
                        return { ...page, value: "Strengths", label: "Strengths" };
                    default:
                        return page;
                }
            })
        );

        setUserInfo(prev => ({
            ...prev,
            username: "Cao Thi Thuy Linh",
            address: "Hanoi" // nếu muốn chuyển địa danh
        }));

        serTitleLanguage("Select Language");

        setLanguage(prevLanguage =>
            prevLanguage.map(item => {
                switch (item.value) {
                    case "vi":
                        return { ...item, label: "Vietnamese" };
                    case "en":
                        return { ...item, label: "English" };
                    default:
                        return item; // giữ nguyên nếu không khớp
                }
            })
        )

        setProfileTitles(prevTitles =>
            prevTitles.map(title => {
                switch (title.id) {
                    case "title1":
                        return { ...title, label: "Personal Information" };
                    case "title2":
                        return { ...title, label: "Main Skills" };
                    case "title3":
                        return { ...title, label: "References" };
                    default:
                        return title;
                }
            })
        );

        setUserInfoDetail(prev =>
            prev.map(item => {
                switch (item.id) {
                    case 0:
                        return { ...item, desc: "December 9, 1999" };
                    case 1:
                        return { ...item, desc: "Female" };
                    case 2:
                        return { ...item, desc: "No Ban Hamlet, Hong Van Commune, Hanoi" };
                    default:
                        return item;
                }
            })
        );

        setReference(prev =>
            prev.map(item => {
                switch (item.id) {
                    case 0:
                        return { ...item, desc: "Bui Vinh Quang" };
                    default:
                        return item
                }
            })
        )

        setInstroductionContent(prev => ({
            ...prev,
            content: [
                "I am a Frontend Developer passionate about creating beautiful web interfaces and smooth user experiences. With a solid foundation in ReactJS and UI design skills using Illustrator, I always aim to build high-quality products.",
                "I'm particularly interested in optimizing user experience and ensuring interfaces work well on all devices. The ability to combine design thinking with programming skills helps me create products that balance aesthetics and functionality."
            ],
            targetTitle: "Career Objectives",
            targetContent: [
                "Become a Senior Frontend Developer in the next 3 years",
                "Master modern technologies such as React 18",
                "Develop in-depth UX/UI Design skills",
                "Contribute to projects that positively impact the community"
            ]
        }))

        setExperienceContent(prev =>
            prev.map(item => {
                switch (item.id) {
                    case 0:
                        return {
                            ...item,
                            company: "Tecapro Co., Ltd.",
                            description: "Design and develop interfaces for internal systems of the Central Inspection Commission",
                            roleTitle: "Role",
                            role: "UI Designer & Frontend Developer",
                            skillTitle: "Technologies",
                            skills: ["ReactJS", "JavaScript", "HTML5/CSS3", "Illustrator"],
                            contentTitle: "Tasks and Achievements",
                            highlight: ["30% productivity improvement"],
                            content: [
                                "Designed UI for document scanning and database management systems using Illustrator",
                                "Developed responsive frontend with ReactJS for multiple devices",
                                "Enhanced user experience (UX), improving productivity by 30%, user-friendly for officials",
                                "Collaborated in a 4-member team using Agile"
                            ]
                        }
                    case 1:
                        return {
                            ...item,
                            title: "Student",
                            company: "Academy of Cryptography Techniques",
                            description: "Built real-world projects and completed graduation theses",
                            roleTitle: "Role",
                            role: "Software  Developer",
                            skillTitle: "Technologies",
                            skills: ["Python", "C", "QT Designer"],
                            contentTitle: "Tasks and Achievements",
                            content: [
                                "Designed and implemented a smart alarm system",
                                "Developed an IoT system based on Thingsboard",
                                "Controlled a Robot car",
                                "Built a traffic light signal system"
                            ]
                        }
                    default:
                        return item
                }
            })
        )

        setEducationContent(prev => ({
            ...prev,
            university: "Academy of Cryptography Techniques",
            degree: "Bachelor of Information Technology Engineering",
            graduated: "Graduated in Information Technology with GPA 3.0/4.0.",
            graduationProject: `Graduation Project: "Smart Anti-theft System" developed using Python and C, graded A`
        }))

        setStrengths(prev =>
            prev.map(item => {
                switch (item.id) {
                    case 0:
                        return {
                            ...item,
                            title: "Willingness to Learn",
                            desc: "Proactively explores new technologies and constantly improves skills.",
                        };
                    case 1:
                        return {
                            ...item,
                            title: "Teamwork",
                            desc: "Collaborates effectively, experienced in team-based projects.",
                        };
                    case 2:
                        return {
                            ...item,
                            title: "Passion for Design",
                            desc: "Enjoys beautiful UI, focuses on user experience.",
                        };
                    case 3:
                        return {
                            ...item,
                            title: "Adaptability",
                            desc: "Quickly adapts to new environments and job changes.",
                        };
                    default:
                        return item;
                }
            })
        )

        setProjectContent(prev =>
            prev.map(item => {
                switch (item.id) {
                    case 0:
                        return {
                            ...item,
                            title: "Disciplinary Database System for the Communist Party",
                            content:
                                "Designed and developed the UI for the Party disciplinary database management system for the Central Inspection Committee, supporting the information management of over 10,000 members.",
                        };
                    case 1:
                        return {
                            ...item,
                            title: "Scanned Document Management System",
                            content:
                                "Built the user interface for the document scanning management system at the Central Inspection Committee.",
                            linkTitle: "Protected - Internal system not yet public",
                        };
                    case 2:
                        return {
                            ...item,
                            title: "DTA Service Reconciliation Reports",
                            content:
                                "Developed the user interface for the service reconciliation reporting system for DTA.",
                        };
                    default:
                        return item;
                }
            })
        );

        setTextFooter("All rights reserved.")
        setTextSubject("Hello")
        setTextBody("I would like to contact you via this email.")

    }

    const handleLanguageChange = (value) => {
        switch (value) {
            case 'vi':
                console.log("Chuyển sang tiếng Việt");
                break;
            case 'en':
                handleChangeEN()
                console.log("Switch to English (US)");
                break;
            default:
                console.log("Ngôn ngữ không hỗ trợ:", value);
        }
        setAnchorElLanguage(null);
    };

    return (
        <div>
            <button className='action-btn languageBtn'
                onClick={handleClickLanguage}>
                {iconAction.iconLanguage}
            </button>
            <Menu
                anchorEl={anchorElLanguage}
                open={Boolean(anchorElLanguage)}
                onClose={handleCloseLanguage}
                PaperProps={PaperProps}
                MenuListProps={MenuListProps}
            >
                <h4 className='title-language'>{titleLanguage}</h4>
                {language.map((item, index) => (
                    <MenuItem
                        key={item.value}
                        sx={sxMenuItem}
                        onClick={() => handleLanguageChange(item.value)}
                    >
                        <img src={item.img} className='language-flag' alt={item.label} />
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}
export default ChangeLanguage;