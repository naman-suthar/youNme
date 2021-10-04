import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import Cover from '../../images/cover.jpg'
import PersonIcon from '@material-ui/icons/Person'
import CollabBtn from '../PostCard/CollabBtn'
const ProjectDesc = () => {
    return (
        <div style={{position:'relative', top: '80px',width:'95vw'}}>
            <img src={Cover} alt="Cover photo" style={{height:'300px',width:'100%'}}/>
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
            <h3>Project Title</h3>
            </div>
            
            <div style={{marginTop:'30px'}}>
            <p className="head">Description</p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            </div>
            <div style={{marginTop:'30px'}}>
            <p className="head">Created By</p>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
             <ListItem>
                 <ListItemAvatar>
                      <Avatar>
                          <PersonIcon />
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary="Naman Suthar" secondary="Sept 9, 2021" />
                </ListItem>
     
             </List>
            </div>
            <div style={{marginTop:'30px'}}>
            <p className="head">Members</p>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
             <ListItem>
                 <ListItemAvatar>
                      <Avatar>
                          <PersonIcon />
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary="Akash Kulal" secondary="Sept 10, 2021" />
                </ListItem>
                <ListItem >
                 <ListItemAvatar>
                      <Avatar>
                          <PersonIcon />
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary="Sushant Singh" secondary="Sept 10, 2021" />
                </ListItem>
                <ListItem>
                 <ListItemAvatar>
                      <Avatar>
                          <PersonIcon />
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary="Mahendra Singh" secondary="Sept 11, 2021" />
                </ListItem>
             </List>
            </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                <div className="w-50">
                <CollabBtn/>
                </div>
            
            </div>

        </div>
    )
}

export default ProjectDesc
