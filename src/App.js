import React, { useContext } from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import MyGroup from './components/MyGroups/MyGroup';

import { UserContext } from './context/UserContext';
function App() {
    const [user,setUser] = useContext(UserContext);
    return (
        
             <BrowserRouter>
           { user 
           ? <Container maxWidth='xl' style={{marginLeft:'0px',marginRight:'0px'}}>
               
                <Navbar />
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/chat" exact component={MyGroup} />
                
                </Switch>
                
            </Container>
            : <Auth/>}
            </BrowserRouter> 
        
       
    )
}

export default App
