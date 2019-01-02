import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById("upload");

class UploadModal extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
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
            minHeight: "250px",
            margin: "1rem",
            position: "relative",
            minWidth: "300px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            justifySelf: "center",
            zIndex: "999"
          }}
        >
          {this.props.children}
          <div id='modalHeadUpload'>
              <div id='modalTitleUpload'>Add A Photo</div>
              <div id='modalCloseUpload' onClick={this.props.closeUpload}> &times; </div>
          </div>
          <hr/>
          <form>
            <br/>
            <textarea rows="2" cols="70" id='photoURL' placeholder="Please enter photo URL" />
            <br/>
            <br/>
            <textarea rows="5" cols="70" id='photoComment' placeholder="Say Something about this photo..." />
            <br/><br/>
          </form> 

          <div id='photoAction'>
            <button id='postPhoto' onClick={e=>this.props.upload()}>Post Photo</button>
            <button id='cancelPhoto' onClick={this.props.closeUpload}>Cancel</button>
          </div>

        </div>
      </div>,
      modalRoot
    );
  
  }
}

export default UploadModal;