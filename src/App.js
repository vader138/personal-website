import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import {Dropdown, Nav, Navbar, NavDropdown, Container, Tab, Tabs, Carousel, Card} from 'react-bootstrap';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import anim from "./assets/deltaprophecy-animation.gif";
function App() {
  return (
      <div className="App">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            <div>
              <h1>Welcome to my website!</h1>
              <h2>I'm gonna be honest, I have no idea what to put here yet.</h2>
              <h3>This is some placeholder text until I work out what to put in the home page.</h3>
              <h4>Here's the entire <i>Undertale</i> intro.</h4>
              <p>A long time ago, two races lived on Earth: <i>Humans</i> and <i>Monsters</i>.</p>
              <p>One day, war broke out between the two races.</p>
              <p>After a long battle, the humans were victorious.</p>
              <p>They sealed the monsters underground with a magic spell.</p>
              <h6>Mount Ebbot</h6>
              <h6>201X</h6>
              <p>Legend says that those who climb the mountain never return.</p>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <div>
              <h2>About Me</h2>
              <p>This is where I'll introduce myself, once this website is finished.</p>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Portfolio">
            <div>
              <h2>Portfolio</h2>
              <p>Here's where I'd put some info on projects I've done in the past.</p>
              <p>You know, if I had any.</p>
              <p>For now, this page will probably just have a link to my Github.</p>
            </div>
          </Tab>
        </Tabs>
      </div>
  );
}

export default App;
