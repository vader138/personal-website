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
  Form, Accordion
} from 'react-bootstrap';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import image from "./assets/placeholder.png";
import {useEffect, useState} from "react";



function App() {
  const [darkmode, setDarkmode] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", darkmode ? "dark" : "light");
  }, [darkmode]);
  return (
      <div className="App" data-bs-theme={darkmode? "dark" : "light"}>
        <div style={{position: "relative"}}>
          <Form>
            <Form.Check type="switch" id="darkModeSwitch" label="Dark Mode" style={{position: "absolute", top: 10, right: 10, zIndex: 9999}} onClick={() => setDarkmode(!darkmode)}/>
          </Form>
        </div>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            <div>
              <h1>Welcome to my Website!</h1>
              <p>Still trying to figure out what to put here. For now, click on the tabs above to navigate the website.</p>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <div>
              <h1>ABOUT ME</h1>
              <Card style={{ width: '18rem', marginLeft: '15px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Cooper Julien</Card.Title>
                  <Card.Text>
                    I will talk about myself and my skills here.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Portfolio">
            <div>
              <h1>PORTFOLIO</h1>
              <Accordion style={{ width: "500px"}}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Pucklike</Accordion.Header>
                  <Accordion.Body>
                    <p>Pucklike is a game I developed for Android. It is a roguelike game using the mechanics of air hockey for battles. Players collect different pucks to use against enemies and face off against 2 different bosses with unique abilities. It is not released on any platforms, but the Github repository can be found below.</p>
                    <a href="https://github.com/vader138/Pucklike" className="btn btn-info rounded-pill">View Pucklike on Github</a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Tutor Finder App</Accordion.Header>
                  <Accordion.Body>
                    <p>This is an app designed to connect students to tutors in the area. Students can search for tutors based on various criteria and tutors can then get in touch with students. I handled the backend code and tutor search functions.</p>
                    <a href="https://github.com/VikramKrishnamoorthi/tutorFinderApp" className="btn btn-info rounded-pill">View Tutor Finder App on Github</a>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Tab>
        </Tabs>
      </div>
  );
}


export default App;