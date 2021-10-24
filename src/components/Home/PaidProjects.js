import React, { useEffect, useState } from 'react'
import PostCard from '../PostCard/PostCard'
import { collection ,getDocs} from '@firebase/firestore'
import { projectFirestore } from '../firebase/Firestorage'
import { Box, Grid } from '@material-ui/core'
const PaidProjects = () => {
    const [projects,setProjects] = useState([]);
    const projectCollectionRef = collection(projectFirestore,"paid_Projects");
    const getData =async () =>{
        const newData = await getDocs(projectCollectionRef)
        setProjects(newData.docs.map((doc) => ({ ...doc.data() })));
         console.log(projects);
    }
    useEffect(()=>{ 
        getData();   
    },[]) 
    return (
        <div className="proj_section">
        <p className="proj_title">Top Paid Projects</p>
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
    )
}

export default PaidProjects
