import { useTheme } from '@emotion/react'
import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import { Heading, P, SectionSmallHeading, SectionSubHeading, SectionWrapper } from '../../Styles/style'

import Twitter from "../../../assets/images/twitter.png"
import etherscan from "../../../assets/images/etherscan.png"
import Telegram from "../../../assets/images/telegram.png"
import uniswap from "../../../assets/images/uniswap.png"
import dextool from "../../../assets/images/dextool.png"
import contact from "../../../assets/images/contact.png"
import pepefooter from "../../../assets/images/pepefooter.png"
import styled from '@emotion/styled'

const Img = styled.img`
    width:100%;
    height:auto;
    max-width:250px;
    margin:30px 0;

`
const FirstGrid = styled(Grid)`
text-align:left;
`;
const SocialMedia = styled.div`
display: flex;
padding: 10px 0;
align-items: center;
`
const SocialLinks = styled.a`
text-decoration:NONE;
`
const SocialImage = styled.img`
width:100% ;
height: auto;
max-width: 80px;
padding-right:15px;
`
const Mainimg = styled.img`
width:100% ;
height: auto;
max-width:200px;
`
const BuyNow = styled.a`
text-decoration: none;
background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.textSecondary)};
color: ${(props) => (props.Color ? props.Color : props.theme.textPrimary)};
padding: 12px 20px;
border-radius: 5px;
display: flex;
max-width: 160px;
align-items: center;

`
const Div = styled.div`
position: relative;
:after{
    content: '';
  position: absolute;
  top: 0;
  left: 50px;
  right: 50px;
  height: 1px; /* adjust as needed */
  background: linear-gradient(to left, transparent, #000, transparent), /* left-fading gradient */
              linear-gradient(to right, transparent, #000, transparent); /* right-fading gradient */
  background-position: left top, right top;
  background-repeat: no-repeat;
  }
`
const Section9_Footer = () => {

    const theme = useTheme()
    return (
        <SectionWrapper p="4rem 0" bgColor={theme.textPrimary}>
            <Container maxWidth="xl">
                <Grid container>
                    <FirstGrid item xs={12} md={5}
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-delay="400"
                        data-aos-duration="500">
                        <Grid container>
                            <Grid xs={12} md={5} data-aos="flip-down"
                                data-aos-easing="ease-in"
                                data-aos-delay="400"
                                data-aos-duration="700"
                                data-aos-offset="0">
                                <Mainimg src={pepefooter} />
                            </Grid>
                            <Grid xs={12} md={7}>
                                <SectionSmallHeading color={theme.textSecondary}>
                                    Quicklinks
                                </SectionSmallHeading>
                                <SocialLinks href="/#home">
                                    <P color={theme.textSecondary} p="10px 0" m="0">Home</P>
                                </SocialLinks>
                                <SocialLinks href="/#features">
                                    <P color={theme.textSecondary} p="10px 0" m="0">About</P>
                                </SocialLinks>
                                <SocialLinks href="/#tokenomics">
                                    <P color={theme.textSecondary} p="10px 0" m="0"> Tokenomics</P>
                                </SocialLinks>
                                <SocialLinks href="/#roadmap">
                                    <P color={theme.textSecondary} p="10px 0" m="0"> Roadmap</P>
                                </SocialLinks>
                            </Grid>
                        </Grid>
                        <P color={theme.textSecondary}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </P>

                    </FirstGrid>
                    <Grid item xs={12} md={3}>
                    </Grid>
                    <FirstGrid item xs={12} md={4}
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" data-aos-delay="600"
                        data-aos-duration="500"
                    >
                        <SectionSmallHeading color={theme.textSecondary}>
                            Keep In Touch
                        </SectionSmallHeading>
                        <Img src={contact} />
                        <SectionSmallHeading color={theme.textSecondary}>
                            Follow Us
                        </SectionSmallHeading>
                        <SocialMedia>
                            <SocialLinks data-aos="zoom-in-up"
                                data-aos-easing="ease-in"
                                data-aos-delay="700"
                                data-aos-duration="500"
                                data-aos-offset="0" href="https://t.me/pepapecoin" target="blank"><SocialImage src={Telegram} /></SocialLinks>
                            <SocialLinks data-aos="zoom-in-up"
                                data-aos-easing="ease-in"
                                data-aos-delay="800"
                                data-aos-duration="500"
                                data-aos-offset="0" href="https://twitter.com/pepapecoin" target="blank"><SocialImage src={Twitter} /></SocialLinks>
                            <SocialLinks data-aos="zoom-in-up"
                                data-aos-easing="ease-in"
                                data-aos-delay="900"
                                data-aos-duration="500"
                                data-aos-offset="0" href="" target="blank"><SocialImage src={etherscan} /></SocialLinks>
                            <SocialLinks data-aos="zoom-in-up"
                                data-aos-easing="ease-in"
                                data-aos-delay="1000"
                                data-aos-duration="500"
                                data-aos-offset="0" href="" target="blank"><SocialImage src={uniswap} /></SocialLinks>
                            <SocialLinks data-aos="zoom-in-up"
                                data-aos-easing="ease-in"
                                data-aos-delay="1100"
                                data-aos-duration="500"
                                data-aos-offset="0" href="" target="blank"><SocialImage src={dextool} /></SocialLinks>
                        </SocialMedia>
                    </FirstGrid>
                </Grid>

            </Container>
        </SectionWrapper>
    )
}

export default Section9_Footer