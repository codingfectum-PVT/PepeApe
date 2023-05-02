import React from "react";

import { P, SectionHeading, SectionMainWrapper, SectionSubHeading, SectionWrapper, Text } from "../../Styles/style";

import buynow from "../../../assets/images/buynow.png"
import viewchart from "../../../assets/images/viewchart.png"
import mainimg from "../../../assets/images/mainimg.png"
import styled from "@emotion/styled";
import { Container, Grid, useTheme } from "@mui/material";

const VideoBK = styled.video`
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  height: auto;
`;
const GridHEading = styled(Grid)`
padding: 50px 0;
display: flex;
align-items: center;
@media screen and (max-width:599px){
  padding: 0px 0;
}
`;
const GridVideo = styled(Grid)`
`;
const GridImage = styled(Grid)`
padding: 50px 0;
text-align: left;

@media screen and (max-width:599px){
  padding: 0px 0;
}
`;
const JOiningLinks = styled.img`
  width: 100%;
  max-width: ${(props) => (props.mw ? props.mw : "220PX")};
  @media screen and (max-width:599px){
   /* max-width: ${(props) => (props.mw ? props.mw : "140PX")}; */

 }
 `
const SunImg = styled.img`
  width: 100%;
  height:auto;
  max-width: ${(props) => (props.mw ? props.mw : "564px")};

`
const BuyNow = styled.a`
text-decoration: none;
margin-right: 15px;
@media screen and (max-width:499px){

}

`
const Section1_Header = () => {
  const theme = useTheme()
  return (
    <SectionMainWrapper p="0rem 0" id="home">
      <Container maxWidth="xl">

        <GridHEading container >
          <GridVideo
            xs={12}
            md={6}
            data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-delay="400"
            data-aos-duration="700"
            data-aos-offset="0"
          >
            <SunImg src={mainimg}/>
          </GridVideo>
          <GridImage xs={12} md={6}>
            <SectionHeading
              p="30px 0 20PX"
              m="0"
              data-aos="flip-up"
              data-aos-easing="ease-in"
              data-aos-delay="400"
              data-aos-duration="600"
              data-aos-offset="0"
            >
           $PEPAPE
            </SectionHeading>
            <P
              maxWidth="90%"
              p="0 0 40px 0"
              m="0"

              data-aos="flip-up"
              data-aos-easing="ease-in"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-offset="0"
            >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </P>
            <div data-aos="flip-up"
              data-aos-easing="ease-in"
              data-aos-delay="700"
              data-aos-duration="500"
              data-aos-offset="0"
            >

              <BuyNow
                href="/"
                target="_blank">
                <JOiningLinks src={buynow}/>
              </BuyNow>
              <BuyNow bgColor={theme.textPrimary}
                Color={theme.textTertiary}
                data-aos="flip-up"
                data-aos-easing="ease-in"
                data-aos-delay="700"
                data-aos-duration="700"
                data-aos-offset="0"
                href="/"
                target="_blank">
                <JOiningLinks src={viewchart}/>
              </BuyNow>
            </div>
          
          </GridImage>

        </GridHEading>
      </Container>
    </SectionMainWrapper>
  );
};

export default Section1_Header;
