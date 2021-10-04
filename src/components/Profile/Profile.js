import { Button, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../images/youNme_Logo.png'
import Header from '../Home/Main/Header'
import Gallery from './Gallery/Gallery'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
function Profile() {
    const [ user,setUser] = useContext(UserContext);
    const [profile,setProfile] = useState({});
    let profArr;
    const getProfile = () =>{
        axios.get("http://localhost:5000/profiles")
        .then((res => {
            console.log(res.data)
            profArr = res.data
            profArr.map(profile => {
                if(profile.name === user.displayName){
                    setProfile(profile);
                }else{
                    console.log("I am not that");
                }
            })
        }))
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
                <Typography >{profile.profession} </Typography>
                <Typography>{profile.age}</Typography>
                <Typography>{profile.city}</Typography>
                    <Typography className="mt-3">
                        {profile.about}
                </Typography>
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
