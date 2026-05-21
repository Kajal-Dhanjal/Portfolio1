import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              In this section, please give a brief explanation of who you are. 
              We want to get to know the real you, your background, and what drives your passion. 
              Tell the reader what your proficient in for example.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, C++, Rust, Node.js, and Java{" "}
                </b>
              </i>
             then tell us what your main areas of interest are for example.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Blockchain Solutions,{" "}
                </b>
              </i>
              Don't be shy, boost about what your good at, no matter how small you think it is. It's called selling yourself.
              <br />
              <br />
              I am undeniably good with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
