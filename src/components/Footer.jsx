import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <div>
      <div className="container flex justify-center items-center gap-10 mb-5">
        <p className="caption text-n-4 text-center">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
