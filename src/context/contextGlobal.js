import { createContext, useContext, useState, useRef } from "react";
import { useMediaQuery } from "@mui/material"
import { FaLink, FaAngleDoubleUp, FaFacebook, FaGithub, FaTelegram, FaUser, FaBirthdayCake, FaTransgender, FaCamera, FaUniversity, FaMapMarkerAlt, FaTools, FaStarHalfAlt, FaLightbulb, FaUsers, FaPaintBrush, FaSyncAlt } from "react-icons/fa";
import { FaUserTie, FaBriefcase, FaGraduationCap, FaCodeBranch, FaFilePdf } from "react-icons/fa6";
import { ImPhone } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import { MdOutlineLanguage } from "react-icons/md";

import vnFlag from '../assets/svg/language/flag-vn.svg';
import vnIcon from '../assets/svg/language/icon-vn.svg';
import usFlag from '../assets/svg/language/flag-us.svg';
import usIcon from '../assets/svg/language/icon-us.svg';

import avataImg from '../assets/image/avata/avata1.jpg'

import kld1 from '../assets/image/imgProject/KLD/login.png'
import kld2 from '../assets/image/imgProject/KLD/kiemduyet.png'
import kld3 from '../assets/image/imgProject/KLD/edit.png'

import scan1 from '../assets/image/imgProject/Scan/login.png'
import scan2 from '../assets/image/imgProject/Scan/img1.png'
import scan3 from '../assets/image/imgProject/Scan/img2.png'

