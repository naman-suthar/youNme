import React,{useEffect, useContext} from 'react'
import { Paper, Button, Container, Avatar} from '@material-ui/core'
import useStyles from './styles'
// import app from '../firebase/Firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { UserContext } from '../../context/UserContext.js';
import Logo from '../../images/youNme_Logo.png';
import {ImGoogle} from 'react-icons/im'
function Auth() {
    const classes = useStyles();
    const [user,setUser] = useContext(UserContext)
    
    
    const onSubmit = () =>{
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
  }).catch((error) => {
    console.log(error);
  });
    };

useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        console.log("user Signed in");
        console.log(user);
        setUser(user);
      } 
    });
},[]);


    

    return (
        
             <Container component="main" maxWidth='xs'>
            <Paper className={classes.paper} elevation={2}>
            <Avatar src={Logo} style={{height:'200px',width:'200px'}}/>

               <Button variant='contained' color='primary' onClick={onSubmit} 
                style={{
                  
                  marginTop:'50px'
                }}
               >
                  <ImGoogle className="mx-3" />
                   Login with Google
                   
                   </Button> 
               
               
            </Paper>
        </Container>
       
    )
}

export default Auth
