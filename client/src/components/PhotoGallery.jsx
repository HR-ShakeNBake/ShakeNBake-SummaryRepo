import React from 'react';
import PhotoGalleryItem from './PhotoGalleryItem.jsx';
import PhotoGalleryList from './PhotoGalleryList.jsx';
import GalleryModal from './GalleryModal.jsx';

class PhotoGallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
  }

  openModal(e) {
    console.log('this is e', e.target);
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  render() {
    console.log(this.props.photos)
    return (
      <div id='gallery'>

        <div onClick={e=>this.openModal(e)}>
          <PhotoGalleryItem photo={this.props.photos[this.props.index]} />
        </div>
      
        <PhotoGalleryList photos={this.props.photos} upload={this.props.upload} 
          openModal={this.openModal.bind(this)} closeModal={this.closeModal.bind(this)} showModal={this.state.showModal}/>

        {this.state.showModal ? (
          <GalleryModal onClose={this.closeModal.bind(this)} photos={this.props.photos} index={this.props.index} 
            upload={this.props.upload} next={this.props.next} previous={this.props.previous}>
            Photos: {this.props.photos[0].recipeName}
          </GalleryModal>
          ) : null}
      </div>
    );
  }

}

// const PhotoGallery = ({photos, index, upload, openModal, closeModal, showModal}) => {
//   const state = {modal: false};

//   openModal() {
//     // console.log(this.state.showModal, 'before open')
//     this.setState({ showModal: true });
//     // console.log(this.state.showModal, 'after open')
//   }

//   closeModal() {
//     // console.log(this.state.showModal, 'before close')
//     this.setState({ showModal: false });
//     // console.log(this.state.showModal, 'after close')
//   }

//   console.log(showModal, 'modal before click')
//   return (
//     <div id='gallery' onClick={e=>openModal(e)}>
//       <PhotoGalleryItem photo={photos[index]} />
//       <PhotoGalleryList photos={photos} upload={upload}/>
//       {showModal ? (
//             <GalleryModal onClose={closeModal}>
//               This is the secret modal message!
//             </GalleryModal>
//           ) : null}
//     </div>
//   );
// }

export default PhotoGallery;
