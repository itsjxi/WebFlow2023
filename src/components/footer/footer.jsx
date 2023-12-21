import React from "react";
import "./footer.css"
import { FaLinkedin, FaTwitter, FaYoutube, FaCookieBite,  } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";


function Footer() {
    return (
        <div className="footer-container">

            <div className="footer">
                <div class="footer-link-container">
                    <div class="follow-us">Follow us:</div>

                    <div class="footer-social-link">
                        <div className="social-link-container">
                            <a href="https://www.linkedin.com/company/docsumoai" target="_blank"><FaLinkedin /></a>
                        </div>
                        <div className="social-link-container">
                            <a href="https://www.linkedin.com/company/docsumoai" target="_blank"><FaTwitter /></a>
                        </div>
                        <div className="social-link-container">
                            <a href="https://www.linkedin.com/company/docsumoai" target="_blank"><FaYoutube /></a>
                        </div>
                    </div>
                </div>

                <div class="footer-separator"></div>

                <div class="footer-legal-container">
        
                        <div className="fix-icon cookie-icon"><FaCookieBite /></div>
                        <div className="fix-icon messages-icon"><TiMessages /></div>
                
                    <div className="footer-left">© 2023 Docsumo. All rights reserved.</div>
                    <div class="footer-legal">
                        <a href="/terms">Terms of Use</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;