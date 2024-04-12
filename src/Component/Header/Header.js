import { useState } from 'react';
import './../../App.css';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logDOM } from '@testing-library/react';
 
import './Header.css';
const Header = ({ data }) => {

    const [active, setActive] = useState("");
 
  const handleClick = (event) => {
    setActive(event.target.innerText);
    
  }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
       
          <Link className="navbar-brand" to="/"><img src={require('../../asset/logo.jpg')} />  </Link>
          <ul className="navbar-nav mr-auto">
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
          
          </ul>
        
      </nav>
        // <div className="header-image"><pre>{process.env.REACT_APP_API_URL}</pre>
        //     <div className="App-header">
        //         {/* <img src   alt="logo" /> */}
        //         <p className='header-text text-white p-4'>{data}</p>
        //     </div>

        //     <div>
        //         <Navbar >
                    
        //             <nav class="navbar navbar-expand bg-success">
        //                     <Nav.Link href="/"> 
        //                         <strong>Home</strong>
        //                   </Nav.Link>
        //                     <Nav.Link href="/about"> 
        //                         <strong>About Us</strong>
        //                   </Nav.Link>
        //                     <Nav.Link href="/user"> 
        //                         <strong>Customer</strong></Nav.Link>
        //                     <Nav.Link href="/contact"> 
        //                         <strong>Contact Us</strong>
        //                     </Nav.Link>

        //                 </nav>
                   
        //         </Navbar>
        //     </div>
        // </div>
    );
};

export default Header