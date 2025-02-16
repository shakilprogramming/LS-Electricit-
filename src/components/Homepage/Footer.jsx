import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      {/* Services Section */}
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link href="/services/installation" className="link link-hover">Installation</Link>
        <Link href="/services/repair" className="link link-hover">Repair</Link>
        <Link href="/services/maintenance" className="link link-hover">Maintenance</Link>
        <Link href="/services/consultation" className="link link-hover">Consultation</Link>
      </nav>

      {/* Company Section */}
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/about" className="link link-hover">About Us</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
        <Link href="/careers" className="link link-hover">Careers</Link>
        <Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link>
      </nav>

      {/* Social Media Section */}
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <div className="flex gap-4">
            {/* Facebook Link */}
            <Link
              href="https://www.facebook.com/profile.php?id=61564253535935&sk"
              target="_blank"
              aria-label="Facebook"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors"
              />
            </Link>

            {/* Instagram Link */}
            <Link
              href="https://www.instagram.com/lselectricite2024/?igsh=MTM4YjdzdG5kZWpscQ%3D%3D#"
              target="_blank"
              aria-label="Instagram"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="w-6 h-6 text-pink-500 hover:text-pink-700 transition-colors"
              />
            </Link>
            
          </div>
        </div>
        <div>
        <p>&copy; 2023 My Electronics Store. All rights reserved.</p>
        </div>
      </nav>
      
    </footer>
  );
};

export default Footer;