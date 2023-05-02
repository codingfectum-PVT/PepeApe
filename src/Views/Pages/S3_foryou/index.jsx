import React, { useRef, useState } from "react";
import { Container, Grid, useTheme } from "@mui/material";

import { P, SectionHeading, SectionSubHeading, SectionWrapper } from "../../Styles/style";

import { TWrapper, Name, Value, MainGrid, Textarea, ContractAdd } from "./styles";
import styled from "@emotion/styled";
import pepe from "../../../assets/images/pepe.png"
import buytax from "../../../assets/images/buytax.png"
import selltax from "../../../assets/images/selltax.png"
import totalsupply from "../../../assets/images/totalsupply.png"
import locked from "../../../assets/images/locked.png"
import ca from "../../../assets/images/ca.png"

const BuyTax = styled.div`
background-image: url(${props => props.bg ? props.bg : 'default.png'});
background-size: contain;
height: 207px;
    width: 330px;
background-repeat:no-repeat;
padding: ${(props) => (props.p ? props.p : "20px 0 0")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};

  @media screen and (max-width: 1199px) {
    padding: ${(props) => (props.p799 ? props.p799 : "")};
    height: 186px;
    width: 280px;
    /* padding:20px 0 -2px; */
  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p599 ? props.p599 : "30px 0")};
  }
`
const Contr = styled.div`
background-image: url(${props => props.bg ? props.bg : 'default.png'});
background-size: contain;
display:flex;
justify-content:space-between;
min-height: 83px;
    max-width: 1230px;
background-repeat:no-repeat;
padding: ${(props) => (props.p ? props.p : "20px 40px")};
  margin: ${(props) => (props.m ? props.m : "0")};
  text-align: ${(props) => (props.align ? props.align : "center")};

  @media screen and (max-width: 799px) {
    padding: ${(props) => (props.p799 ? props.p799 : "0px 40px")};
  }
  @media screen and (max-width: 599px) {
    padding: ${(props) => (props.p799 ? props.p799 : "20px 40px")};
    background-size: COVER;
    background-position:center;
    /* padding: ${(props) => (props.p599 ? props.p599 : "30px 0")}; */
  }
`

const Img = styled.img`
  width:100%;
  height:auto;
  /* max-width: 550px; */
`
const RefelcImg = styled.img`
position:absolute;
left: 50px;
@media screen and (max-width:499px) {
  left: 20px;
  
}
`
const GridsWrap = styled(Grid)`
  @media screen and (max-width:599px) {

  
}
`
const Containers = styled(Container)`
  position: relative;
`
const Index = () => {
  const theme = useTheme()

  return (
    <SectionWrapper align="center" p="2rem 0" id="tokenomics">
      <Container maxWidth="xl">
        <SectionHeading m="0" p="30px 0 0" data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-offset="0">$PEPAPE Is For You</SectionHeading>
        <SectionSubHeading align="center" fs="20px" color={theme.textSecondary} data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-delay="400"
            data-aos-duration="700"
            data-aos-offset="0" >No taxes, no nonsense. Simple tokenomics to make $PEPAPE sustainable long term.</SectionSubHeading>
        <MainGrid container  spacing={2}justifyContent="center">
          <GridsWrap item xs={12} md={3.5} data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-delay="600"
            data-aos-duration="1000">
            <BuyTax bg={buytax}>
              <SectionSubHeading fs1199="25px"  align="center" >0%</SectionSubHeading>
              <SectionSubHeading fs1199="20px" align="center" m="0" p="0" fs="30px">Buy Tax</SectionSubHeading>
            </BuyTax>
            <BuyTax bg={selltax}>
              <SectionSubHeading fs1199="25px" align="center" >0%</SectionSubHeading>
              <SectionSubHeading fs1199="20px" align="center" m="0" p="0" fs="30px">Sell Tax</SectionSubHeading>
            </BuyTax>
          </GridsWrap>
          <Grid item xs={12} md={3.5} data-aos="flip-down"
            data-aos-easing="ease-in"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-offset="0">
            <Img src={pepe} />
          </Grid>
          <Grid item xs={12} md={3.5}  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-delay="700"
            data-aos-duration="1000">
            <BuyTax bg={totalsupply}>
              <SectionSubHeading fs1199="25px" align="center" >0%</SectionSubHeading>
              <SectionSubHeading fs1199="20px" align="center" m="0" p="0" fs="30px">Buy Tax</SectionSubHeading>
            </BuyTax>
            <BuyTax bg={locked}>
              <SectionSubHeading fs1199="25px" align="center" >0%</SectionSubHeading>
              <SectionSubHeading fs1199="20px" align="center" m="0" p="0" fs="30px">Sell Tax</SectionSubHeading>
            </BuyTax>
          </Grid>
        </MainGrid>
        <Grid xs={12}  data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-delay="800"
            data-aos-duration="1000">

          <Contr bg={ca}>
            <SectionSubHeading color={theme.textSecondary} align="center" m="0" p="0" fs="23px">Contract</SectionSubHeading>
            <SectionSubHeading color={theme.textSecondary} align="center" m="0" p="0" fs="23px">TBA</SectionSubHeading>
          </Contr>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default Index;
