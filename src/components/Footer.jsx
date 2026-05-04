import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Company</h6>
          <address>
            <p>arakash022@gmail.com</p>
            <p>+8801790291061</p>
            <p>Gazipur, Dhaka</p>
          </address>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookies Policy</a>
        
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link href="https://www.facebook.com/arakash022" target="_blank">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/md-akash-mia-bd" target="_blank">
              <FaLinkedin size={20} />
            </Link>
            <Link href="https://www.youtube.com/@peyaraful" target="_blank">
              <FaYoutube size={25} />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
