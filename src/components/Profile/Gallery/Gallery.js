import React, { useState } from 'react'
import ImageGrid from './comps/ImageGrid';
import UploadForm from './comps/UploadForm';
import Modal from './comps/Modal';
import './Gallery.css';
import Title from './comps/Title';
function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div className="App" style={{color:'#000'}}>
          <div style={{display:'flex',height:'80px'}}>
          <Title/>
      <UploadForm />
          </div>
            
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
        </div>
    )
}

export default Gallery
