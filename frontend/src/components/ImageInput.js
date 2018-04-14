import React, { Component } from 'react';
import axios from 'axios';
const uuidv4 = require('uuid/v4');

class ImageInput extends Component {
  state = {
    selectedFile: '',
  }

  updateFile = (fileToUpload) => {
    this.setState({ selectedFile: fileToUpload },
      () => {
        this.UpdateFileTO()
      });
    }

    UpdateFileTO = () => {
      console.log(1)
      console.log('s', this.state.selectedFile)

      // We define this here to avoid issues with contexts
      const onPassingFilePath = this.props.onPassingFilePath;

      if ((/\.(gif|jpg|jpeg|png)$/i).test(this.state.selectedFile.name)) {

        const config = {
          headers: { 'Content-Type': 'text/html' }
        }

        const fileExt = this.state.selectedFile.name.match(/\.\w+$/)[0];
        const renameTo = uuidv4();

        const imageForState = `http://localhost:3003/${renameTo}${fileExt}`;

        this.setState({ userImage: imageForState });

        let formData = new FormData();

        formData.append('description', renameTo);
        formData.append('upFile', this.state.selectedFile);
        axios.post('http://localhost:3003/', formData, config)
        .then(function (response) {
          if (response.status === 200) {
            // Server is slower than React passing
            onPassingFilePath(imageForState);
          }
        })
      } else {
        alert('Wrong image extension. We just allow: gif|jpg|jpeg|png');
      }

    }

    render() {

      const { selectedFile } = this.state;

      return (
        <div id="ImageInput" className="ui middle aligned center aligned grid segment">
          <input type="file" className="inputfile" id="input-image"
            onChange={ (event) => this.updateFile(event.target.files[0]) }
          />

          <label htmlFor="input-image" className="ui huge red right floated button">
            <i className="ui upload icon"></i>
            Upload image
          </label>
          <input type="file" className="inputfile" id="input-image" />
        </div>
      )}
    }

    export default ImageInput;
