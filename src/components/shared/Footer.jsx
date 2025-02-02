import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="footer max-w-screen-xl mx-auto bg-base-300 bg-base-100/60  text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            
            <div className="flex gap-4">
      <Link href="https://www.facebook.com/profile.php?id=61564253535935&sk" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 text-blue-600 hover:text-blue-800" />
      </Link>
      <Link href="https://www.instagram.com/lselectricite2024/?igsh=MTM4YjdzdG5kZWpscQ%3D%3D#" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-pink-500 hover:text-pink-700" />
      </Link>
    </div>
          
         
       
          </div>
        </nav>
      </footer>
    );
};

export default Footer;