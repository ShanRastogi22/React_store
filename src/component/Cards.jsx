import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { StyledCard, FlexBox } from "./style"
import { DisplaySettings } from '@mui/icons-material';
 

export default function MediaCard(props) {
  return (
    <StyledCard>
      <CardContent>
    <FlexBox>
        <Typography gutterBottom variant="h5" component="div">
         { props.data.title }
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
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