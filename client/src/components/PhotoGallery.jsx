import React from 'react';
import PhotoGalleryItem from './PhotoGalleryItem.jsx';
import PhotoGalleryList from './PhotoGalleryList.jsx';
import GalleryModal from './GalleryModal.jsx';

class PhotoGallery extends React.Component {

  render() {
    return (
      <div id='gallery'>

        <div onClick={e=>this.props.openModal(e)}>
          <PhotoGalleryItem photo={this.props.photos[this.props.index]} />
        </div>
      
        <PhotoGalleryList photos={this.props.photos} upload={this.props.upload} 
          openModal={this.props.openModal} closeModal={this.props.closeModal} showModal={this.props.showModal}/>

        {this.props.showModal ? (
          <GalleryModal onClose={this.props.closeModal} photos={this.props.photos} index={this.props.index} 
            upload={this.props.upload} next={this.props.next} previous={this.props.previous} changeIndex={this.props.changeIndex}
            following={this.props.following} follow={this.props.follow} unfollow={this.props.unfollow} >
           
          </GalleryModal>
          ) : null}
      </div>
    );
  }

}

export default PhotoGallery;
