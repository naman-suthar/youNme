import React,{useState} from 'react'
import './Header.css'
import AddIcon from '@material-ui/icons/Add';
import CreateProject from './CreateProject';
import CreatePost from './CreatePost';

function Header() {
    const emails = ['username@gmail.com', 'user02@gmail.com'];
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    
      const handleClose = (value) => {
        setOpen1(false);
        setOpen2(false)
        setSelectedValue(value);
      };
    
    return (
        <div style={{display:'flex'}}>
            <button onClick={() => setOpen1(true)} id='btn1'><AddIcon fontSize='large' />Create Project</button>
            <button onClick={() => setOpen2(true)} id='btn2'><AddIcon fontSize='large' />Create Post</button>
            <CreateProject selectedValue={selectedValue} open={open1} onClose={handleClose} setOpen1={setOpen1}/>
            <CreatePost  selectedValue={selectedValue} open={open2} onClose={handleClose}/>
        </div>
    )
}

export default Header
