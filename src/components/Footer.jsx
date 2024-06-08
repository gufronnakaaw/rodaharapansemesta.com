import React from "react";
import { Link } from "react-router-dom";

// react icons
import {
  RiGithubFill,
  RiInstagramFill,
  RiTwitchFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 pt-24 pb-8">
      <div className="subscribe__container container grid gap-20 2xl:max-w-5xl">
        <div className="subscribe__group grid gap-12 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:justify-items-center">
          <div className="subscribe__content">
            <Link
              to="/"
              className="subscribe__content-logo text-[17px] font-bold text-white"
            >
              Roda Harapan Semesta<span className="text-blue-600">.</span>
            </Link>
            <p className="subscribe__content-text section-text pt-2 text-[14px] text-white">
              Roda Harapan Semesta is company that provides innovative solutions
              for application development, automation, server and network
              management, telemetry systems, and reliable data communication.
            </p>
          </div>

          <div className="subscribe__content">
            <h3 className="subscribe__content-title pb-4 text-[28px] font-bold text-white">
              Get in touch<span className="text-blue-600">.</span>
            </h3>
            <p className="subscribe__content-text section-text text-white">
              Question or feedback? <br />
              We'd love to hear from you.
            </p>
            <div className="subscribe__content-socials inline-flex w-max items-center gap-4 pt-8 text-[1.8rem] text-white">
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiInstagramFill />
              </Link>
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiTwitterFill />
              </Link>
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiTwitchFill />
              </Link>
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiYoutubeFill />
              </Link>
              <Link
                to="/"
                className="subscribe__content-icon hover:text-blue-600"
              >
                <RiGithubFill />
              </Link>
            </div>
          </div>
        </div>

        <p className="subscribe__copyrights pt-8 text-center text-[15px] leading-text text-white">
          &copy; {new Date().getFullYear()} - rodaharapansemesta.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
