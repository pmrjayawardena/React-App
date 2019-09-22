import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import Profile from '../containers/Profile';
import SliderComponent from '../containers/Slider';

class App extends React.Component{

  
  constructor(props) {
    super(props);
    // Don't do this!
    this.state = { 
      currentTab : 'profile'
    };
   }
  render() {

    return (
      <div>
   <Navbar bg="light" expand="lg">
              <Nav.Link  onClick={()=> this.setState({currentTab: 'slider'})} style={{color:'#000'}}>Prabodha NavBar</Nav.Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link  onClick={()=> this.setState({currentTab: 'slider'})}>Slider</Nav.Link>
                  <Nav.Link  onClick={()=> this.setState({currentTab: 'profile'})}>Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div>
              {this.state.currentTab === 'slider' ? <SliderComponent/> : false}
              {this.state.currentTab === 'profile' ? <Profile/> : false}
            </div>
      </div>
    );
  }

}

export default App;
