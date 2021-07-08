import React from "react";
import {
  IconDribbble,
  IconFacebook,
  IconGooglePlus,
  IconTwitter,
  IconYoutube,
} from "../../assets/svg";

const Footer = () => {
  return (
    <footer id={"footer-principal"}>
      <div className={"col1"}>
        <h4>
          &copy; 2021 - <span>Tita media</span> All Right Reserved
        </h4>
      </div>
      <div className={"col2"}>
        <a href={"#!"}>
          <IconFacebook />
        </a>
        <a href={"#!"}>
          <IconTwitter />
        </a>
        <a href={"#!"}>
          <IconDribbble />
        </a>
        <a href={"#!"}>
          <IconGooglePlus />
        </a>
        <a href={"#!"}>
          <IconYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
