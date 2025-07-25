import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/shah.muhammad.niz.2025"
        className="home__social-icon"
        target="_blank"
      >
        <CiFacebook />
      </a>
      <a
        href="https://github.com/ShahNiz"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/shah-muhammad-niz-3a20b5349/"
        className="home__social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
