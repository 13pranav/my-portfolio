import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/pranav-kumar-097b34237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-2xl hover:text-primary"><FaLinkedin /></a>
          <a href="/" className="text-2xl hover:text-primary"><FaTwitter /></a>
          <a href="https://github.com/13pranav" className="text-2xl hover:text-primary"><FaGithub /></a>
          <a href="https://www.instagram.com/pranav_kumaar/?utm_source=qr&igsh=MXYycWFqandiOXc0Nw%3D%3D" className="text-2xl hover:text-primary"><FaInstagram /></a>
        </div>
        <p className="text-center">
          © {new Date().getFullYear()} Pranav Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;