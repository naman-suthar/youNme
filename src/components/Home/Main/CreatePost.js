import React from 'react'
import { Avatar, Button, Dialog, DialogTitle, Typography } from '@material-ui/core'
import axios from 'axios';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import avatar from '../../../images/youNme_Logo.png';

function CreatePost(props) {
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
      onClose(selectedValue);
    };
    const submitPost = async () => {
      await axios.post("http://localhost:5000/posts");
      console.log("completed")
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
        <DialogTitle id="simple-dialog-title">Create Post</DialogTitle>
        <form style={{display:'flex',flexDirection:'column'}} style={{width:'50vw'}}>
            <div style={{display:'flex'}}>
                <Avatar className='mx-2' src={avatar}/>
                <Typography variant='h6' >userName</Typography>
            </div>
            <div>
            <textarea rows='5' className='w-75' placeholder="What's in your mind?" />
            </div>
            <Button color='primary' variant='outlined'> <AddPhotoAlternateIcon />Upload a Photo</Button><br/>
            <Button color='primary' variant='contained' onClick={submitPost} >Post</Button>
        </form>
      </Dialog>
    )
}

export default CreatePost
