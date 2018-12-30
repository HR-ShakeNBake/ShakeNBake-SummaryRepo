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
      showModal: false
    }
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
      <div>
        <Summary reviews={this.state.reviews} summary={this.state.summary}/>
        <PhotoGallery index={this.state.index} photos={this.state.photos} upload={this.upload.bind(this)}
          next={this.next.bind(this)} previous={this.previous.bind(this)} />
      </div>
    );
  }
}

export default App;
