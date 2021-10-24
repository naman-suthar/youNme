import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import Logo from '../../images/youNme_Logo.png'
import CollabBtn from './CollabBtn';
import { Link } from 'react-router-dom';
const PostCard = ({project,key}) => {
    
    
  return (
    <Card  style={{width: '300px',height: '350px'}} className="mx-3">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={project.proj_img}
      />
      <CardContent component={Link} to={`/project_desc/${project.id}`} style={{textDecoration:'none',color:'#000'}}>
        <Typography gutterBottom variant="h6" component="div">
          {project.proj_name}
        </Typography>
        <Typography variant="body2" color="secondary">
         Rs. {project.proj_price}
        </Typography>
        <Typography variant="body2" color="secondary">
         Members: {3}/{project.proj_members}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <CollabBtn id={project.id} type={project.proj_price}/>
      </CardActions>
    </Card>
  );
};

export default PostCard