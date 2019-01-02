import React from 'react';
import UploadModal from './UploadModal.jsx';


const PhotoGalleryList = ({photos, upload, openModal, openUpload, closeUpload, showUpload}) => {
  console.log(upload, 'from list')
  if (photos.length) {
    return (
      <div id='galleryList'>
        <div><img src={photos[0].photoURL} alt='3' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div><img src={photos[0].photoURL} alt='0' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div><img src={photos[1].photoURL} alt='1' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div><img src={photos[2].photoURL} alt='2' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div><img src={photos[3].photoURL} alt='3' height="51.7" width="91.7" onClick={e => openModal(e)}/></div>
        <div><img src={photos[4].photoURL} alt='3' height="51.7" width="91.7" onClick={e => openModal(e)}/></div> 
        <div id='listTextchildBox'></div> 
        <div id='listTextchild'>+{photos.length}</div> 
        <img id='listUpload' src='./upload.png' height="51.7" width="91.7" onClick={e => openUpload(e)}/>

        {showUpload ? (
          <UploadModal openUpload={openUpload} closeUpload={closeUpload} 
            showUpload={showUpload} upload={upload} >  
          </UploadModal>
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
