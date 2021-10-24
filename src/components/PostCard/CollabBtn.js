import React, { useContext } from 'react'
import {GrAdd} from 'react-icons/gr'
import {arrayUnion} from 'firebase/firestore'
import { projectFirestore } from '../firebase/Firestorage'
import { useHistory } from "react-router-dom";
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom';
export const CollabBtn = ({id,type}) => {
    const [user,setUser] = useContext(UserContext)
    const history = useHistory()
    const handleClick = () => {
    
        if(type===0){
            const doc_ref = projectFirestore.collection("free_Projects").doc(id);
            doc_ref.update({members_id:arrayUnion(user.uid)});
            let path = `/project_desc/${id}`
            history.push(path)
        }
    }
    return (
        <div style={{ display: 'flex',width: '100%',}}>
            <button  className="Collabbtn" onClick={handleClick}><span>Collab</span> <GrAdd/></button>
        </div>
    )
}

export default CollabBtn