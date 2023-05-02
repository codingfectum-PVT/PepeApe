import styled from "@emotion/styled";
import { Container } from "@mui/material";

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 0px);
  padding: 20px 0px;
  @media screen and (max-width: 899px) {
    min-height: calc(100vh - 190px);
  }
`;

const ReadMore = styled.a`
 padding: 8px 40px !important;
  border-radius: 20px;
  background-image: linear-gradient(#D99349, #EFD17B,#D99349);
  color: black !important;
  font-weight: 500;
  font-family: "Raleway-SemiBold";
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#3E92EE")};
  border: ${(props) => (props.border ? props.border : "")};
  color: #fff;
  border-radius: 12px;
  margin: ${(props) => (props.mr ? props.mr : "")};
  font-size: 14px;
  @media screen and (max-width: 899px) {
    padding: ${(props) => (props.p599 ? props.p599 : "5px 27px")};
  }

  &:hover {
    opacity: 0.9;
  }
`;
const BothButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  z-index: 1;
  padding: 20px 0 0 0;
`;

const VideoBG = styled.video`
  object-fit: contain;
  width: 100%;
  height: auto;
  max-width: 30%;
  @media screen and (max-width:1100px){
  max-width: 40%;
}
  @media screen and (max-width:600px){
  max-width: 70%;
}
`;
export { HeaderContainer, ReadMore ,BothButtons,
  VideoBG };
