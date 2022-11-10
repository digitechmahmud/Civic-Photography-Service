import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/img.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content bottom-0">
            <div>
                <img width={70} height={50} src={img} alt="" />
                <p className='font-bold'>CIVIC Photography<br />Providing reliable service since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/services" className="link link-hover">Wedding</Link>
                <Link to="/services" className="link link-hover">Interior</Link>
                <Link to="/services" className="link link-hover">Industry</Link>
                <Link to="/services" className="link link-hover">Corporate</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/" className="link link-hover">About us</Link>
                <Link to="/" className="link link-hover">Contact</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
                <Link to="/" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;