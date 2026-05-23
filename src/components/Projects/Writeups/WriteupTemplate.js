import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";

function WriteupTemplate({ children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container style={{ paddingTop: "20px", paddingBottom: "80px", maxWidth: "860px" }}>

          <button
            onClick={() => window.location.href = "https://the-playground-portfolio1.vercel.app/project"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "5px",
              border: "2px solid #c770f0",
              backgroundColor: hovered ? "white" : "#c770f0",
              color: hovered ? "#c770f0" : "white",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              cursor: "pointer",
              marginBottom: "40px",
            }}
          >
            ← Back to Projects
          </button>

          <div style={{
            color: "white",
            fontSize: "1.1em",
            lineHeight: "1.8",
            textAlign: "left",
          }}>
            {children}
          </div>

        </Container>
      </Container>
    </div>
  );
}

export default WriteupTemplate;
