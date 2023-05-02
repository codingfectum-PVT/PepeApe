import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import logo from "../../../../assets/images/logo.png";
import { DesktopMainMenu, MaterialUISwitch, MenuLink ,Div} from "../styles";
import { toggleTheme } from '../../../../Redux/switchTheme'
import { useDispatch, useSelector } from "react-redux";

const DesktopMenu = (props) => {
  const currentTheme = useSelector((state) => state.LDTheme.value)
  const dispatch = useDispatch();

  return (
    <Div>
    <DesktopMainMenu maxWidth="xl">
      <MenuLink href="/" p="0px">
        <img src={logo} width="215" height='78' alt="Logo" />
      </MenuLink>
      <div style={{display:"flex",alignItems:"center"}}>
        {props.menuList.map((value, i) => <MenuLink key={i} href={value.link} target={value.target} className={value.customClass}>{value.title}</MenuLink>)}
        {/* <FormControlLabel
          control={
            <MaterialUISwitch 
              sx={{ m: 1 }} 
              checked={currentTheme}
            />
          }
          onClick={() => dispatch(toggleTheme())}
        /> */}
      </div>
    </DesktopMainMenu>
    </Div>
  );
};

export default DesktopMenu;
