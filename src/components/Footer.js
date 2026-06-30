import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body" style={{ textAlign: "center" }}>
          <ul className="footer-icons" style={{ justifyContent: "center" }}>

            <li className="social-icons">
              <a href="https://github.com/Kajal-Dhanjal" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a href="https://www.linkedin.com/in/kajal-dhanjal-8a79b8311/" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a href="https://kajalbuilds.hashnode.dev" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">
                <SiHashnode />
              </a>
            </li>

          </ul>
          <h3 style={{ color: "white", paddingTop: "10px" }}>Based in Melbourne, Australia</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
