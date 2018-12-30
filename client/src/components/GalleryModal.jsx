import React from 'react';
import PhotoGalleryItem from './PhotoGalleryItem.jsx';
import PhotoGalleryList from './PhotoGalleryList.jsx';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById("modal");

class GalleryModal extends React.Component {
  
  render() {
    if (this.props.photos){
      return ReactDOM.createPortal(
        <div
          style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)"
          }}
          // onClick={this.props.onClose}
        >
          <div
            style={{
              padding: 20,
              background: "#fff",
              borderRadius: "2px",
              display: "inline-block",
              minHeight: "300px",
              margin: "1rem",
              position: "relative",
              minWidth: "600px",
              boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              justifySelf: "center"
            }}
          >
            {this.props.children}
            <button onClick={this.props.onClose}>X</button>
            <div>
              <img src='./upload.png' height="80" width="80" onClick={e => this.props.upload()}/>
              <img src={this.props.photos[0].photoURL} height="80" width="80" />
              <img src={this.props.photos[1].photoURL} height="80" width="80" />
              <img src={this.props.photos[2].photoURL} height="80" width="80" />
              <img src={this.props.photos[3].photoURL} height="80" width="80" />
              <img src={this.props.photos[4].photoURL} height="80" width="80" />
              <img src={this.props.photos[5].photoURL} height="80" width="80" />
              <img src={this.props.photos[6].photoURL} height="80" width="80" />
              <img src={this.props.photos[7].photoURL} height="80" width="80" />
            </div>
            <div>
              <img src={this.props.photos[this.props.index].avatarURL} height="70" width="70" />
              {this.props.photos[this.props.index].username}
              <img src='./follow.png' />
            </div>
            <div>
              <img src={this.props.photos[this.props.index].photoURL} height="400" width="720" />
            </div>
            <img src='./previous.png' onClick={e => this.props.previous()} height="50" width="120"/>
            <img src='./next.png' onClick={e => this.props.next()} height="50" width="120"/>
          </div>
        </div>,
        modalRoot
      );
    } else {
      return (
        <div>loading...</div>
      )
    }
  
  }
}

export default GalleryModal;