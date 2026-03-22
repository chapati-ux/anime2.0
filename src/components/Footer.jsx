import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-screen py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo / Title */}
        <div>
          <h1 className="text-3xl font-bold text-white">AnimeHub</h1>
          <p className="text-gray-400 mt-2">
            Explore your favorite anime movies and series.
          </p>
        </div>

        {/* Contact Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Me</h2>

          <div className="flex flex-col gap-2 text-gray-300">
              <div className="flex items-center gap-1 text-2xl">
              <CgMail className="" />

              <a
                href="mailto:jpujari575@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Gmail
              </a>
            </div>

            <div className="flex items-center gap-1 text-2xl">
              <FaLinkedin  />
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Linkedin
              </a>
            </div>

            <div className="flex items-center gap-1 text-2xl">
              <FaWhatsapp />


              <a
                href="https://Wa.me/+919372830421"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                Whatsapp
              </a>
            </div>

            <div className="flex items-center gap-1 text-2xl">
              <FaGithub />

              <a
                href="https://github.com/chapati-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="text-gray-400">
          <h2 className="text-xl font-bold mb-2">Credits</h2>

          <p>
            Developed by <span className="text-white">Jayesh Pujari</span>
          </p>

          <p className="mt-1">
            API by{"  "}
            <span className="text-white ">
              <a
                href="https://jikan.moe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jikan API
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AnimeHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
