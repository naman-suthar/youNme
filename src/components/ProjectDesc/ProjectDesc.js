import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Cover from '../../images/cover.jpg'
import PersonIcon from '@material-ui/icons/Person'
import CollabBtn from '../PostCard/CollabBtn'
import { projectFirestore } from '../firebase/Firestorage';
import {doc,getDoc,getDocs,collection} from 'firebase/firestore'
const ProjectDesc = ({ match, location }) => {
    const {params: {proj_id}} = match;
    const [project,setProject] = useState(null);
    const [creator,setCreator] = useState(null);
    const [members,setMembers] = useState([]);
    const proj_ref = projectFirestore.collection("free_Projects").doc(proj_id);
    useEffect(async()=>{
        await proj_ref.get().then((res)=>{
            setProject(res.data())
            getCreator(res.data())  
    })
    
    },[]);
   
       
    
    const getCreator = async(project) =>{
        const creator_ref = doc(projectFirestore,"users",`${project.uid}`)
        const docSnap = await getDoc(creator_ref);
        if(docSnap.exists()){
            setCreator(docSnap.data());
            
        }else{
            console.log("didnt get");
        }
    }
    const getMembers = async (project) => {
        const querySnapshot = await getDocs(collection(projectFirestore, "users"));
        querySnapshot.forEach((doc) => {
        project.members_id.forEach( uid => {
            if(uid === doc.id){
                console.log(`${uid} => ${doc.id}`);
                let membersList = [...members,doc.data()]
                setMembers(membersList)
                console.log(members);
            }
        })
});
    
    }
   

    return (
        <>
        {
            project &&
            <div style={{position:'relative', top: '80px',width:'95vw'}}>
            <img src={ project.proj_img} alt="Cover photo" style={{height:'300px',width:'100%'}}/>
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
            <h3>{project.proj_name}</h3>
            </div>
            
            <div style={{marginTop:'30px'}}>
            <p className="head">Description</p>
            <p>
            {project.proj_desc}
            </p>
            </div>
            <div style={{marginTop:'30px'}}>
            <p className="head">Created By</p>
            {
                creator && 
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
             <ListItem>
                 <ListItemAvatar>
                      <Avatar src={creator.photoUrl} />
                          
                     </ListItemAvatar>
                     <ListItemText primary= {creator.name} secondary="Sept 9, 2021" />
                </ListItem>
     
             </List>
            }
            
            </div>
            <div style={{marginTop:'30px'}}>
            <p className="head">Members</p>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            {
                members.map(member => {
                    (
                        <ListItem>
                 <ListItemAvatar>
                      <Avatar>
                          <PersonIcon />
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary={member.name} secondary="Sept 10, 2021" />
                </ListItem>
                    )
                })
            }
           
             </List>
            
            
            </div>
            <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
                <div className="w-50">
                <CollabBtn/>
                </div>
            
            </div>

        </div>
        }
        </>
        )
}

export default ProjectDesc
