import React from "react";
import LeetCodeCalendar from "leetcode-calendar";
import { Container, Row, Col } from "react-bootstrap";
import './Leetcode.css';

export default function Leetcode() {
  const ppl = {
    light: [
      "rgb(235, 235, 235)",
      "rgba(192, 132, 245, 0.44)",
      "rgba(192, 132, 245, 0.6)",
      "rgba(192, 132, 245, 0.76)",
      "rgba(192, 132, 245, 0.92)",
    ],
    dark: [
      "rgb(235, 235, 235)",
      "rgba(192, 132, 245, 0.44)",
      "rgba(192, 132, 245, 0.6)",
      "rgba(192, 132, 245, 0.76)",
      "rgba(192, 132, 245, 0.92)",
    ],
  };

  return (
    <Container fluid>
      <Row className="justify-content-center text-center">
        <Col xs={12}>
          <h1 className="project-heading pb-3">
            Days I <strong className="purple">Code</strong>
          </h1>
        </Col>
        <Col xs={12}>
          <div className="calendar-container">
            <LeetCodeCalendar
              username="DXtR-05" // Replace with your LeetCode username
              blockSize={15} // Optional: Size of each block in pixels (default: 15)
              blockMargin={5} // Optional: Margin between blocks in pixels (default: 5)
              fontSize={16} // Optional: Font size of the text within blocks (default: 16)
              theme={ppl} // Optional: A custom theme object to style the calendar
              style={{ maxWidth: "100%" }} // Ensure it uses full width available
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
