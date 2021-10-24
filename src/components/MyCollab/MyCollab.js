// import React from 'react'


// function MyCollab() {
//     const [projects,setProjects] = useState([]);
//     const projectCollectionRef = collection(projectFirestore,"free_Projects");
//     const getData =async () =>{
//         const newData = await getDocs(projectCollectionRef)
//         setProjects(newData.docs.map((doc) => ({ ...doc.data(),id: doc.id })));
//          console.log(projects);
//     }
//     useEffect(()=>{ 
//         getData();   
//     },[])
//     return ( <div style={{position:'relative', top: '80px',width:'95vw',color:'black'}}>
//         <div className="proj_section">
//         <p className="proj_title">Top Free Projects</p>
//         <div className="d-flex" >
//         {
//                 projects.map((project)=> <PostCard key={project.id} project={project} />)
//             }
//         </div>
       
       
//         </div>
//         </div>
//     )
 
// }

// export default MyCollab
