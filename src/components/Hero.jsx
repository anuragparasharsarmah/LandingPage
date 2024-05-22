import { curve, robot, heroImage } from "../assets";
import Button from "./Button";
import { Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import {
  faChartLine,
  faCalculator,
  faCode,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const parallaxRef = useRef(null);

  const handleGetStartedClick = () => {
    window.parent.postMessage({ action: "navigate", path: "/register" }, "*");
  };

  return (
    <div>
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Unlock Your Success Story in Tech with {` `}
            <span className="inline-block relative">
              OnClique{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Reach new heights through personalized training. Elevate your coding
            skills with OnClique.
          </p>
          <Button white onClick={handleGetStartedClick}>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1.5rem]">
              <div className="bg-n-10 rounded-t-[0.9rem] lg:rounded-t-[1.5rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] lg:rounded-t-[1.5rem]">
                <div
                  className="aspect-[33/40] rounded-t-[0.9rem] overflow-hidden md:aspect-[688/490] md:rounded-t-[1rem] lg:aspect-[1024/490] lg:rounded-t-[1.5rem]"
                  style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundPosition: "center",
                  }}
                ></div>

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    <li className="p-5">
                      <FontAwesomeIcon icon={faChartLine} size="lg" />
                    </li>
                    <li className="p-5">
                      <FontAwesomeIcon icon={faCalculator} size="lg" />
                    </li>
                    <li className="p-5">
                      <FontAwesomeIcon icon={faCode} size="lg" />
                    </li>
                    <li className="p-5">
                      <FontAwesomeIcon icon={faDatabase} size="lg" />
                    </li>
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]"></div>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </div>
  );
};

export default Hero;
