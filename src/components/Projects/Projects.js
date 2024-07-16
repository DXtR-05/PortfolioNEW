import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chat.png";
import weather from "../../Assets/Projects/weather.png";
import todo from "../../Assets/Projects/todo.png";
import joke from "../../Assets/Projects/joke.png";
import bmi from "../../Assets/Projects/bmi.png";
import agro from "../../Assets/Projects/agro.png";

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
          <Col md={4} className="project-card ">
            <ProjectCard
            imgPath={chat}
              isBlog={false}
              title=<span className="purple">BaatCheet-Real Time Chat</span>            
              description="BaatCheet-Real Time Chat is a user-friendly messaging application designed for seamless and instant communication. It supports real-time text, voice, and video chats, ensuring efficient and engaging interactions. With robust security features, it guarantees privacy and reliability for personal and professional use."
              ghLink="https://github.com/DXtR-05/Baatcheet-Fullstack-RealTime_Chat_Application"
              // demoLink="https://chatify-49.  web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title=<span className="purple">SkyCast : Weather Wizardry</span>   
              // title="SkyCast : Weather Wizardry"
              description="SkyCast is a React-based weather application leveraging the OpenWeatherMap API to provide real-time weather data,including temperature, humidity, and wind speed. Its intuitive and responsive design ensures users can easily access accurate weather information for any city worldwide."
              ghLink="https://github.com/DXtR-05/Weather_App_React.js"
              demoLink="https://weather-app-react-js-brown.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title=<span className="purple">To-Do List</span>   
              // title="To-Do List"
              description="A To-Do List built with React is a user-friendly application for managing tasks efficiently. It allows users to add, edit, and delete tasks, with real-time updates and a clean interface. Ideal for improving productivity, it demonstrates React’s capabilities in building interactive and dynamic web applications."
              ghLink="https://github.com/DXtR-05/Todo_App"
              demoLink="https://todo-app-beta-tawny-76.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={joke}
              isBlog={false}
              title=<span className="purple">Random Joke Generator</span>   
              // title="Random Joke Generator"
              description="A Random Joke Generator built with React is a fun application that fetches and displays jokes on demand. It features a simple interface and leverages APIs to provide a new joke with each click. This project showcases React’s ability to create dynamic and engaging web experiences."
              ghLink="https://github.com/DXtR-05/Random-Joke-Generator"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmi}
              isBlog={false}
              title=<span className="purple">BMI Calculator</span>   
              // title="BMI Calculator"
              description="The BMI (Body Mass Index) calculator built with HTML, CSS, and JavaScript allows users to input their height and weight to calculate BMI instantly. It provides a user-friendly interface with responsive design, demonstrating practical use of frontend technologies for health-related calculations."
              ghLink="https://github.com/DXtR-05/HTML-CSS-JS-projects/tree/main/BMI%20Calculator"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agro}
              isBlog={false}
              title=<span className="purple">Agro-Life Ecommerce</span>   
              // title="Agro-Life Ecommerce"
              description="AgroLife Ecommerce is a MERN stack platform linking agricultural chemical dealers and retailers. It includes separate portals for product management and purchasing, powered by Node.js, Express.js, MongoDB, JWT, and Stripe for secure payments, enhancing efficiency and connectivity in the market."
              ghLink="https://github.com/DXtR-05/Diversion-2k24"
              demoLink="https://agri-frontend-user.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
