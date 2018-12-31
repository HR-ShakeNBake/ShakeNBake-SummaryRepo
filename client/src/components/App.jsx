import React from 'react';
import PhotoGallery from './PhotoGallery.jsx';
import Summary from './Summary.jsx';
import GalleryModal from './GalleryModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index : 0,
      photos : [],
      reviews : [],
      summary : {},
      showModal: false,
      following: false
    }
  }

  changeIndex(e) {
    var index = Number(e.target.alt)
    if (!index) {
      index = 0;
    }
    this.setState({ 
      index: index
    });
  }

  openModal(e) {
    var index = Number(e.target.alt)
    if (!index) {
      index = 0;
    }
    this.setState({ 
      showModal: true,
      index: index
    });
  }

  closeModal(e) {
    this.setState({
      showModal: false
    });
  }

  follow() {
    this.setState({
      following: true
    });
  }

  unfollow() {
    this.setState({
      following: false
    });
  }

  next() {
    let index = this.state.index
    if (index < this.state.photos.length - 1) {
      index++;
    }
    this.setState({
      index: index
    })
    console.log(this.state.index)
  }

  previous() {
    let index = this.state.index
    if (index > 0) {
      index--;
    }
    this.setState({
      index: index
    })
    console.log(this.state.index)
  }

  componentDidMount(){
    this.getData();
  }

  getData() {
    fetch('/recipe', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then((result) => {
      return result.json();
    })
    .then(data => {
      this.setState({
        photos: data.photos,
        reviews: data.reviews,
        summary: data.summary[0]
      });
      console.log(this.state)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  upload() {
    var url = prompt("Please enter the image URL");
    var comment = prompt("Say Somthing about this photo")
    var photo = {};
    photo.photoURL = url;
    photo.comment = comment;
    photo.recipeId = 1;
    photo.userId = 1;
    fetch('/recipe', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(photo)
    })
    .then(() => {
      console.log('photo uploaded');
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div id='main'>
        <Summary reviews={this.state.reviews} summary={this.state.summary} changeIndex={this.changeIndex.bind(this)}
          openModal={this.openModal.bind(this)} closeModal={this.closeModal.bind(this)} showModal={this.state.showModal}
          following={this.state.following} follow={this.follow.bind(this)} unfollow={this.unfollow.bind(this)}/>

        <PhotoGallery index={this.state.index} photos={this.state.photos} upload={this.upload.bind(this)}
          openModal={this.openModal.bind(this)} closeModal={this.closeModal.bind(this)} showModal={this.state.showModal}
          next={this.next.bind(this)} previous={this.previous.bind(this)} changeIndex={this.changeIndex.bind(this)}
          following={this.state.following} follow={this.follow.bind(this)} unfollow={this.unfollow.bind(this)}/>

        {this.state.showModal ? (
          <GalleryModal onClose={this.closeModal.bind(this)} photos={this.props.photos} index={this.props.index} 
            upload={this.props.upload} next={this.props.next} previous={this.props.previous} changeIndex={this.changeIndex.bind(this)}
            following={this.state.following} follow={this.follow.bind(this)} unfollow={this.unfollow.bind(this)} >
           
          </GalleryModal>
          ) : null}
      </div>
    );
  }
}

export default App;
