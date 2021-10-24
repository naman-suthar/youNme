import { motion } from 'framer-motion';
import React, { useEffect } from 'react'
import UploadImg from './UploadImg';

const ProgressBar2 = ({ file, setFile,setProjImg }) => {
    const { url } = UploadImg(file);
    setProjImg(url);
    useEffect(() => {
      if (url) {
        setFile(null);
      }
    }, [url, setFile]);
  
    return (
      <motion.div className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
      ></motion.div>
    );
}

export default ProgressBar2
