import { Container } from "@mui/material";
import React from "react";
import DesktopMenu from "./component/DesktopMenu";
import MobileMenu from "./component/MobileMenu";

const LockerMenu = (props) => {
  const menuList = [
    // You can pass 4 perameters for menu title, link, target and customClass

    {
      title: "Home",
      link: "/#home",
    },
    {
      title: "About",
      link: "#features",
    },
    {
      title: "Tokenomics",
      link: "#tokenomics",
    },
    {
      title: "Roadmap",
      link: "#roadmap",
    },
  ];
  return (
    <Container maxWidth="xl"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in"
      data-aos-delay="400"
      data-aos-duration="400"
      data-aos-offset="0">
      <DesktopMenu menuList={menuList} />
      <MobileMenu menuList={menuList} />
    </Container>
  );
};

export default LockerMenu;
