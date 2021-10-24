import React, { useEffect, useState } from 'react'
import PostCard from '../PostCard/PostCard'
import { collection ,getDocs} from '@firebase/firestore'
import { projectFirestore } from '../firebase/Firestorage'
const FreeProjects = () => {
    const [projects,setProjects] = useState([]);
    const projectCollectionRef = collection(projectFirestore,"free_Projects");
    const getData =async () =>{
        const newData = await getDocs(projectCollectionRef)
        setProjects(newData.docs.map((doc) => ({ ...doc.data(),id: doc.id })));
         console.log(projects);
    }
    useEffect(()=>{ 
        getData();   
    },[])
    return (
        <div className="proj_section">
        <p className="proj_title">Top Free Projects</p>
        <div className="d-flex" >
        {
                projects.map((project)=> <PostCard key={project.id} project={project} />)
            }
        </div>
       
       
        </div>
    )
}

export default FreeProjects
