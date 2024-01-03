import Link from "next/link";
import React from "react";
import { BsFillLampFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const d = new Date();

  return (
    <footer>
      <div className="container footer-container">
        <div className="top">
          <div className="left">
            <h3>Company</h3>
            <div className="social">
              <div className="icon-container">
                <FaFacebookF className="icon" />
              </div>
              <div className="icon-container">
                <FaLinkedinIn className="icon" />
              </div>
              <div className="icon-container">
                <FaXTwitter className="icon" />
              </div>
            </div>
            <p className="p">Interio Studio. Ltd.</p>
            <p className="p">PO BOX 4120. 90000-1111.</p>
            <p className="p">Portland. United States.</p>
          </div>
          <div className="right">
            <div className="list">
                <h3>Contact</h3>
                <ul>
                    <li><a href="/">info@interio.com</a></li>
                    <li><a href="/">(+943)-555-2332</a></li>
                    <li><a href="/">(+943)-555-2332</a></li>
                    <li><a href="/">(+943)-555-2332</a></li>
                </ul>
            </div>
            <div className="list">
                <h3>About Us</h3>
                <ul>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Team</a></li>
                </ul>
            </div>
            <div className="list">
                <h3>Catalog</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Office</a></li>
                    <li><a href="/">Kitchen</a></li>
                    <li><a href="/">Industries</a></li>
                </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
            <div className="left">
            <Link className="logo" href="/">
              <BsFillLampFill className="icon" />
              <p>
                Interio<span>.</span>
              </p>
            </Link>

            <p>©{d.getFullYear()} Interio Studio.</p>
            </div>
            <div className="right">
                <a href="/">POLICEY.</a>
                <a href="/">COOKIES.</a>
                <a href="/">TERMS AND CONDITIONS.</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
