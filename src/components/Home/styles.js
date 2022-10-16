import {  Grid } from "@mui/material";
import { styled } from '@mui/material/styles';

export const GridContainer = styled(Grid)` 
${props => props.theme.breakpoints.down("sm")} {
  flex-direction:column-reverse;
}      
`