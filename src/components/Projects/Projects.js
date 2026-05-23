import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/placeholder1.jpeg")}
              isBlog={false}
              title="Breaking In — Legally"
              description="A demonstration of how hackers find open doors in a network before the bad guys do. This project shows the tools and steps used to safely test a system's weak points, helping organisations fix problems before they become breaches."
              writeupLink="/Assets/Project-Writeups/redteam1.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/placeholder2.jpeg")}
              isBlog={false}
              title="Phishing Simulation"
              description="Ever wondered how people fall for fake emails? This project recreates a controlled phishing attack to show how convincing these tricks can be, and more importantly, how to spot and avoid them in real life."
              writeupLink="/Assets/Project-Writeups/redteam2.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/placeholder3.jpeg")}
              isBlog={false}
              title="Password Cracking 101"
              description="This project demonstrates how weak passwords can be cracked in seconds using common tools. It highlights why strong, unique passwords matter and how attackers think when trying to get into your accounts."
              writeupLink="/Assets/Project-Writeups/redteam3.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/placeholder4.jpeg")}
              isBlog={false}
              title="Building a Digital Alarm System"
              description="Just like a home alarm system, this project sets up alerts that notify you the moment something suspicious happens on a network. It shows how defenders can catch attackers early before any real damage is done."
              writeupLink="/Assets/Project-Writeups/blueteam1.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/placeholder5.jpeg")}
              isBlog={false}
              title="Incident Response Walkthrough"
              description="What do you do when you've already been hacked? This project walks through the steps a security team takes to identify what happened, stop the attack, and make sure it never happens again."
              writeupLink="/Assets/Project-Writeups/blueteam2.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/Projects/placeholder6.jpeg")}
              isBlog={false}
              title="Threat Hunting on a Budget"
              description="This project shows how to proactively search through a network for hidden threats using free tools. Think of it as going on patrol before anything bad happens, rather than waiting for an alarm to go off."
              writeupLink="/Assets/Project-Writeups/blueteam3.html"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
