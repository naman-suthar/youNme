import React from 'react'
import './Header.css'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
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
        <div style={{display:'flex',justifyContent:'center'}}>
            <Button component={Link} to='/create_project' id='btn1'><AddIcon fontSize='large' />Create Project</Button>
            
        </div>
    )
}

export default Header
