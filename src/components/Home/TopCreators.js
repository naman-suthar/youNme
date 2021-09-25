import React from 'react'
import FolderIcon from '@material-ui/icons/Folder'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core'
function TopCreators() {
    function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
      }
    return (
        <Grid  >
          <Typography variant="h5">
            Top Creators
          </Typography>
          <div >
            <List >
              {generate(
                <ListItem  style={{borderBottom:'3px solid #481380'}}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
                
              )}
            </List>
          </div>
        </Grid>
    )
}

export default TopCreators
