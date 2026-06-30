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
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          What I've built so far.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* PROJECT 1 — SENTINEL DETECTION LAB (flagship) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder1.jpeg")}
              title="Microsoft Sentinel Detection Lab"
              description="Custom KQL analytics rules for brute force, suspicious PowerShell execution, and registry persistence — mapped to MITRE ATT&CK and validated with simulated attacks in an Active Directory lab environment."
              githubLink="https://github.com/Kajal-Dhanjal/sentinel-detection-lab"
              // Update blogLink below to the specific Hashnode post URL once published
              blogLink="https://kajalbuilds.hashnode.dev"
            />
          </Col>

          {/* PROJECT 2 — ELDERSAFE IAM SYSTEM */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ProjectImages/placeholder2.jpeg")}
              title="ElderSafe IAM System"
              description="IAM system for aged care: MFA (TOTP), role-based access control, JWT authentication, honeypot, and activity logging — built on Flask and Supabase with security-first design."
              githubLink="https://github.com/Kajal-Dhanjal/Eldersafe--Pentested--IAM-System"
              // Add blogLink here if you write a post about this one
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
