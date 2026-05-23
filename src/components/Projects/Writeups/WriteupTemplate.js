import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";

function WriteupTemplate({ title, children }) {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container style={{ paddingTop: "20px", paddingBottom: "80px", maxWidth: "860px" }}>

          <button
            onClick={() => navigate("/project")}
            style={{
              backgroundColor: "#623686",
              border: "1px solid #623686",
              color: "white",
              padding: "6px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "1rem",
              marginBottom: "40px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = "#6d20c5"}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = "#623686"}
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
