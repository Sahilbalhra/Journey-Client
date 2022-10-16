import { AppBar, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export const NavBar = styled(AppBar)`
    border-radius: 15px;
    margin: 30px 0;
    justify-content: center
`

export const Heading = styled(Typography)`
  color:rgba(0,183,255,1);
  text-decoration: none;
`

export const Container = styled("div")({
  display: "flex",
  padding: "1rem",
  justifyContent: "space-between",
})


