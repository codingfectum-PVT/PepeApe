import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const GridHEading = styled(Grid)`
  padding: 50px 0;
  /* align-items: center;
  place-content: ${(props) => (props.pc ? props.pc : "")}; */
`;
const GridImage = styled(Grid)`
  /* place-content: ${(props) => (props.pc ? props.pc : "center")};
  text-align: center; */
`;
const ReadMore = styled.a`
  text-decoration: none;
  cursor: pointer;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "")};
  color: ${(props) => props.theme.textPrimary};
  border: 1px solid ${(props) => props.theme.textPrimary};
  text-transform: uppercase;
  border-radius: 22px;
  padding: 10px 30px;
  font-family: "Roboto-Medium";
  font-size: 14px;
  @media screen and (max-width: 899px) {
    padding: ${(props) => (props.p599 ? props.p599 : "5px 27px")};
  }

  /* box-shadow: ${(props) =>
    props.bs ? props.bs : "inset 0px 2px 5px 0px #FED0AE"}; */
  &:hover {
    opacity: 0.9;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
`;
const CharityImage = styled.img`
  width: 100%;
  height: auto;
  /* max-width: 300px; */
`;
export { GridHEading, GridImage, ReadMore, AboutImage, CharityImage };
