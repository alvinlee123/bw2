import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import unknown from '../assets/img/unknown.png';

//const ImageCard = ({ onCreatingProfile, onPassingImage, name }) => (
class ImageCard extends Component {
  //const FormIntroduce = () => (

  render() {

    const { onCreatingProfile, onPassingImage, onPassingValues } = this.props;
    return (
      <Card className="centered middle aligned">
        <Image src={ !onPassingImage ? unknown : onPassingImage } />
        {!onCreatingProfile && (
          <div>
            <Card.Content>
              <Card.Header>
                { onPassingValues[0] ? onPassingValues[0] + onPassingValues[1] : 'No-Name...?' }
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  { onPassingValues[2] ? onPassingValues[2]  : `RandomUser${Math.floor((Math.random() * 100) + 1)}` }
                </span>
              </Card.Meta>
              <Card.Description>
                { onPassingValues[3] }
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='bolt' />
              Your score
            </Card.Content>
          </div>
        )}
      </Card>
    )};
  }

  export default ImageCard;
