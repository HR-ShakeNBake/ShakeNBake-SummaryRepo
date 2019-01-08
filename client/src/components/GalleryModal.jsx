import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById("modal");

class GalleryModal extends React.Component {
  constructor(props){
    super(props)

  }
  
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
            zIndex: "990",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
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
              justifySelf: "center",
              zIndex: "990"
            }}
          >
            {this.props.children}
            <div id='modalHead'>
              <div id='modalTitle'>Photos: {this.props.photos[0].recipeName}</div>
              <div id='modalClose' onClick={this.props.onClose}> &times; </div>
            </div>
            
            <div>
              <img id='modalImage' src='http://3.17.144.156/upload.png' height="80" width="80" onClick={e => this.props.openUpload()}/>
              <img id='modalImage' src={this.props.photos[0].photoURL} alt='0' onClick={e => this.props.changeIndex(e)} height="80" width="80" />
              <img id='modalImage' src={this.props.photos[1].photoURL} alt='1' onClick={e=>this.props.changeIndex(e)} height="80" width="80" />
              <img id='modalImage' src={this.props.photos[2].photoURL} alt='2' onClick={e=>this.props.changeIndex(e)} height="80" width="80" />
              <img id='modalImage' src={this.props.photos[3].photoURL} alt='3' onClick={e=>this.props.changeIndex(e)} height="80" width="80" />
              <img id='modalImage' src={this.props.photos[4].photoURL} alt='4' onClick={e=>this.props.changeIndex(e)} height="80" width="80" />
              <img id='modalImage' src={this.props.photos[5].photoURL} alt='5' onClick={e=>this.props.changeIndex(e)} height="80" width="80" />
              <img id='modalImage' src={this.props.photos[6].photoURL} alt='6' onClick={e=>this.props.changeIndex(e)} height="80" width="80" />
              <img id='modalImage' src={this.props.photos[7].photoURL} alt='7' onClick={e=>this.props.changeIndex(e)} height="80" width="80" />
            </div>

            <div id='modalTitle'>
              <div>
                <img id='modalAvatar' src={this.props.photos[this.props.index].avatarURL} height="50" width="50" />
              </div>

              <div id='modalUser'>
                {this.props.photos[this.props.index].username}
              </div>

              <div id='modalFollow'>
                {this.props.following ? (
                  <img src='http://3.17.144.156/following.png' onClick={e => this.props.unfollow()} height="45" width="120"/>
                ) : <img src='http://3.17.144.156/follow.png' onClick={e => this.props.follow()} height="45" width="120"/>}
              </div>
            </div>

            <div >
              <img id='modalGallery' src={this.props.photos[this.props.index].photoURL} />
            </div>
              <div id='modalCommentTitle'>{this.props.photos[this.props.index].recipeName}</div>
              <div id='modalComment'>{this.props.photos[this.props.index].comment}</div>
            <div id='modalNav'>
              {this.props.index > 0 ? (
                <img id='modalPrev' src='http://3.17.144.156/previous.png' onClick={e => this.props.previous()} height="50" width="120"/>
                ) : null}
              <img id='modalNext' src='http://3.17.144.156/next.png' onClick={e => this.props.next()} height="50" width="120"/>
            </div>

            <div>
              <div id='prevArrow' onClick={e => this.props.previous()}>&#8249;</div>
              <div id='nextArrow' onClick={e => this.props.next()}>&#8250;</div>
            </div>

            <div className='barNav'>
              <div id='prevArrowBar' onClick={e => this.props.previous()}>&#8249;</div>
              <div id='nextArrowBar' onClick={e => this.props.next()}>&#8250;</div>
            </div>
            
          </div>
          <div>
              <img id='modalTitleImage' src={this.props.photos[0].photoURL}/>
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