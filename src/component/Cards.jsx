import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { StyledCard, FlexBox } from "./style"
import { useNavigate } from 'react-router-dom'
 

export default function MediaCard(props) {
  const navigate = useNavigate(); 
  return (
    <StyledCard>
      <CardContent>
    <FlexBox>
        <Typography gutterBottom variant="h5" component="div">
         { props.data.title }
        </Typography>
        <Typography gutterBottom variant="h5" component="div" onClick={() => navigate(props.data.route)}>
         { props.data.icon }
        </Typography>
        </FlexBox>
        <Typography variant="body5" color="yellow">
          {props.data.description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}