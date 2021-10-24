import { Button, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../images/youNme_Logo.png'
import Header from '../Home/Main/Header'
import Gallery from './Gallery/Gallery'
import { collection ,getDocs} from 'firebase/firestore'
import { UserContext } from '../../context/UserContext'
import { projectFirestore } from '../firebase/Firestorage'
import SingleDetail from './SingleDetail'
function Profile() {
    const [ user,setUser] = useContext(UserContext);
    const [profile,setProfile] = useState({});
    const userCollectionRef = collection(projectFirestore,"users") 
    const getProfile =async () =>{
        const data = await getDocs(userCollectionRef);
        data.docs.forEach(doc => {
            if(doc.id === user.uid){
                setProfile(doc.data());
            }
        })
    }
    useEffect(()=>{
        getProfile()
    },[]);
    // const saveProfile = () => {
    //     const myProfile = {
    //         name: user.displayName,
    //         photoURL: user.photoURL,
    //         email: user.email,
    //         profession:"Dancer",
    //         city: "Leelwasa",
    //         age: 20,
    //         about: "This is short description about Naman Suthar"
    //     };
    //     axios.post("http://localhost:5000/profiles",myProfile)
    //     .then((res => {
    //         console.log(res);
    //     }))
    // }  For Future
    return (
        <div style={{position:'relative',top:'80px',color:'#fefefe',display:'flex'}}>
            <div style={{width:'20vw',marginLeft:'10vh'}}>
                <img src={user.photoURL} alt='Profile picture' width='100%' style={{borderRadius:'50%'}}/>
                
            <div style={{display:'flex',flexDirection:'column',justifyItem:'center',alignItems:'center',marginTop:'5vh',color:'black'}}>
                <h2>{profile.name}</h2>
                <SingleDetail title={"AGE"} detail={profile.age || 21}/>
                <SingleDetail title={"PROFESSION"} detail={profile.profession || "Dancer"}/>
                <SingleDetail title={"CITY"} detail={profile.city || "Udaipur"}/>
                <SingleDetail title={"ABOUT"} detail={profile.about || "This is about me , I am an Android Developer"}/>
               
            </div>
        </div>
        <div  style={{width:'55vw',marginLeft:'15vh'}}>
            <Header />
            <Gallery />
            {/* <Button variant='outlined' color='inherit' onClick={saveProfile}>Save </Button> */}
        </div>
        </div>
    )
}

export default Profile
