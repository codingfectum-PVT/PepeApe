import { Container, Grid } from '@mui/material'
import React from 'react'
import { P, SectionHeading, SectionSubHeading, SectionWrapper } from '../../Styles/style'

import roadmap from "../../../assets/images/roadmap.png"
import multiape from "../../../assets/images/multiape.png"
import styled from '@emotion/styled'
import ThemeContainer from '../../../Theme'
import { useTheme } from '@emotion/react'

const AboutImage = styled.img`
  width: 100%;
  height: auto;
`;
const VideoBK = styled.video`
  object-fit: cover;
  width: 100%;
  max-width: 100%;
  height: auto;
`; const GridHEading = styled(Grid)`
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
  max-width: ${(props) => (props.mw ? props.mw : "1180PX")};
  @media screen and (max-width:599px){
   /* max-width: ${(props) => (props.mw ? props.mw : "140PX")}; */

 }
`
const FeatureWrapper = styled.div`

height: 327px;
 background: 
    linear-gradient(#000000 0 0) padding-box, /*this is your grey background*/
    linear-gradient(319deg, #000,#000,#000, #1765FF) border-box;
  border: 1px solid transparent;
backdrop-filter: blur(13px) !important;
  padding: 20px;
`
const Div = styled.div`
padding:50px 0 0; 
display:flex;
gap:10px;
@media screen and (max-width:599px){
    display:grid;
}
`
const S7_Roadmap = () => {
    const theme = useTheme();
    return (
        <>
            <SectionWrapper p="4rem 0" id="roadmap" bgColor="#ED1C24">
                <Container maxWidth="xl">
                    <SectionHeading color={theme.textPrimary} data-aos="flip-up"
                        data-aos-easing="ease-in"
                        data-aos-delay="400"
                        data-aos-duration="500"
                        data-aos-offset="0" p="0" m="0">
                        Roadmap
                    </SectionHeading>
                    <SectionSubHeading color={theme.textPrimary} data-aos="flip-up"
                        data-aos-easing="ease-in"
                        data-aos-delay="400"
                        data-aos-duration="500"
                        data-aos-offset="0"
                        fs="20px" align="center" p="0 0 30px" m="0">
                        Where we’re going, we don’t need roads
                    </SectionSubHeading>
                    <GridHEading container spacing={3} justifyContent="center">
                        <GridImage item xs={12} md={8} lg={10} data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" data-aos-delay="400"
                            data-aos-duration="500">
                            <JOiningLinks src={roadmap} />
                            <Div>
                            <SectionSubHeading fs1199="20px"  p1199="0 29px 0 0" p="0 69px 0 0" fs="30px">1.Build</SectionSubHeading>
                            <SectionSubHeading  fs1199="20px" p1199="0 29px 0 0" p="0 69px 0 0" fs="30px">2.Stealth Launch</SectionSubHeading>
                            <SectionSubHeading  fs1199="20px" p1199="0 29px 0 0" p="0 69px 0 0" fs="30px">3.Grow Community</SectionSubHeading>
                            <SectionSubHeading fs1199="20px" p1199="0 29px 0 0" p="0 69px 0 0" fs="30px">4.Trend On Top</SectionSubHeading>
                            </Div>
                        </GridImage>
                    </GridHEading>
                </Container>

            </SectionWrapper>
            <AboutImage src={multiape}/>

        </>
    )
}

export default S7_Roadmap