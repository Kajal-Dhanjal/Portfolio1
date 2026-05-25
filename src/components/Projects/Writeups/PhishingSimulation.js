import React from "react";
import WriteupTemplate from "./WriteupTemplate";


function RedTeam1() {


  const imgStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "24px",
    marginTop: "8px",
    border: "1px solid rgba(199, 112, 240, 0.3)",
  };

  return (
    <WriteupTemplate title="Breaking In — Legally">

      {/* ===================== EDIT BELOW THIS LINE ===================== */}

      <h1 style={{ fontSize: "2.3em", fontWeight: "500", paddingBottom: "20px", color: "white" }}>
        Breaking In — <span style={{ color: "#c770f0" }}>Legally</span>
      </h1>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>Overview</h2>
      <p>
        Replace this with your project overview. Explain what the project is
        about in simple terms that anyone can understand.
      </p>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>What Was the Goal?</h2>
      <p>
        Replace this with the goal of your project. What were you trying to
        achieve or demonstrate?
      </p>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>How It Was Done</h2>
      <p>Walk through the steps you took below.</p>

      <h3 style={{ fontSize: "1.2em", paddingTop: "16px", paddingBottom: "6px" }}>Step 1 — Replace with step title</h3>
      <p>Describe what you did in this step.</p>

      {/* To add an image here, upload the image to src/Assets/Project-Writeups/ and make sure you redirect using the right link. */}

      <h3 style={{ fontSize: "1.2em", paddingTop: "16px", paddingBottom: "6px" }}>Step 2 — Replace with step title</h3>
      <p>Describe what you did in this step.</p>

      <h3 style={{ fontSize: "1.2em", paddingTop: "16px", paddingBottom: "6px" }}>Step 3 — Replace with step title</h3>
      <p>Describe what you did in this step.</p>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>Tools Used</h2>
      <ul style={{ paddingLeft: "24px" }}>
        <li style={{ paddingBottom: "8px" }}><strong>Tool Name</strong> — what it does</li>
        <li style={{ paddingBottom: "8px" }}><strong>Tool Name</strong> — what it does</li>
        <li style={{ paddingBottom: "8px" }}><strong>Tool Name</strong> — what it does</li>
      </ul>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>Key Findings</h2>
      <p>Replace this with what you discovered or demonstrated during the project.</p>

      <h2 style={{ fontSize: "1.5em", color: "#c770f0", paddingTop: "24px", paddingBottom: "8px" }}>Conclusion</h2>
      <p>Replace this with your final thoughts and what someone should take away from this project.</p>

      {/* ===================== EDIT ABOVE THIS LINE ===================== */}

    </WriteupTemplate>
  );
}

export default RedTeam1;
