import React, { useContext } from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/Profile';
import CreateProject from './components/CreateProject/CreateProject';   
import { UserContext } from './context/UserContext';
import ProjectDesc from './components/ProjectDesc/ProjectDesc';
import MyCollab from './components/MyCollab/MyCollab';
import Search from './components/Search/Search';
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
                <Route path="/search" exact component={Search} />
                <Route path="/create_project" exact component={CreateProject} />
                <Route path="/project_desc" exact component={ProjectDesc} />
                <Route path="/my_collabs" exact component={MyCollab} />
               
                </Switch>
                
            </Container>
            : <Auth/>}
            </BrowserRouter> 
        
       
    )
}

export default App
