import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import Logo from '../../images/youNme_Logo.png'
import CollabBtn from './CollabBtn';
const PostCard = () => {
  return (
    <Card style={{width: '300px',height: '350px'}} className="mx-3">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lizard- The Action movie
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Rs.250
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Members: 3/10
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <CollabBtn/>
      </CardActions>
    </Card>
  );
};

export default PostCard