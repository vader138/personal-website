import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import {
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Tab,
  Tabs,
  Carousel,
  Card,
  ToggleButton,
  Form
} from 'react-bootstrap';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import anim from "./assets/deltaprophecy-animation.gif";
import {useState} from "react";
function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
      <div className="App">
        <div style={{position: "relative"}}>
          <Form>
            <Form.Check type="switch" id="darkModeSwitch" label="Dark Mode" style={{position: "absolute", top: 10, right: 10, zIndex: 9999}} onClick={() => setDarkmode(!darkmode)}/>
          </Form>
        </div>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            <div>
              <h1>HOME PAGE</h1>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <div>
              <h1>ABOUT ME</h1>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Portfolio">
            <div>
              <h1>PORTFOLIO</h1>
            </div>
          </Tab>
        </Tabs>
      </div>
  );
}

export default App;
