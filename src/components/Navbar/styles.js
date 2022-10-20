import { AppBar, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export const NavBar = styled(AppBar)`
    border-radius: 15px;
    margin: 30px 0;
    justify-content: center;
    background-color: white;
`

export const Heading = styled(Typography)`
  display:flex;
  margin-Right: 10px;
  flexGrow: 1;
  font-weight: 700;
  letter-spacing: .3rem;
  color:rgba(0,183,255,1);
  text-decoration: none;
`

export const Container = styled("div")({
  display: "flex",
  padding: "1rem",
  justifyContent: "space-between",
})


