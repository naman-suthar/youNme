import { Avatar, Box, Button, FormControl, FormControlLabel, FormLabel, Grid, List, ListItem, ListItemAvatar, ListItemText, Radio, RadioGroup, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Input from '../Auth/Input';
import { collection ,getDocs,query, where } from '@firebase/firestore';
import { projectFirestore } from '../firebase/Firestorage'
import PostCard from '../PostCard/PostCard'

const Search = () => {
    const userCollectionRef = collection(projectFirestore,"users");
    const freeProjectRef = collection(projectFirestore,"free_Projects");
    const paidProjectRef = collection(projectFirestore,"paid_Projects");
    const [searchQuery,setQuery] = useState("");
    const [res_photo,setResPhoto] = useState("");
    const [res_name,setResName] = useState("");
    const [res_email,setEmail] = useState("");
    const [value,setValue] = useState("project")
    const [projects,setProjects] = useState([]);

    const handleQuery = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        
    }
    const handleChange =(e) => {
        setValue(e.target.value)
    }


    const getSearch = async (searchquery) => {
        if(value === "user"){
           console.log("Searching");
           const q = query(collection(projectFirestore, "users"), where('name', '>=', searchquery),where('name', '<=', searchquery+ '\uf8ff'))
            
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
             console.log(doc.id, " => ", doc.data());
                });
                }
            else  {
                console.log("Searching Project");
            const data = await getDocs(freeProjectRef);
            setProjects(data.docs.map(doc => ({ ...doc.data() })));
            console.log(projects)
                        }
        
    }
    return (
        <div style={{position:'relative', top: '180px',width:'95vw',color:'black'}}>
            <div className="d-flex w-50" style={{height:'50px',margin:'0 auto'}}>
                <div style={{flex:'2',height:'20px'}}>
                <Input handleChange={handleQuery} name="search" type="text" placeholder="Search Projects or creators" />
                </div>
                <div style={{flex:'1',display:'flex',alignItems:"center",padding:'0 20px'}} >
                <Button onClick={()=> getSearch(searchQuery)} variant="contained" color="primary" style={{height:'100%'}} >Search</Button>
                </div>
                <div>
                <FormControl component="fieldset">
  <FormLabel component="legend">Searching..</FormLabel>
  <RadioGroup
  row
    aria-label="type"
    defaultValue="project"
    name="row-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="project" control={<Radio />} label="Projects" />
    <FormControlLabel value="user" control={<Radio />} label="Creator" />
   
  </RadioGroup>
</FormControl>
                </div>
            </div>
            <div>
                {
                    value==="user" && 
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
                }
                {
                    value ==="project" && 
                    <div className="proj_section">
                    <p className="proj_title">Available Projects</p>
                    <div className="d-flex" >
                    <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                  {
                            projects.map((project)=> (
                                <Grid item xs={4}>
                                 <PostCard key={project.id} project={project}/>
                              </Grid>
                           
                            ))
                        }
                   
                    
                  </Grid>
                </Box>
                       
                   
                   
                    </div>
                   
                   
                    </div>
                }
            </div>
            
        </div>
    )
}

export default Search
