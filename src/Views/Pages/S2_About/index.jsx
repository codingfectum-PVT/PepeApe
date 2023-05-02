import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import React from "react";
import { P, SectionHeading, SectionSubHeading, SectionSubWrapper, SectionWrapper } from "../../Styles/style";
import aboutbg from "../../../assets/images/aboutbg.png"

import etherscan from "../../../assets/images/etherscan.png"
import uniswap from "../../../assets/images/uniswap.png"
import telegram from "../../../assets/images/telegram.png"
import twitter from "../../../assets/images/twitter.png"
import dextool from "../../../assets/images/dextool.png"
import { useTheme } from "@emotion/react";
const GridHEading = styled(Grid)`
/* padding: 50px 0; */
align-items: center;
place-content: ${(props) => (props.pc ? props.pc : "")};
`;
const GridImage = styled(Grid)`
padding: 50px 0;
/* place-content: ${(props) => (props.pc ? props.pc : "center")};
text-align: center; */
text-align: left;
`;
const JOiningLinks = styled.img`
  width: 100%;
  max-width: ${(props) => (props.mw ? props.mw : "70PX")};
  margin-right:10px;
  @media screen and (max-width:599px){
   /* max-width: ${(props) => (props.mw ? props.mw : "140PX")}; */

 }
`
const FeatureWrapper = styled.div`
background-image: url(${aboutbg});
background-repeat:no-repeat;
/* background-position:center; */
/* background-size:cover; */
padding: 30px 0px 30px 40px;
min-width: 920px;
min-height: 565px;
@media screen and (max-width:950px){
  padding: 20px 0px 20px 40px;
  background-position:center;
  background-size:cover;
  min-width: 720px;
    min-height: 565px;
  }
  @media screen and (max-width:750px){
  min-width: 120px;
}
@media screen and (max-width:500px){
  
  padding: 60px 0px 20px 10px;
  min-width: 120px;
  min-height: 765px;
}
@media screen and (max-width:400px){
  min-width: 120px;
  min-height: 840px;
}

`

const S2_Aboutus = () => {
  const theme = useTheme()
  return (
    <div>
      <SectionSubWrapper p="2rem 0 0" p799="0" p599="0" id="features">
        <Container maxWidth="xl">
          <GridHEading container spacing={3}>

            <GridImage item xs={12} md={6}
              data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-offset="0"
            >
             
              <FeatureWrapper>
                <SectionSubHeading
                  p="30px 0"
                  m="0"
                  data-aos="flip-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="400"
                  data-aos-duration="400"
                  data-aos-offset="0"
                >About
                </SectionSubHeading>
                <P
                  color={theme.textPrimary}

                  maxWidth="90%"
                  p="20px 0"
                  m="0"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in"
                  data-aos-delay="700"
                  data-aos-duration="600"
                  data-aos-offset="0"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</P>
                <a href="https://t.me/pepapecoin"
                target="blank"
                data-aos="zoom-in-up"
                data-aos-easing="ease-in"
                data-aos-delay="900"
                data-aos-duration="500"
                  data-aos-offset="0">
                  <JOiningLinks src={telegram} />
                </a>
                <a href="https://twitter.com/pepapecoin"
                  target="blank"
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="1000"
                  data-aos-duration="500"
                  data-aos-offset="0">
                  <JOiningLinks src={twitter} />
                </a>
                <a href="#" 
                  data-aos="zoom-in-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="1100"
                  data-aos-duration="500"
                  data-aos-offset="0">
                  <JOiningLinks src={uniswap} />
                </a>
                <a href="#" data-aos="zoom-in-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="1200"
                  data-aos-duration="500"
                  data-aos-offset="0">
                  <JOiningLinks src={dextool} />
                </a>
                <a href="#" data-aos="zoom-in-up"
                  data-aos-easing="ease-in"
                  data-aos-delay="1200"
                  data-aos-duration="500"
                  data-aos-offset="0">
                  <JOiningLinks src={etherscan} />
                </a>
              </FeatureWrapper>


            </GridImage>
            <GridImage item xs={12} md={6} data-aos="fade-up"
              data-aos-easing="ease-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-offset="0">

            </GridImage>

          </GridHEading>
        </Container>
      </SectionSubWrapper>
    </div>
  );
};

export default S2_Aboutus;
