import React from 'react';

const PhotoGalleryItem = ({photo}) => {
  if (photo) {
    return (
      <div id='galleryItem'>
        <div id='galleryPhoto'>
          <img src={photo.photoURL} height="310" width="550" />
        </div>
      </div>
    );
  } else {
    return (
      <div id='galleryItem'>
        loading image...
      </div>
    );
  }

}

export default PhotoGalleryItem;
