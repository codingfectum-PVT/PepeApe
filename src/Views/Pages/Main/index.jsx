import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Menu from "../../Components/Menu";

import Section1_Header from "../S1_Header";
import Section2_About from "../S2_About";
import Section3_Tokenomics from "../S3_foryou";
import S7_Roadmap from "../S5_Roadmap";
import Section9_Footer from "../S7_Footer";
import { PageWrapper } from "../../Styles/style";
import styled from "@emotion/styled";

const Wrapper = styled.div`
position: RELATIVE;
`
const MainPage = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.addEventListener("load", function () {
      Aos.init();
    });
  }, []);
  return (
    <>

      <PageWrapper  style={{overflow: "hidden"}}>
        <Wrapper>
          <Menu/>
          <Section1_Header />
        </Wrapper>
          <Section2_About />
          <Section3_Tokenomics />
          <S7_Roadmap />
          <Section9_Footer />
      </PageWrapper>
    </>
  );
};

export default MainPage;
