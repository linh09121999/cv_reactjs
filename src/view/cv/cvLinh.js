import React, { useState, useContext, useRef, useEffect } from 'react';
import '../../assets/css/index.css';

import { useGlobalContext } from "../../context/contextGlobal";
import ProjectContent from './projectContent';

import { Box, LinearProgress, Card, CardContent, Typography } from '@mui/material';

const Cv = () => {

    const sxProgress = {
        height: '10px',
        borderRadius: '5px',
        background: "var(--border)",
        boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
        ".MuiLinearProgress-bar": {
            backgroundImage: "var(--gradient-primary)",
            borderRadius: '5px',
            transition: "width 1.5s ease-out"
        },
    }

    const sxFormControl = {
        margin: '0px !important',
        '& .MuiFormControl-root': {
            margin: '0px !important',
        }
    }

    const sxCard = {
        display: "flex",
        alignItems: "flex-start",
        gap: 2,
        p: 2,
        borderRadius: 2,
        border: 'none',
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.3s",
        "&:hover": {
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            transform: "translateY(-2px)",
        },
    }

    const sxCardContent = {
        p: 0,
        "&:last-child": {
            paddingBottom: 0,
        }
    }

    const sxBoxCard = {
        color: 'var(--primary)',
    }

    const sxTypography1 = {
        color: 'var(--primary)',
        fontWeight: 'bold',
        fontSize: '21PX'
    }

    const sxTypography2 = {
        color: 'var(--text-medium)'
    }

    const {
        profileTitles,
        userInfoDetail,
        pages,
        skillContent,
        reference,
        introductionContent,
        strengths,
        educationContent,
        refs,
        setSelectNav,
        offset,
        experienceContent,
        isMobile,
        setSelectBottomNavigations,
        targetContent,
        contactMe
    } = useGlobalContext()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            pages.forEach((page, index) => {
                const el = refs[page.id]?.current;
                if (!el) return;

                const offsetTop = el.offsetTop;
                const offsetHeight = el.offsetHeight;

                if (
                    scrollY >= offsetTop - offset &&
                    scrollY < offsetTop + offsetHeight - offset
                ) {
                    setSelectNav(index);
                }
            });
        };

        const handleScrollMobile = () => {
            const scrollY = window.scrollY;

            pages.forEach((page, index) => {
                const el = refs[page.id]?.current;
                if (!el) return;

                const offsetTop = el.offsetTop;
                const offsetHeight = el.offsetHeight;

                if (
                    scrollY >= offsetTop - offset &&
                    scrollY < offsetTop + offsetHeight - offset
                ) {
                    setSelectBottomNavigations(page.id);
                }
            });
        };

        // Gắn đúng hàm tùy theo thiết bị
        const scrollHandler = isMobile ? handleScrollMobile : handleScroll;

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };

    }, [pages, refs, setSelectNav]);

    return (
        <div className='main-cv'>
            <div className="container">
                <div className="grid main-grid gap-4">
                    <aside className="sidebar grid grid-cols-1 gap-4" style={{ top: offset }}>
                        <div className="profile-card grid gap-4">
                            <div className='profile-title'>{profileTitles[0].label}</div>
                            {userInfoDetail.map((item, index) => (
                                <div className="info-item" key={index}>
                                    {item.icon}
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="profile-card grid gap-4">
                            <div className='profile-title'>{profileTitles[1].label}</div>
                            <div className='timeline grid grid-cols-1 gap-6'>
                                {targetContent.map((item, index) => (
                                    <div className="timeline-item " key={index}>
                                        <div className="timeline-date">
                                            {item.time}
                                        </div>
                                        <div className='timeline-description grid gap-2 items-center'>
                                            {item.content.map((cn, index) => (
                                                <ul className="relative" key={index}>
                                                    <li>{cn}</li>
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="profile-card grid gap-4">
                            <div className='profile-title'>{profileTitles[2].label}</div>
                            <div className="grid gap-4 self-start">
                                {skillContent.map((item, index) => (
                                    <div className='grid gap-1' key={index}>
                                        <div className='flex items-center justify-between skill-name'>
                                            <span>{item.title}</span>
                                            <span>{item.ratio}%</span>
                                        </div>
                                        <Box sx={sxFormControl}>
                                            <LinearProgress sx={sxProgress}
                                                variant="determinate" value={item.ratio} />
                                        </Box>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="profile-card grid gap-4">
                            <div className='profile-title'>{profileTitles[3].label}</div>
                            {reference.map((item, index) => (
                                <div className="info-item" key={index}>
                                    {item.icon}
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="profile-card grid gap-4">
                            <div className='profile-title'>{profileTitles[4].label}</div>
                            {contactMe.map((item, index) => (
                                <div className="info-item" key={index}>
                                    {item.icon}
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </aside>
                    <main className='grid grid-cols-1 gap-4'>
                        {/* gioi thieu */}
                        <section ref={refs[pages[0].id]} className="section grid gap-6">
                            <div className="section-header">
                                <h2 className="section-title">{pages[0].label}</h2>
                                {pages[0].iconLabel}
                            </div>
                            <div className="about-text">
                                {introductionContent.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))}
                            </div>
                        </section>

                        {/* kinh nghiem lam viec */}
                        <section ref={refs[pages[1].id]} className="section grid gap-6">
                            <div className="section-header">
                                <h2 className="section-title">{pages[1].label}</h2>
                                {pages[1].iconLabel}
                            </div>
                            <div className='timeline grid grid-cols-1 gap-6'>
                                {experienceContent.map((item, index) => (
                                    <div className="timeline-item " key={index}>
                                        <div className="timeline-date">
                                            {item.time}
                                        </div>
                                        <h3 className="timeline-title">{item.title}</h3>
                                        <span className="timeline-company"><a title={item.link} href={item.link}>{item.company}</a></span>
                                        <div className="timeline-description grid grid-cols-1 gap-2">
                                            <p><strong>{item.description}</strong></p>
                                            <div className='timeline-select flex flex-wrap gap-2 items-center'>
                                                <strong>{item.roleTitle}: </strong>
                                                {item.role}
                                            </div>
                                            <div className='timeline-select grid grid-cols-1 gap-2 items-center'>
                                                <strong>{item.skillTitle}: </strong>
                                                <div className='flex flex-wrap gap-2 items-center timeline-skill'>
                                                    {item.skills.map(sk => (
                                                        <span className='skill-tag' key={sk}>{sk}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='timeline-select grid gap-2 items-center'>
                                                <strong>{item.contentTitle}: </strong>

                                                {item.content.map((cn, index) => (
                                                    <ul className="relative" key={index}>
                                                        <li>{cn}</li>
                                                    </ul>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* hoc van */}
                        <section ref={refs[pages[2].id]} className="section grid gap-6">
                            <div className="section-header">
                                <h2 className="section-title">{pages[2].label}</h2>
                                {pages[2].iconLabel}
                            </div>
                            <div className="education-item flex gap-4">
                                <div className="education-icon">
                                    {educationContent.icon}
                                </div>
                                <div className="education-content">
                                    <div className="education-degree">{educationContent.degree}</div>
                                    <span className="education-school">{educationContent.university}</span>
                                    <span className="education-date">{educationContent.interval}</span>
                                    <div className="education-description">
                                        <p>{educationContent.graduated}</p>
                                        <p>{educationContent.graduationProject}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* du an tieu bieu */}
                        <section ref={refs[pages[3].id]} className="section-project grid gap-2">
                            <div className="section-header-project">
                                <h2 className="section-title">{pages[3].label}</h2>
                                {pages[3].iconLabel}
                            </div>
                            <ProjectContent />
                        </section>

                        {/* diem manh */}
                        <section ref={refs[pages[4].id]} className="section grid gap-6">
                            <div className="section-header">
                                <h2 className="section-title">{pages[4].label}</h2>
                                {pages[4].iconLabel}
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                                {strengths.map((item, index) => (
                                    <Card
                                        key={index}
                                        variant="outlined"
                                        sx={sxCard}
                                    >
                                        <Box mt={0.5} sx={sxBoxCard}>
                                            {item.icon}
                                        </Box>
                                        <CardContent sx={sxCardContent}>
                                            <Typography sx={sxTypography1} gutterBottom>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={sxTypography2}>
                                                {item.desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Cv;