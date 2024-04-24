import React, { useState } from 'react';
import './styles/ImageGallery.css';

export default function ImageGallery({images}) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const handleModal = (image) => {
    setOpenModal(true);
    setSelectedImage(image);
  }
  const closeModal = () =>{
    setOpenModal(false);
    setSelectedImage(null);
  }
  return (
    <div className='image-gallery'>
      {images.map((image, index) => (
          <div key={index} className='image-item' onClick={() => handleModal(image)}>
            <img src={image.thumbnail} alt={image.alt}/>
            <div className='overlay'>
              <span className='overlay-text'>{image.title}</span>
            </div>
        </div>
      ))}

      {openModal && (<div className='modal' onClick={closeModal}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()} >
          <img src={selectedImage.full} alt={selectedImage.alt}/>
          <span className='close' onClick={closeModal}>&times;</span>
        </div>
      </div>)}

    </div>
  )
}
