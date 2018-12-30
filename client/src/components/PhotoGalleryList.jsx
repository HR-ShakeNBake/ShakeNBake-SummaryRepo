import React from 'react';
import GalleryModal from './GalleryModal.jsx';

const PhotoGalleryList = ({photos, upload, openModal, closeModal, showModal}) => {
  if (photos.length) {
    return (
      <div id='galleryList'>
        <img src='./upload.png' height="52" width="92" onClick={e => upload()}/>
        <img src={photos[0].photoURL} height="51.7" width="91.7" onClick={e => openModal(e)}/>
        <img src={photos[1].photoURL} height="51.7" width="91.7" onClick={e => openModal(e)}/>
        <img src={photos[2].photoURL} height="51.7" width="91.7" onClick={e => openModal(e)}/>
        <img src={photos[3].photoURL} height="51.7" width="91.7" onClick={e => openModal(e)}/>
        <img src={photos[4].photoURL} height="51.7" width="91.7" onClick={e => openModal(e)}/>
        <h2 class="centered" onClick={e => openModal()}> + {photos.length} </h2>
        {showModal ? (
          <GalleryModal onClose={closeModal}>
            This is the secret modal message!
          </GalleryModal>
          ) : null}
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
