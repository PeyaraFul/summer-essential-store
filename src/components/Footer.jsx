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
            <a>
              <FaFacebook size={20} />
            </a>
            <a>
              <FaLinkedin size={20} />
            </a>
            <a>
              <FaYoutube size={25} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
