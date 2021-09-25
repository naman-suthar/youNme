import React,{useContext, useState} from 'react';
import { Avatar, Button, Dialog, DialogTitle, Typography } from '@material-ui/core'
import axios from 'axios'
import {UserContext} from '../../../context/UserContext.js'
import avatar from '../../../images/youNme_Logo.png'
import './CreateProject.css'
function CreateProject(props) {
    const { onClose, selectedValue, open } = props;
    const [user,setUser] = useContext(UserContext);
    const [name, setName] = useState("");
    const [desc,setDesc] = useState("");
    const [location,setLocation] = useState("");

    const handleClose = () => {
      onClose(selectedValue);
    };
    
    const handleSubmit = () =>{
      const project = {
        userName: user.displayName,
        userPhoto: user.photoURL,
        project_name: name,
        project_description: desc,
        location: location
      }
      axios.post("http://localhost:5000/projects",project)
      .then((resp)=>{
        console.log(resp);
        props.setOpen1(false);
      })
    }
   
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
      <DialogTitle id="simple-dialog-title">Create Project</DialogTitle>
      <div style={{display:'flex',alignItems:'center'}}>
              <Avatar className='mx-2' src={user.photoURL}/>
              <Typography variant='body1' >
                {user.displayName}
              </Typography>
          </div>
      <form style={{display:'flex',flexDirection:'column'}} style={{width:'35vw'}}>
          <input placeholder='Project Name' value={name} onChange={(e) => setName(e.target.value)}/> <br/>
          <input placeholder='Project Description' value={desc} onChange={(e) => setDesc(e.target.value)}/> <br/>
          <input placeholder='Project Location' value={location} onChange={(e) => setLocation(e.target.value)}/> <br/>
         
          <input placeholder='Perks'/> <br/>
          <Typography variant='h6'>Roles to Hire</Typography>

          <Button color='primary' variant='contained' onClick={handleSubmit}>Post</Button>
      </form>
    </Dialog>
    )
}

export default CreateProject