import React, { useContext,useState } from 'react'
import {AppBar, Toolbar, Typography,Button, Avatar} from '@material-ui/core'
import { Link } from 'react-router-dom'

import { getAuth,signOut } from "firebase/auth";

import logo from '../../images/youNme_Logo.png'
import {UserContext} from '../../context/UserContext.js'
import UserCorner from './UserCorner';



function Navbar() {
    const [user,setUser] = useContext(UserContext);
    
    const logOutme = ()=>{
        const auth = getAuth();
        signOut(auth);
        setUser(null)
    }
    return (
        <AppBar position='fixed' style={{backgroundColor:'#FEFEFE',color:'black',borderBottom:'5px solid #9E58D6'}}>
           <Toolbar >
           <div style={{flex:'1',}}>
           <img src={logo} width='60px' />
           </div>
           <Button component={Link} to='/' variant='text'color='inherit'  >Home</Button>
           <Button component={Link} to='/my_collabs' variant='text'color='inherit' >My Collabs</Button>
           <Button component={Link} to='/create_project' variant='text'color='inherit' >Create Project</Button>
           <Button component={Link} to='/search' variant='text'color='inherit' >Search</Button>
           <Button component={Link} to='/profile' variant='text'color='inherit' >Profile</Button>
           <Button component={Link} to='/' variant='outlined' className='float-end' color='secondary' onClick={logOutme}>LogOut</Button>
            
           <UserCorner user={user}/>
           </Toolbar>
        </AppBar>
    )
}

export default Navbar
