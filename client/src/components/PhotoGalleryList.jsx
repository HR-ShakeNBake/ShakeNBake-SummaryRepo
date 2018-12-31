import React from 'react';
import GalleryModal from './GalleryModal.jsx';

const PhotoGalleryList = ({photos, upload, openModal, closeModal, showModal}) => {

  if (photos.length) {
    return (
      <div id='galleryList'>
        <div >
          <img src='./upload.png' height="52" width="92" onClick={e => upload()}/>
        </div>
        <div><img src={photos[0].photoURL} alt='0' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div><img src={photos[1].photoURL} alt='1' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div><img src={photos[2].photoURL} alt='2' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div><img src={photos[3].photoURL} alt='3' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div id="listText" onClick={e => openModal(e)} height="51.7" width="91.7">  
          <div id='listTextchild'>+{photos.length}</div>  
        </div>
        {/* <img src={photos[4].photoURL} height="51.7" width="91.7" onClick={e => openModal(e)}/> */}
       
        {/* {showModal ? (
          <GalleryModal onClose={closeModal}>
        
          </GalleryModal>
          ) : null} */}
      </div>
    );
  } else {
    return (
      <div id='galleryList'>
        loading image...
      </div>
    );
  }

}

export default PhotoGalleryList;
