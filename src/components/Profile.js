import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Profile extends React.Component{


  constructor(props){

    super(props);

    this.state = {

      userInfo : this.props.profile,
      editing : false,
      error : false
    }
  }

    componentDidMount(){

      this.props.fetchProfile();

    }

    componentWillReceiveProps(nextProps){

this.setState({
  userInfo: nextProps.profile

});
    }
    updateValue(type,event){

        let userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));

        userInfoCopy[type] = event.target.value;
        this.setState({
        userInfo : userInfoCopy

        });

    }

    saveProfile() {

      var error = false;
      var propertiesToCheck = ['name','bio'];

      propertiesToCheck.forEach(function(term){

    if(this.state.userInfo[term]===''){

      error =true;
    }
      }.bind(this));

      if(!error){

        // save profile

        this.props.saveProfile(this.state.userInfo);
      }

      this.setState({error});
    }
    render(){

        return (
            <div className="container">
            <Button variant="success" onClick={() => this.setState({

              editing : !this.state.editing
            })}>Edit</Button>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value ={this.state.userInfo.name} onChange={this.updateValue.bind(this,'name')} className={this.state.error && this.state.userInfo.name === '' ? 'red-border' : ''}/>
            </Form.Group>


            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value ={this.state.userInfo.bio} onChange={this.updateValue.bind(this,'bio')} className={this.state.error && this.state.userInfo.bio === '' ? 'red-border' : ''}/>
            </Form.Group>

            <Button variant="secondary" onClick={this.saveProfile.bind(this)}>Save</Button>
            </div>
          );
    }

}

export default Profile;
