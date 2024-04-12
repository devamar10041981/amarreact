import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
 import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import './Footer.css';
 
const Footer = () => (
   
   <Container style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px' }}> 
   <span class="border-top-0"></span>
  <footer className="navbar navbar-expand-lg navbar-light bg-light border-top-0">  <Row>
  <Col><card><h5 class="text-success">About us</h5>About Us page is one of the first places customers will look to find out about your business and story, it’s a foundational page that deserves time and attention to get right.</card></Col>
  <Col><card><h5 class="text-success">Contact us</h5>
  486 & 487, Phase III, Udyog Vihar III, Sector 20, Gurugram, Haryana 122016</card></Col>
  <Col>
  <h5 class="text-success">Permalink</h5><ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
           
          </ul></Col>
</Row></footer>  
<Row>  <div className="footer_show"></div>
<p class="text-center text-primary">© 2024, @copyright by  Espire Developer amarnath</p>
        </Row>
     </Container>  
);
 
export default Footer;