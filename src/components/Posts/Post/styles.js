
import { Card, CardMedia,CardActions, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

export const MainCard = styled(Card)`
display:flex;
    flex-direction: column;
    justify-content:space-between;
    border-radius:15px;
    height:100%;
    position: relative;
`
export const Media = styled(CardMedia)`
    height: 0;
    padding-top: 56.25%;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode:darken;
`

export const Div = styled("div")({
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
})
export const Overlay = styled("div")({
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
})
export const Details = styled("div")({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
})

export const Title = styled(Typography)`
padding: 0 16px;
`

export const Actions = styled(CardActions)`
padding: 0 16px 8px 16px;
display: flex;
justify-content: space-between;
`
