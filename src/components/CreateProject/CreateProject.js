import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import React,{useContext, useState} from 'react'
import Input from '../Auth/Input'
import { projectFirestore } from '../firebase/Firestorage'
import UploadForm from '../Profile/Gallery/comps/UploadForm'
import { UserContext } from '../../context/UserContext'

const CreateProject = () => {
  const [user,setUser] = useContext(UserContext);

  const [proj_name,setProjName] = useState("Naman");
  const [proj_desc,setProjDesc] = useState("This is demo ");
  const [proj_location,setProjLocation] = useState("leelwaa");
  const [proj_link,setProjLink] = useState("https://wa.me/7300426741");
  const [proj_img,setProjImg] = useState("https://firebasestorage.googleapis.com/v0/b/calling-app-fda82.appspot.com/o/sawan_logo_final.png?alt=media&token=44e8be87-4edd-473c-bb67-915efa6a1f66");
  const [proj_members,setProjMembers] = useState(10);
  const [proj_price,setProjPrice] = useState(300);
  const handleSubmit = async (name,desc,location,link,img,members,price) => {
   await projectFirestore.collection('projects').add({
      uid: user.uid,
      proj_name:proj_name,
      proj_desc:proj_desc,
      proj_location:proj_location,
      proj_link:proj_link,
      proj_img:proj_img,
      proj_members:proj_members,
      proj_price:proj_price
     })
    .then(docRef => {
      docRef.update({
        ...docRef.get,
        id: docRef.id
      })
    });
  }
  const handleName = (e)=>{
    e.preventDefault();
    setProjName(e.target.value);
    console.log(proj_name);
  };
  const handleDesc = (e)=>{
    e.preventDefault();
    setProjDesc(e.target.value);
    console.log(proj_desc);
  };
  const handleLocation = (e)=>{
    e.preventDefault();
    setProjLocation(e.target.value);
    console.log(proj_location);
  };
  const handleLink = (e)=>{
    e.preventDefault();
    setProjLink(e.target.value);
    console.log(proj_link);
  };
  const handleImage = (e)=>{
    e.preventDefault();
    setProjImg(e.target.value);
    console.log(proj_img);
  };
  const handleMembers = (e)=>{
    e.preventDefault();
    setProjMembers(e.target.value);
    console.log(proj_members);
  };
  const handlePrice = (e)=>{
    e.preventDefault();
    setProjPrice(e.target.value);
    console.log(proj_price);
  };
    return (
        <div style={{position:'relative', top: '80px',width:'90vw',marginLeft:'5vw'}}>
            <form style={{width:'50%',margin:'0 auto'}}>
                <div style={{display:'flex',marginTop:'15px'}}>
                <label for="proj_name" style={{flex:'1'}}>Project Name</label> 
               <Input  handleChange={handleName } placeholder="Title" name="proj_name" id="proj_name" type="text" half style={{flex:'2'}} />
                </div>
                <div style={{display:'flex',marginTop:'15px'}}>
                <label for="desc" style={{flex:'1'}}>Project Description</label> 
               <Input handleChange={handleDesc } placeholder="Tell us something about your project" name="proj_desc" id="desc" type="text" half style={{flex:'2'}}/>
                </div>
                <div style={{display:'flex',marginTop:'15px'}}>
                <label for="location" style={{flex:'1'}}>Location</label> 
               <Input handleChange={handleLocation } placeholder="city,Distt,State(PINCODE)" name="proj_location" id="location" type="text" half style={{flex:'2'}}/>
                </div>
                <div style={{display:'flex',marginTop:'15px'}}>
                <label for="link" style={{flex:'1'}}>Whatsapp Link</label> 
               <Input handleChange={handleLink } placeholder="WhatsApp group link" name="proj_link" id="link" type="text" half style={{flex:'2'}}/>
                </div>
                <div  style={{display:'flex',marginTop:'15px'}}>
                <label for="image"  style={{flex:'2'}}>Select Cover Photo</label> 
                <Input handleChange={handleImage } name="proj_img" id="image" type="file" half style={{flex:'1'}}/>
                </div>

                <div  style={{display:'flex',marginTop:'15px'}}>
                <label for="members"  style={{flex:'2'}}>Max Members</label> 
                <Input handleChange={handleMembers } placeholder="i.e. 10" name="proj_members" id="members" type="number" half style={{flex:'1'}}/>
                </div>
                <div>
                <FormControl component="fieldset">
  <FormLabel component="legend">Project Type</FormLabel>
  <RadioGroup
  row
    aria-label="type"
    defaultValue="female"
    name="row-radio-buttons-group"
  >
    <FormControlLabel value="free" control={<Radio />} label="Free" />
    <FormControlLabel value="paid" control={<Radio />} label="Paid" />
   
  </RadioGroup>
</FormControl>
                </div>
                <div  style={{display:'flex',marginTop:'15px'}}>
                <label for="price"  style={{flex:'2'}}>Price</label> 
                <Input handleChange={handlePrice } placeholder="i.e. 300" name="proj_price" id="price" type="number" half style={{flex:'1'}}/>
                </div>
                <Button variant='outlined' color='inherit' style={{marginTop:'30px'}} onClick={() => handleSubmit(proj_name,proj_desc,proj_location,proj_link,proj_img,proj_members,proj_price)}>Create</Button>
            </form>
         
        </div>
    )
}

export default CreateProject
