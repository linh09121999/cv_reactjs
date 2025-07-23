import React, { Suspense, useEffect, useRef } from 'react';
import { useGlobalContext } from "../../context/contextGlobal";
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProjectContent = () => {
    const sxCard = {
        width: '100%',
        height: '100%',
        boxShadow: 'var(--shadow-md)',
        transition: 'all 0.3s',
        borderRadius: '8px',
        "&:hover": {
            backgroundColor: 'var(--white)',
            transform: 'translateY(-5px)',
            boxShadow: 'var(--shadow-md)'
        }
    };

    const sxCardContent = {
        display: 'grid',
        gap: '1rem',
    }

    const sxCardMedia = {
        padding: '16px'
    }

    const sxTypographyTitle = {
        fontSize: '14pt',
        fontWeight: '600',
        color: 'var(--primary)'
    }

    const { projectContent, responsive, icon } = useGlobalContext();
    return (
        <Carousel
            responsive={responsive}
            draggable //truot tren pc, laptop
            swipeable //vuot tren mobile
            arrows={false} //mui ten
            infinite //truot vo hang 2 huong
            minimumTouchDrag={100} // kcach keo vuot cac trang tiep theo
            sliderClass="react-multi-carousel-track"
            itemClass="carousel-item"
            containerClass="react-multi-carousel-list"
            dotListClass="react-multi-carousel-dot-list"
            keyBoardControl //su dung phim de dieu huong
            showDots={true} //hiển cham o duoi
            renderDotsOutside={true} // hien thi cham ngoai vung chua nd
            focusOnSelect={false}
            centerMode={false}
            additionalTransfrom={0}
            shouldResetAutoplay
            rewind={false} //tua lai
            rewindWithAnimation={false} //
            rtl={false} //huong bang chuyen (r->l)
            renderButtonGroupOutside={false}
        >
            {projectContent.map((item, index) => (
                <Card sx={sxCard} key={index}>
                    <Carousel
                        responsive={responsive}
                        draggable //truot tren pc, laptop
                        swipeable //vuot tren mobile
                        arrows={false} //mui ten
                        infinite //truot vo hang 2 huong
                        autoPlay={true}
                        autoPlaySpeed={2000} // sau 3000ms chuyen slide
                        showDots={false} //hiển cham o duoi
                        renderDotsOutside={false} // hien thi cham ngoai vung chua nd
                        focusOnSelect={false}
                        centerMode={false}
                        additionalTransfrom={0}
                        shouldResetAutoplay
                        rewind={false} //tua lai
                        rewindWithAnimation={false} //
                        rtl={false} //huong bang chuyen (r->l)
                        renderButtonGroupOutside={false}

                    >
                        {item.imgSlider.map(img => (
                            <CardMedia sx={sxCardMedia}
                                component="img"
                                image={img}
                                alt={item.title}
                            />
                        ))}
                    </Carousel>

                    <CardContent sx={sxCardContent}>
                        <div className='flex items-center justify-between'>
                            <Typography gutterBottom variant="h5" sx={sxTypographyTitle} component="div">
                                {item.title}
                            </Typography>
                            <a title={item.link} href={item.link}>{icon.iconLink}</a>
                        </div>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.content}
                        </Typography>
                        <div className='flex flex-wrap gap-3'>
                            {item.skills.map(sk => (
                                <span className='skill-tag' key={sk}>{sk}</span>
                            ))}
                        </div>

                    </CardContent>
                </Card>
            ))}
        </Carousel>
    )
}

export default ProjectContent;