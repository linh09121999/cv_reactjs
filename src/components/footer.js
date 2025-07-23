import '../assets/css/index.css';
import { useGlobalContext } from "../context/contextGlobal";

const Footer = () => {
    const { userInfo, textFooter } = useGlobalContext()
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {year}{' '} <strong>{userInfo.username.toUpperCase()}</strong>. {textFooter}.</p>
        </footer>
    )
}

export default Footer;