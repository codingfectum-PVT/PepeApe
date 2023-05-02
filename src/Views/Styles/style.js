import styled from "@emotion/styled";
import up from "../../assets/images/sun.png"
import aboutbg from "../../assets/images/secbg.png"
const SectionSubtext = styled.p`
  font-size: 23px;
  margin: 10px 0px;
  font-family: Poppins-Bold;
  text-transform: uppercase;
`;
const Text = styled.p`
  margin: 30px 0px 20px 0px;
  font-family: "OCR";
  max-width: 50%;
  text-align: center;
  padding: 0 20px;
  font-size: 16px;
  z-index: 1;
  color: #fff;
  @media screen and (max-width: 899px) {
    max-width: 70%;
  }
  @media screen and (max-width: 599px) {
    max-width: 100%;
  }
`;

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.pageColor};
  min-height: 100vh;
`;

const SectionWrapper = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  padding: ${(props) => (props.p ? props.p : "0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  
  text-align: -webkit-center;
  text-align: -moz-center;
border-top:${(props) => (props.bt ? props.bt : "")};
  @media screen and (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "30px 0")};
  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "30px 0")};
  }
`;

const SectionMainWrapper = styled.div`
min-height: 100vh;
display: flex;
background-image: url(${up});
background-repeat:no-repeat;
background-position:top right;
background-size:auto;
align-items: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  padding: ${(props) => (props.p ? props.p : "0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};
border-top:${(props) => (props.bt ? props.bt : "")};
  @media screen and (max-width: 899px) {
    
background-image: unset;
  }
  @media screen and (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "30px 0")};
  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "30px 0")};
  }
`;

const SectionSubWrapper = styled.div`
min-height: 100vh;
display: flex;
background-image: url(${aboutbg});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
align-items: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  padding: ${(props) => (props.p ? props.p : "0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};
border-top:${(props) => (props.bt ? props.bt : "")};
  @media screen and (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "30px 0")};
  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "30px 0")};
  }
`;
const P = styled.p`
  font-weight: ${(props) => (props.fw ? props.fw : "")};
  font-family: "S-P";
  font-size: ${(props) => (props.fs ? props.fs : "18px")};
  color: ${(props) => (props.color ? props.color : props.theme.textSecondary)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin: ${(props) => (props.m ? props.m : "20px 0")};
  padding: ${(props) => (props.p ? props.p : "")};
  display: ${(props) => (props.display ? props.display : "")};
  justify-content: ${(props) => (props.jc ? props.jc : "")};
  @media (max-width: 600px) {
    font-size: ${(props) => (props.fs600px ? props.fs600px : "")};
    max-width: 100%;
  }
  @media (max-width: 1440px) and (max-height: 620px) {
    padding-top: ${(props) => (props.pt630 ? props.pt630 : "0px")};
  }
`;
const CustomContainer = styled.div`
  max-width: 2600px;
`;
const Heading = styled.div`
  font-size: ${(props) => (props.fs ? props.fs : "50px")};
  color: #fff;
  padding: ${(props) => (props.p ? props.p : "")};
  margin: ${(props) => (props.m ? props.m : "0")};
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  font-family: "P-R";

  @media (max-width: 1199px) {
    /* line-height: 50px;
    letter-spacing: 0px; */
    /* font-size: 60px; */
  }
  @media (max-width: 599px) {
    /* font-size: 18px; */
    /* line-height: 30px; */
  }
`;
const SectionHeading = styled.h2`
color: ${(props) => (props.color ? props.color : props.theme.textSecondary)};
  font-size: ${(props) => props.fs ? props.fs : "calc(65px + (26 - 22) * ((100vw - 146px) / (1600 - 250)))"};
font-family: "S-P";
  width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  padding: ${(props) => (props.p ? props.p : "10px 0")};
  text-align: ${(props) => (props.align ? props.align : "")};
  font-weight: bold;
  margin: ${(props) => (props.m ? props.m : "")};

  @media screen and (max-width: 972px) {
    font-size: ${(props) =>
    props.fs
      ? props.fs
      : "calc(40px + (26 - 20) * ((100vw - 16px) / (1600 - 250)))"};
  }
  @media screen and (max-width: 419px) {
    font-size: ${(props) =>
    props.fs
      ? props.fs
      : "calc(40px + (26 - 10) * ((100vw - 26px) / (1600 - 250)))"};
  }
`;
const SectionSubHeading = styled.h3`
  font-family: "S-P";
  font-size: ${(props) => (props.fs ? props.fs : "43px")};

color: ${(props) => (props.color ? props.color : props.theme.textPrimary)};
  padding: ${(props) => (props.p ? props.p : "20px 0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  /* line-height: ${(props) => (props.lh ? props.lh : "50px")}; */
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  @media screen and (max-width: 1199px) {
    /* font-size: 30px; */
    
    font-size: ${(props) => (props.fs1199 ? props.fs1199 : "")};
    padding: ${(props) => (props.p1199 ? props.p1199 : "")};
  }
  @media (max-width: 599px) {
    font-size: ${(props) => (props.fs599 ? props.fs599 : "")};
    padding: ${(props) => (props.p599 ? props.p599 : "")};
  }
  @media (max-width: 399px) {
    font-size: ${(props) => (props.fs399 ? props.fs399 : "")};
    padding: ${(props) => (props.p399 ? props.p399 : "")};
  }
`;
const SectionSmallHeading = styled.h3`
    font-family: "S-P";
  font-size: ${(props) => (props.fs ? props.fs : "20px")};
  text-transform: ${(props) => (props.tt ? props.tt : "")};
  color: ${(props) => (props.color ? props.color : props.theme.textPrimary)};
  padding: ${(props) => (props.p ? props.p : "0px 0 0px 0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
  text-align: ${(props) => (props.align ? props.align : "left")};
  @media (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "")};
    line-height: ${(props) => (props.lh ? props.lh : "")};
    max-width: 100%;
    font-size: ${(props) => (props.fs599 ? props.fs599 : "")};
  }
  @media (max-width: 599px) {
    line-height: ${(props) => (props.lh ? props.lh : "")};
    max-width: 100%;
    font-size: ${(props) => (props.fs599 ? props.fs599 : "")};
  }
`;
const FooterImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 90px;
`;

const LogoText = styled.div`
  color: ${(props) => props.theme.textPrimary};
  font-family: "Poppins-Bold";
  font-size: 23px;
  line-height: 21px;
`;
const LogoImage = styled.a`
  display: flex;
  gap: 13px;
  align-items: center;
`;

export {
  Text,SectionSubWrapper, SectionSubtext, SectionHeading,FooterImage, LogoText, LogoImage, PageWrapper, SectionWrapper, P,SectionSubHeading, CustomContainer, SectionSmallHeading, Heading, SectionMainWrapper};
