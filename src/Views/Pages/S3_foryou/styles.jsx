import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const TWrapper = styled.div`
/* background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#0E0E0E")}; */
border: 2px solid #96BEDC;
background-image: ${(props) => (props.bgimg ? props.bgimg : "")} ;
border-radius: ${(props) => (props.br ? props.br : "")} ;
display: flex;
justify-content: space-between;
align-items: center;
padding: ${(props) => (props.p ? props.p : "20px 10px")};
`
const Name = styled.div`
font-family: "OCRA";
color: ${(props) => (props.Namecolor ? props.Namecolor : "#28A0F0")};
`
const Value = styled.div`
font-family: "OCRA";
color: ${(props) => (props.color ? props.color : "#FFF")};
`
const MainGrid = styled(Grid)`
padding: 30px 0;
`
const Textarea = styled.textarea`
font-family: "OCRA";

padding: 16px 0 0;
  font-size: 16px;
  resize: none;
  overflow: hidden;
  border: none;
  background: transparent;
  color: #FFF;
  text-align: -webkit-center;
 width: 40px;
  /* width: 400px; */
  outline: none;
  @media screen and (max-width: 599px) {
    width: 170px;
  }
`;
const ContractAdd = styled.span`
  word-break: keep-all;
  place-content: center;
  display: flex;
  align-items: CENTER;
  @media screen and (max-width: 1200px) {
    /* display: grid; */
  }
`;
export { TWrapper, Name, Value, MainGrid, Textarea, ContractAdd }