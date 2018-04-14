import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class FormIntroduce extends Component {
  //const FormIntroduce = () => (

  render() {

    const { onChangingValues, onPassingValues, onCreatingProfile } = this.props;

    return (
      <div id="FormIntroduce" className="ui middle aligned center aligned grid segment">
        <Form>
          <Form.Group  widths={1}>
            <Form.Input label='First name' placeholder='First name' onChange={ (event) => onChangingValues('name',event.target.value) } value={ onPassingValues.name } />
            <Form.Input label='Last name' placeholder='Last name' onChange={ (event) => onChangingValues('lastname',event.target.value) } value={ onPassingValues.lastname } />
          </Form.Group>
          <Form.Group widths={1}>
            <Form.Input label='Username' placeholder='Username' onChange={ (event) => onChangingValues('username',event.target.value) } value={ onPassingValues.username } />
            <Form.Input label='Email' placeholder='Email' onChange={ (event) => onChangingValues('email',event.target.value) } value={ onPassingValues.email }  />
          </Form.Group>
          <Button type='submit' onClick={ () => onCreatingProfile() }>Create Profile</Button>
        </Form>
      </div>
    )};
  }
  export default FormIntroduce;
