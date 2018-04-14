import React, { Component } from 'react';

import logo from '../logo.svg';
import '../App.css';

import ButtonJoin from '../components/ButtonJoin';
import FormIntroduce from '../components/FormIntroduce';
import ImageCard from '../components/ImageCard';
import ImageInput from '../components/ImageInput';

class App extends Component {

  state = {
    isCreatingProfile: false,
    profile: false,
    fileToUpload: '',
    name: '',
    lastname: '',
    username: '',
    email: ''
  };


  introduceYourself = () => { this.setState({ isCreatingProfile: true }); }

  receivingPathFromImageInput = (path) => {
    console.log('from parent', path);
    this.setState({ fileToUpload: path });
  }

  updateStateFromChild = (element, value) => {
    this.setState({
      [element]: value
    })
  }

  createProfile = () => {
    this.setState({ isCreatingProfile: false, profile: true });
  }


  conditionsForProfile = () => {
    if (!this.state.profile && !this.state.isCreatingProfile) {
      return true;
    }
  }

  render() {

    const { isCreatingProfile, profile, fileToUpload, name, lastname, username, email } = this.state;

    return (
      <div className="App ui equal width center aligned padded grid">
        <div className="row">
          <div className="column grid">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            {this.conditionsForProfile() ? (
              <div>
                <ButtonJoin onClick={ () => this.introduceYourself() } />
              </div>
            ) : (
              <div>
                <ImageCard onCreatingProfile={ isCreatingProfile === true ? true : false } onPassingImage={ fileToUpload }
                  onPassingValues={[ name, lastname, username, email ]}
                />
                { /* Not () since Im passing a reference */ }
                {fileToUpload.length == 0 &&
                  <ImageInput onPassingFilePath={ this.receivingPathFromImageInput } />
                }
                {profile !== true &&
                  <FormIntroduce onChangingValues={ this.updateStateFromChild }
                    onPassingValues={ name, lastname, username, email }
                    onCreatingProfile= { this.createProfile }
                  />
                }
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
