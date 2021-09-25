import { useState,useEffect, useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { projectStorage, projectFirestore, timestamp } from "../../../firebase/Firestorage";
const useStorage = (file) => {
    const [user,setUser] = useContext(UserContext)
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
  
    useEffect(() => {
      // references
      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection(`${user.uid}`);
      
      storageRef.put(file).on('state_changed', (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      }, (err) => {
        setError(err);
      }, async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });
        setUrl(url);
      });
    }, [file]);
  
    return { progress, url, error };
  }
  
  export default useStorage;