import report1 from '../assets/image/imgProject/DTAReport/login.png'
import report2 from '../assets/image/imgProject/DTAReport/img1.png'
import report3 from '../assets/image/imgProject/DTAReport/img2.png'

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // icon
    const [icon, setIcon] = useState({
        iconEmail: <GrMail className='icon-contact' />,
        iconPhone: <ImPhone className='icon-contact' />,
        iconMap: <FaMapMarkerAlt className='icon-contact' />,
        iconCamera: <FaCamera />,
        iconBackToTop: <FaAngleDoubleUp />,
        iconLink: <FaLink className='icon-contact' />
    })

    const [iconAction, setIconAction] = useState({
        iconLanguage: <MdOutlineLanguage className="text-[16pt]" />,
        iconPdf: <FaFilePdf className="text-[16pt]" />,
    })

    // tieu de chinh
    const [pages, setPages] = useState([
        {
            id: "intro",
            icon: <FaUser />,
            value: "Giới thiệu",
            label: "Giới thiệu",
            iconLabel: <FaUser className='section-icon' />,
        },
        {
            id: "experience",
            icon: < FaBriefcase />,
            value: "Kinh nghiệm",
            label: "Kinh nghiệm làm việc",
            iconLabel: < FaBriefcase className='section-icon' />
        },
        {
            id: "education",
            icon: < FaGraduationCap className="text-[24pt]" />,
            value: "Học vấn",
            label: "Học vấn",
            iconLabel: < FaGraduationCap className='section-icon' />
        },
        {
            id: "projects",
            icon: < FaCodeBranch />,
            value: "Dự án",
            label: "Dự án tiêu biểu",
            iconLabel: < FaCodeBranch className='section-icon' />
        },
        {
            id: "strengths",
            icon: < FaStarHalfAlt />,
            value: "Điểm mạnh",
            label: "Điểm mạnh",
            iconLabel: < FaStarHalfAlt className='section-icon' />
        },
    ]);

    // kiem tra kich thuoc man mobile
    const isMobile = useMediaQuery("(max-width:768px)");

    // kiem cha la thie bi mobile
    const isMobileDevice = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

    // Scroll click nav
    const [selectNav, setSelectNav] = useState(0);
    const [selectBottomNavigations, setSelectBottomNavigations] = useState(0);
    const refs = {
        intro: useRef(null),
        experience: useRef(null),
        education: useRef(null),
        projects: useRef(null),
        skills: useRef(null),
        strengths: useRef(null),
    };

    const offset = isMobile ? 10 : 70;

    const scrollTo = (id) => {
        const element = refs[id]?.current;
        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const isMobile490 = useMediaQuery("(max-width:490px)");

    // thong tin tren header
    const [userInfo, setUserInfo] = useState({
        username: "Cao Thị Thùy Linh",
        email: "linhct020328@gmail.com",
        phone: "0962 059 262",
        address: "Hà Nội",
        avatar: avataImg,
        job: 'Frontend Developer',

    });

    // chon ngon ngu
    const [titleLanguage, serTitleLanguage] = useState("Chọn ngôn ngữ")

    const [language, setLanguage] = useState([
        {
            icon: vnIcon,
            img: vnFlag,
            value: "vi",
            label: "Tiếng Việt"
        },
        {
            icon: usIcon,
            img: usFlag,
            value: "en",
            label: "Tiếng Anh"
        },
    ]);

    // tieu de sidebar
    const [profileTitles, setProfileTitles] = useState([
        { id: "title1", label: "Thông tin cá nhân" },
        { id: "title2", label: "Mục tiêu nghề nghiệp" },
        { id: "title3", label: "Kỹ năng chuyên môn" },
        { id: "title4", label: "Người tham chiếu" },
        { id: "title5", label: "Kết nối với tôi" }
    ])

    // thong tin ca nhan
    const [userInfoDetail, setUserInfoDetail] = useState([
        {
            id: 0,
            icon: <FaBirthdayCake className='icon-contact' />,
            desc: '09/12/1999'
        },
        {
            id: 1,
            icon: <FaTransgender className='icon-contact' />,
            desc: 'Nữ'
        },
        {
            id: 2,
            icon: <FaMapMarkerAlt className='icon-contact' />,
            desc: 'Thôn Nỏ Bạn, xã Hồng Vân, Hà Nội'
        },

    ])

    const [targetContent, setTargetContent] = useState([
        {
            id: 0,
            time: "2028",
            content: ["Senior Frontend"],
        },
        {
            id: 1,
            time: "2027",
            content: ["Thành thạo các framework khác"],
        },
        {
            id: 2,
            time: "2026",
            content: ["Master UX/UI Design", "Thành thạo React 18"],
        }
    ])

    // nguoi tham chieu
    const [reference, setReference] = useState([
        {
            id: 0,
            icon: <FaUserTie className='icon-contact' />,
            desc: 'Bùi Vinh Quang',
        },
        {
            id: 1,
            icon: <ImPhone className='icon-contact' />,
            desc: "0904 889 189"
        }
    ])

    // lien he
    const [contactMe, setContactMe] = useState([
        {
            id: 0,
            icon: <FaFacebook className='icon-contact'/>,
            content: "facebook.com/ThuyLinh.09121999"
        },
        {
            id: 1,
            icon: <FaGithub className='icon-contact'/>,
            content: "github.com/linh09121999"
        },
        {
            id: 2,
            icon: <FaTelegram className='icon-contact'/>,
            content: "0962 059 262"
        }
    ])

    // gioi thieu
    const [introductionContent, setInstroductionContent] = useState([
        "Tôi là một Frontend Developer với niềm đam mê tạo ra những giao diện web đẹp mắt và trải nghiệm người dùng mượt mà. Với nền tảng vững chắc về ReactJS và khả năng thiết kế UI bằng Illustrator, tôi luôn hướng tới việc xây dựng các sản phẩm chất lượng cao.",
        "Tôi đặc biệt quan tâm đến việc tối ưu trải nghiệm người dùng và đảm bảo giao diện hoạt động tốt trên mọi thiết bị. Khả năng kết hợp giữa tư duy thiết kế và kỹ năng lập trình giúp tôi tạo ra những sản phẩm cân bằng giữa thẩm mỹ và chức năng."
    ],
    );

    // kinh nghiem lam viec
    const [experienceContent, setExperienceContent] = useState([
        {
            id: 0,
            time: "02/2025 - 07/2025",
            title: "Frontend Developer & Web Designer (Fresher)",
            link: "https://tecapro.com.vn/",
            company: "Công ty TNHH Một thành viên ứng dụng kỹ thuật và sản xuất (Tecapro)",
            description: "Thiết kế và phát triển giao diện cho các hệ thống nội bộ của Ủy Ban Kiểm Tra Trung Ương",
            roleTitle: "Vai trò",
            role: "Thiết kế giao diện & lập trình giao diện",
            skillTitle: "Công nghệ",
            skills: ["ReactJS", "JavaScript", "HTML5/CSS3", "Illustrator"],
            contentTitle: "Nhiệm vụ và thành tựu",
            content: [
                "Thiết kế giao diện hệ thống quản lý hồ sơ Scan và hệ thống quản lý cơ sở dữ liệu thi hành kỷ luật Đảng bằng Illustrator",
                "Phát triển giao diện hoàn chỉnh bằng ReactJS, tối ưu hiển thị responsive trên nhiều thiết bị",
                `Tối ưu trải nghiệm người dùng (UX), giúp tăng 30% hiệu suất làm việc, thân thiện với cán bộ sử dụng`,
                "Làm việc nhóm 4 người theo quy trình Agile"
            ]
        },
        // {
        //     id: 1,
        //     time: "02/2022 - 07/2022",
        //     title: "Sinh viên",
        //     company: "Học viện Kỹ thuật Mật mã",
        //     link: "https://actvn.edu.vn/",
        //     description: "Xây dựng và phát triển các dự án thực tế, các bài tập lớn, đồ án tốt nghiệp",
        //     roleTitle: "Vai trò",
        //     role: "Xây dựng và phát triển phần mềm",
        //     skillTitle: "Công nghệ",
        //     skills: ["Python", "C", "QT Desginer"],
        //     contentTitle: "Nhiệm vụ và thành tựu",
        //     content: [
        //         "Thiết kế, thi công hệ thống chống trộm thông minh",
        //         "Phát triển hệ thống IoT dựa trên Thingsboard",
        //         "Điều khiển Robot car",
        //         "Xây dựng hệ thống tín hiệu đèn giao thông",
        //     ]
        // },
    ])

    // hoc van
    const [educationContent, setEducationContent] = useState({
        icon: <FaUniversity />,
        university: "Học viện Kỹ thuật Mật mã",
        degree: "Kỹ sư Công nghệ thông tin",
        interval: "2017 - 2022",
        graduated: "Tốt nghiệp chuyên ngành Công nghệ thông tin với điểm trung bình 3.0/4.0.",
        graduationProject: `Đồ án tốt nghiệp: "Hệ thống chống trộm thông minh" sử dụng ngôn ngữ Python và C, đạt điểm A`,
    })

    // du an tieu bieu
    const [projectContent, setProjectContent] = useState([
        {
            id: 0,
            imgSlider: [kld1, kld2, kld3],
            title: "Cơ sở dữ liệu thi hành kỷ luật Đảng",
            content: "Thiết kế và phát triển giao diện hệ thống quản lý cơ sở dữ liệu kỷ luật Đảng cho Ủy Ban Kiểm Tra Trung Ương, hỗ trợ quản lý thông tin của hơn 10,000 đảng viên.",
            skills: ["ReactJS", "JavaScript", "HTML5/CSS3", "Illustrator"],
            link: "https://ubkttw-qdkl.teca.vn/",
            linkTitle: "https://ubkttw-qdkl.teca.vn/"
        },
        {
            id: 1,
            imgSlider: [scan1, scan2, scan3],
            title: "Hệ thống quản lý hồ sơ Scan",
            content: "Xây dựng giao diện người dùng cho hệ thống quản lý tài liệu scan tại Ủy Ban Kiểm Tra Trung Ương",
            skills: ["ReactJS", "JavaScript", "HTML5/CSS3", "Illustrator"],
            link: "! Bảo mật do website chưa công khai",
            linkTitle: "! Bảo mật do website chưa công khai"
        },
        {
            id: 2,
            imgSlider: [report2, report3],
            title: "Báo cáo đối soát dịch vụ DTA",
            content: "Xây dựng giao diện người dùng cho hệ thống báo cáo đối soát dịch vụ DTA.",
            skills: ["ReactJS", "JavaScript", "HTML5/CSS3", "Illustrator"],
            link: "https://dta.ai.vn/",
            linkTitle: "https://dta.ai.vn/"
        },
        // {
        //     imgSlider: [],
        //     title: "Hệ thống chống trộm thông minh",
        //     content: "Xây dựng hệ thống chống trộm thông minh có nhận diện khuôn mặt, cảnh báo có người lạ về thiết bị di động.",
        //     skills: ["Python", "C"]
        // }
    ])

    const [skillContent, setSkillContent] = useState([
        {
            ratio: 85,
            title: "ReactJS"
        },
        {
            ratio: 80,
            title: "JavaScript"
        },
        {
            ratio: 85,
            title: "HTML+ Tailwind"
        },
        {
            ratio: 75,
            title: "Illustrator"
        },
        {
            ratio: 85,
            title: "Responsive Design"
        },
        {
            ratio: 80,
            title: "QT Designer"
        }
    ])

    // Diem manh
    const [strengths, setStrengths] = useState([
        {
            id: 0,
            icon: <FaLightbulb size={24} />,
            title: "Tinh thần học hỏi",
            desc: "Chủ động tìm hiểu công nghệ mới, luôn cải tiến kỹ năng.",
        },
        {
            id: 1,
            icon: <FaUsers size={24} />,
            title: "Làm việc nhóm",
            desc: "Hợp tác tốt, từng tham gia nhiều dự án nhóm hiệu quả.",
        },
        {
            id: 2,
            icon: <FaPaintBrush size={24} />,
            title: "Đam mê thiết kế",
            desc: "Yêu thích giao diện đẹp, chú trọng trải nghiệm người dùng.",
        },
        {
            id: 3,
            icon: <FaSyncAlt size={24} />,
            title: "Khả năng thích nghi",
            desc: "Nhanh chóng làm quen với môi trường mới và thay đổi trong công việc.",
        },
    ])

    // footer
    const [textFooter, setTextFooter] = useState("Tất cả quyền được bảo lưu")

    // send email
    const [textSubject, setTextSubject] = useState("Chào bạn")
    const [textBody, setTextBody] = useState("Tôi muốn liên hệ với bạn qua email này.")

    const subject = encodeURIComponent(textSubject);
    const body = encodeURIComponent(textBody);
    const [gmailUrl, getGmailUrl] = useState(`https://mail.google.com/mail/?view=cm&fs=1&to=${userInfo.email}&su=${subject}&body=${body}`);

    // open map
    const encodedAddress = encodeURIComponent(userInfo.addressDetail);
    const [mapUrl, setMapUrl] = useState(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`);

    // responsive
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1, //so slider hien thi
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    // export pdf

    const value = {
        pages,
        setPages,
        userInfo,
        setUserInfo,
        isMobile,
        isMobileDevice,
        textFooter,
        setTextFooter,
        profileTitles,
        setProfileTitles,
        reference,
        setReference,
        introductionContent,
        setInstroductionContent,
        experienceContent,
        setExperienceContent,
        educationContent,
        setEducationContent,
        projectContent,
        setProjectContent,
        gmailUrl,
        getGmailUrl,
        mapUrl,
        setMapUrl,
        textSubject,
        setTextSubject,
        textBody,
        setTextBody,
        strengths,
        setStrengths,
        icon,
        setIcon,
        userInfoDetail,
        setUserInfoDetail,
        skillContent,
        setSkillContent,
        refs,
        scrollTo,
        selectNav,
        setSelectNav,
        offset,
        language,
        setLanguage,
        titleLanguage,
        serTitleLanguage,
        responsive,
        selectBottomNavigations,
        setSelectBottomNavigations,
        isMobile490,
        iconAction,
        setIconAction,
        targetContent,
        setTargetContent,
        contactMe,
        setContactMe
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );

}

export const useGlobalContext = () => useContext(GlobalContext);