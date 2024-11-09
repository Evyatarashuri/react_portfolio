import logo from "../assets/evyatar-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <nav className="mb-20 flex items-center justify-between py-6 bg-transparent">
                <div className="flex flex-shrink-0 items-center">
                <img className="mx-2" src={logo} alt="logo" style={{ width: "150px" }} />
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/evyatar-ashuri-469063237/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Evyatarashuri" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/evyatarashuri_/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
