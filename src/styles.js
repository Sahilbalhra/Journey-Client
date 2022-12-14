
import { AppBar, Typography, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';

export const NavBar = styled(AppBar)`
    border-radius: 15px;
    margin: 30px 0;
    // display: flex;
    // flexDirection: row;
    // justifyContent: center;
    // alignItems: center;
`

export const Heading = styled(Typography)`
  color:rgba(0,183,255,1);
`

export const GridContainer = styled(Grid)` 
${props => props.theme.breakpoints.down("sm")} {
  flex-direction:column-reverse;
}      
`