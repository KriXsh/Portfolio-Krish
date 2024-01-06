import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from './MailchimpForm';
import logo from "../assets/img/krish.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-6980894_1280.webp";
import navIcon3 from "../assets/img/nav-icon3.svg";

// export const Footer = () => {
 
// }


const Footer = () => {
    // Your component logic
  
    return (
        <footer className="footer">
          <Container>
            <Row className="align-items-center">
              <MailchimpForm />
              <Col size={12} sm={6}>
                <img src={logo} alt="Logo" />
              </Col>
              <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/krishnendu-ghosal-505430192/"><img src={navIcon1} alt="Icon" /></a>
                  <a href="https://github.com/KriXsh"><img src={navIcon2} alt="Icon" /></a>
                  <a href="https://www.instagram.com/krishxxoo/"><img src={navIcon3} alt="Icon" /></a>
                </div>
                <p>Copyright 2024. krishxxoo, All Rights Reserved</p>
              </Col>
            </Row>
          </Container>
        </footer>
      )
  };
  
  export default Footer;