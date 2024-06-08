import React from "react";
import { RiArrowRightCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import images

const Hero = () => {
  return (
    <section className="hero relative pt-32 pb-16">
      {/* gradient accents */}
      <div className="absolute -top-20 -left-48 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-pink-500 to-yellow-300 blur-[100px] 2xl:h-[550px] 2xl:w-[550px]" />
      <div className="absolute -bottom-12 -right-48 -z-10 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-yellow-300 to-pink-500 blur-[100px]" />

      <div className="hero__container container grid gap-12 2xl:max-w-5xl">
        <div className="hero__data justify-self-center text-center">
          <h1 className="hero__title section-title text-[72px] leading-[100%]">
            We're
            <br />
            <span className="relative">
              <div className="absolute bottom-6 left-0 -z-10 h-4 w-full rounded-full bg-blue-600" />
            </span>{" "}
            Roda Harapan
            <br />
            Semesta
            <span className="text-blue-600">.</span>
          </h1>
          <p className="hero__text section-text pb-8">
            Innovative technological solutions for your application development,
            <br />
            automation, server and network management,
            <br />
            telemetry systems, and data communication needs.
          </p>
          <Link to="/" className="hero__button button button-fill">
            Let's get started
            <RiArrowRightCircleLine className="button-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
