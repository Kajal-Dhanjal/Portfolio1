import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Card className="project-card-view">
      <div style={{
        width: "100%",
        height: "220px",
        overflow: "hidden",
      }}>
        <img
          src={props.imgPath}
          alt="card-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ textAlign: "center" }}>
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
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
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            View on GitHub
          </a>
          {props.blogLink && (
            <div style={{ marginTop: "10px" }}>
              <a
                href={props.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#c770f0", fontSize: "0.9em" }}
              >
                Blog post →
              </a>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
