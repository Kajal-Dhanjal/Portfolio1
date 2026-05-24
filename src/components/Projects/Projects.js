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

          {/* EDIT THIS PART:
          To edit the words on the project cards, change the text inside the title and the description.
          The writeuplink should redirect to your exact project write-up documentation located here: src/components/Projects/Writeups (I'll go into depth about this in the README).
          If you want to add more projects on your portfolio copy and paste all code between one 
          <Col md={4} className="project-card"> Your New Project </Col>*/}

          {/* PROJECT 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder1.jpeg")}
              title="Thinking Like A Hacker"
              description="A demonstration of how hackers find open doors in a network before the bad guys do. This project shows the tools and steps used to safely test a system's weak points, helping organisations fix problems before they become breaches."
              writeupLink="/writeup/redteam1"
            />
          </Col>

          {/* PROJECT 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder2.jpeg")}
              title="Phishing Simulation"
              description="Ever wondered how people fall for fake emails? This project recreates a controlled phishing attack to show how convincing these tricks can be, and more importantly, how to spot and avoid them in real life."
              writeupLink="/writeup/redteam2"
            />
          </Col>

          {/* PROJECT 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder3.jpeg")}
              title="Password Cracking 101"
              description="This project demonstrates how weak passwords can be cracked in seconds using common tools. It highlights why strong, unique passwords matter and how attackers think when trying to get into your accounts."
              writeupLink="/writeup/redteam3"
            />
          </Col>

          {/* PROJECT 4 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder4.jpeg")}
              title="Building a Digital Alarm System"
              description="Just like a home alarm system, this project sets up alerts that notify you the moment something suspicious happens on a network. It shows how defenders can catch attackers early before any real damage is done."
              writeupLink="/writeup/blueteam1"
            />
          </Col>

          {/* PROJECT 5 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder5.jpeg")}
              title="Incident Response Walkthrough"
              description="What do you do when you've already been hacked? This project walks through the steps a security team takes to identify what happened, stop the attack, and make sure it never happens again."
              writeupLink="/writeup/blueteam2"
            />
          </Col>

          {/* PROJECT 6 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder6.jpeg")}
              title="Threat Hunting on a Budget"
              description="This project shows how to proactively search through a network for hidden threats using free tools. Think of it as going on patrol before anything bad happens, rather than waiting for an alarm to go off."
              writeupLink="/writeup/blueteam3"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
