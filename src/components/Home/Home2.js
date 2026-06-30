import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

 
// EDIT THIS PART:
// The import above on line 3 where it says avatar.png, change it to your preferred image name.
// Do not change anything else on that line.


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
              Bachelor’s in Cyber Security from{" "}
              <b className="purple">Swinburne University</b> (2025); currently in the Master’s, graduating late 2027.
              Building toward{" "}
              <b className="purple">SOC analyst, detection engineering, and IAM analyst</b>{" "}
              roles on the Microsoft stack.
              <br />
              <br />
              My stack:{" "}
              <i>
                <b className="purple">
                  Microsoft Sentinel, KQL, Defender XDR, Entra ID, Active Directory, Windows Server.
                </b>
              </i>
              {" "}Credentials: Microsoft Applied Skills (Administer Active Directory Domain Services);
              Deloitte Australia &amp; AIG Cyber Job Simulations (Forage);
              CCNA (Routing &amp; Switching, IPv6, Enterprise Networking/Security/Automation).
              Working toward SC-200.
              <br />
              <br />
              My flagship build is a{" "}
              <b className="purple">Microsoft Sentinel detection lab</b> — custom KQL analytics
              eight rules (and counting) mapped to MITRE ATT&amp;CK, validated with simulated attacks alongside an
              Active Directory lab. I document the process honestly at{" "}
              <a
                href="https://kajalbuilds.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c770f0" }}
              >
                kajalbuilds.hashnode.dev
              </a>
              {" "}— bugs, false positives, and what didn’t work the first time included.
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
