import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";
import './ResumeNew.css';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={
              "https://drive.google.com/uc?export=download&id=1q5xdb7ArSZSmrGOTapn1hbiFnbsdDWiS"
            }
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Card sx={{ maxWidth: 824 }}>
            <CardMedia
              className="cardmedia"
              component="iframe"
              src="https://drive.google.com/file/d/1q5xdb7ArSZSmrGOTapn1hbiFnbsdDWiS/preview"
              width="100%"
              height={width <= 768 ? "600px" : "1056px"} // Use inline style for dynamic height
              allow="autoplay"
            />
          </Card>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={
              "https://drive.google.com/uc?export=download&id=1q5xdb7ArSZSmrGOTapn1hbiFnbsdDWiS"
            }
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
