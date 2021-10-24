import  { useEffect, useState } from 'react'
import { projectStorage } from '../firebase/Firestorage';

const UploadImg = (file) => {
    const [url, setUrl] = useState(null);
  
    useEffect(() => {
      // references
      const storageRef = projectStorage.ref(file.name);
      storageRef.put(file).on('state_changed', async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      });
    }, [file]);
  
    return { url };
}

export default UploadImg
