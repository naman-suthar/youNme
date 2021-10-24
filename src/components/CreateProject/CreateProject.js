import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import React,{useContext, useRef, useState} from 'react'
import Input from '../Auth/Input'
import { projectFirestore } from '../firebase/Firestorage'
import {collection, doc, addDoc} from 'firebase/firestore';
import { UserContext } from '../../context/UserContext'
import UploadImg from './UploadImg';
import ProgressBar2 from './ProgressBar2';

const CreateProject = () => {
  
  //states
  const [proj_name,setProjName] = useState("");
  const [proj_desc,setProjDesc] = useState("");
  const [proj_location,setProjLocation] = useState("");
  const [proj_link,setProjLink] = useState("");
  const [proj_img,setProjImg] = useState("https://firebasestorage.googleapis.com/v0/b/calling-app-fda82.appspot.com/o/sawan_logo_final.png?alt=media&token=44e8be87-4edd-473c-bb67-915efa6a1f66");
  const [proj_members,setProjMembers] = useState(0);
  const [proj_price,setProjPrice] = useState(0);
  const [value, setValue] = React.useState('free');
  const [file, setFile] = useState(null);
  
  //input Div refs
  const nameInput = useRef(null);
  const descInput = useRef(null);
  const locationInput = useRef(null);
  const linkInput = useRef(null);
  const imgInput = useRef(null);
  const membersInput = useRef(null);
  const priceInput = useRef(null);
  

  const [user,setUser] = useContext(UserContext);

 
  //exact inputs elements
 
  const checkInputs = () => {
    const uiNameInput = nameInput.current.childNodes[0].childNodes[0];
    const uiDescInput = descInput.current.childNodes[0].childNodes[0];
    const uiLocationInput = locationInput.current.childNodes[0].childNodes[0];
    const uiLinkInput = linkInput.current.childNodes[0].childNodes[0];
    const uiMembersInput = membersInput.current.childNodes[0].childNodes[0];
    const uiImageInput = imgInput.current.childNodes[0].childNodes[0];
    if(value==="paid"){
      const uiPriceInput = priceInput.current.childNodes[0].childNodes[0];
      if(uiPriceInput.value==="" || uiPriceInput.value===0){
        uiPriceInput.focus();
        return false;
      } 
    }
    const inputUIArray = [uiNameInput,uiDescInput,uiLinkInput,uiLocationInput,uiMembersInput,uiImageInput];
    for(let i =0;i<inputUIArray.length;i++){
      if(inputUIArray[i].value==="" || inputUIArray[i].value===0 || inputUIArray[i].value===null){
        inputUIArray[i].focus();
        return false;
      }
    }
    return true;
  
  };
  
  const clearInputs = () => {
    const uiNameInput = nameInput.current.childNodes[0].childNodes[0];
    const uiDescInput = descInput.current.childNodes[0].childNodes[0];
    const uiLocationInput = locationInput.current.childNodes[0].childNodes[0];
    const uiLinkInput = linkInput.current.childNodes[0].childNodes[0];
    const uiMembersInput = membersInput.current.childNodes[0].childNodes[0];
    const uiImageInput = imgInput.current.childNodes[0].childNodes[0];
    if(value==="paid"){
      const uiPriceInput = priceInput.current.childNodes[0].childNodes[0];
      uiPriceInput.value=0;
    }
    const inputUIArray = [uiNameInput,uiDescInput,uiLinkInput,uiLocationInput,uiMembersInput,uiImageInput];
    for(let i =0;i<inputUIArray.length;i++){
      inputUIArray[i].value="";
    }
    
  };


  const handleSubmit = async (name,desc,location,link,img,members,price) => {
   if (checkInputs()){
     
    const projectCollectionRef = collection(projectFirestore,`${value}_Projects`);
    await addDoc(projectCollectionRef,{
      uid: user.uid,
      proj_name:proj_name,
      proj_desc:proj_desc,
      proj_location:proj_location,
      proj_link:proj_link,
      proj_img:proj_img,
      proj_members:proj_members,
      proj_price:proj_price,
      members_id:[]
     })
     .then(()=>{
       clearInputs();
       alert("Your project is successfully created");
      })
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value);
    
  };

  const handleName = (e)=>{
    e.preventDefault();
    setProjName(e.target.value);
    
  };
  const handleDesc = (e)=>{
    e.preventDefault();
    setProjDesc(e.target.value);
    
  };
  const handleLocation = (e)=>{
    e.preventDefault();
    setProjLocation(e.target.value);
    
  };
  const handleLink = (e)=>{
    e.preventDefault();
    setProjLink(e.target.value);
    
  };

  const handleImage = (e)=>{
    const types = ['image/png', 'image/jpeg','image/jpg'];
      let selected = e.target.files[0];
  
      if (selected && types.includes(selected.type)) {
        setFile(selected);
      } else {
        setFile(null);
    };
  
  };
  const handleMembers = (e)=>{
    e.preventDefault();
    setProjMembers(e.target.value);
    
  };
  const handlePrice = (e)=>{
    e.preventDefault();
    setProjPrice(e.target.value);
    
  };
    return (
        <div style={{position:'relative', top: '80px',width:'90vw',marginLeft:'5vw'}}>
            <form style={{width:'50%',margin:'0 auto'}}>
                <div style={{display:'flex',marginTop:'15px'}}>
                <label for="proj_name" style={{flex:'1'}}>Project Name</label> 
               <Input ref={nameInput} handleChange={handleName } placeholder="Title" name="proj_name" id="proj_name" type="text" half style={{flex:'2'}} />
                </div>
                <div style={{display:'flex',marginTop:'15px'}}>
                <label for="desc" style={{flex:'1'}}>Project Description</label> 
               <Input ref={descInput} handleChange={handleDesc } placeholder="Tell us something about your project" name="proj_desc" id="desc" type="text" half style={{flex:'2'}}/>
                </div>
                <div style={{display:'flex',marginTop:'15px'}}>
                <label for="location" style={{flex:'1'}}>Location</label> 
               <Input ref={locationInput} handleChange={handleLocation } placeholder="city,Distt,State(PINCODE)" name="proj_location" id="location" type="text" half style={{flex:'2'}}/>
                </div>
                <div style={{display:'flex',marginTop:'15px'}}>
                <label for="link" style={{flex:'1'}}>Whatsapp Link</label> 
               <Input ref={linkInput} handleChange={handleLink } placeholder="WhatsApp group link" name="proj_link" id="link" type="text" half style={{flex:'2'}}/>
                </div>
                <div  style={{display:'flex',marginTop:'15px'}}>
                <label for="image"  style={{flex:'2'}}>Select Cover Photo</label> 
                <Input ref={imgInput} handleChange={handleImage } name="proj_img" id="image" type="file" half style={{flex:'1'}}/>
                </div>
                <div className="output">
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar2 file={file} setFile={setFile} setProjImg={setProjImg} /> }
      </div>
                <div  style={{display:'flex',marginTop:'15px'}}>
                <label for="members"  style={{flex:'2'}}>Max Members</label> 
                <Input ref={membersInput} handleChange={handleMembers } placeholder="i.e. 10" name="proj_members" id="members" type="number" half style={{flex:'1'}}/>
                </div>
                <div>
                <FormControl component="fieldset">
  <FormLabel component="legend">Project Type</FormLabel>
  <RadioGroup
  row
    aria-label="type"
    defaultValue="female"
    name="row-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="free" control={<Radio />} label="Free" />
    <FormControlLabel value="paid" control={<Radio />} label="Paid" />
   
  </RadioGroup>
</FormControl>
                </div>
                {
                  value==="paid" && <div  style={{display:'flex',marginTop:'15px'}}>
                  <label for="price"  style={{flex:'2'}}>Price</label> 
                  <Input ref={priceInput} handleChange={handlePrice } placeholder="i.e. 300" name="proj_price" id="price" type="number" half style={{flex:'1'}}/>
                  </div>
                }
                
                <Button variant='outlined' color='inherit' style={{marginTop:'30px'}} onClick={() => handleSubmit(proj_name,proj_desc,proj_location,proj_link,proj_img,proj_members,proj_price)}>Create</Button>
                {/* <Button variant='outlined' color='inherit' style={{marginTop:'30px'}} onClick={checkInputs}>Check</Button> */}
            </form>
         
        </div>
    )
}

export default CreateProject
