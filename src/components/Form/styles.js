import { Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const MainContainer = styled(Paper)`
  padding:10px;

`
export const FormContainer = styled("form")({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
});

export const FileInput = styled(Box)`
width: 97%;
margin: 10px 0;
`