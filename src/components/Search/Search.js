import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React, { useState } from 'react'
import Input from '../Auth/Input'
import { projectFirestore } from '../firebase/Firestorage'

const Search = () => {
    const [query,setQuery] = useState("");
    const [res_photo,setResPhoto] = useState("");
    const [res_name,setResName] = useState("");
    const [res_email,setEmail] = useState("");

    
    const handleQuery = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        
    }
    
    
    const getSearch = (query) => {
        projectFirestore.collection('users').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if(query === doc.data().name){
                    console.log(doc.data().email)
                    
                    setEmail(doc.data().email);
                    setResName(doc.data().name);
                    setResPhoto(doc.data().photoUrl);
                }
            })
        })
    }
    return (
        <div style={{position:'relative', top: '180px',width:'95vw',color:'black'}}>
            <div className="d-flex w-50" style={{height:'50px',margin:'0 auto'}}>
                <div style={{flex:'2',height:'20px'}}>
                <Input handleChange={handleQuery} name="search" type="text" placeholder="Search Projects or creators" />
                </div>
                <div style={{flex:'1',display:'flex',alignItems:"center",padding:'0 20px'}} >
                <Button onClick={()=> getSearch(query)} variant="contained" color="primary" style={{height:'100%'}} >Search</Button>
                </div>
                
            </div>
            <div style={{marginTop:'30px'}}>
            <p className="results">Results</p>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                 
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar src={res_photo} />
                               
                           </ListItemAvatar>
                           <ListItemText primary={res_name} secondary={res_email} />
                      </ListItem>
                     
    </List>
            </div>
        </div>
    )
}

export default Search
