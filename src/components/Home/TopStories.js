import { Avatar, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core'
import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import FolderIcon from '@material-ui/icons/Folder'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function TopStories() {
  const [items,setItems] = useState([]);
  const getProjects = () =>{
    axios.get("http://localhost:5000/projects")
    .then((res)=>{
      console.log(res.data);
      setItems(res.data);
    })
  }
  useEffect(() => {
    getProjects()
    
  }, [])
    
    return (
        <Grid >
          <Typography variant="h5">
            Top Projects
          </Typography>
          <div >
            <List >
              { 
              items.map(item => (
                <ListItem  style={{borderBottom:'3px solid #481380'}} key={item.index}>
                <ListItemAvatar>
                  <Avatar src={item.userPhoto} />
                  </ListItemAvatar>
                <ListItemText
                  primary={item.project_name} 
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <ArrowForwardIosIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              ))
              }
               
                
              
            </List>
          </div>
        </Grid>
    )
}

export default TopStories
