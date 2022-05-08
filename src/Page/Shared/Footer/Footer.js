import React from 'react';
import './Footer.css';
import logo1 from '../../../Images/Footer-logo/logo-1.png';
import logo2 from '../../../Images/Footer-logo/logo-2.png';
import logo3 from '../../../Images/Footer-logo/logo-3.png';
import logo4 from '../../../Images/Footer-logo/logo-4.png';

const Footer = () => {
    const today = new Date();
    return (
        
        <div className='footer-container text-light text-center'>
            <span>
                © {today.getFullYear()} Smile Sharp Photography
            </span>
            <div className='logo-container'>
                <p>Contract with us</p>
                <a href="https://www.instagram.com/fardous_hossain_hridoy/" target={'_blank'}>
                    <img src={logo1} alt="" />
                </a>
                <a href="https://www.facebook.com/mdhridoy0185" target={'_blank'}>
                    <img src={logo2} alt="" />
                </a>
                <a href="https://twitter.com/obuj_reday" target={'_blank'}>
                    <img src={logo3} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/md-fardous-hossain-reday-41a304221/" target={'_blank'}>
                    <img src={logo4} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Footer;