import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pathvisualizer2.png";
import projImg2 from "../assets/img/bookstore.png";
import projImg3 from "../assets/img/McqSite.png";
import projImg4 from "../assets/img/project-img1.png";
import projImg5 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import projectImage from '../assets/img/color-sharp2.png';


// Rest of your component code

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pathfinding-Visualizer",
      description: "the PathfindingVisualizer provides an interactive and intuitive way for users to understand and visualize the behavior of pathfinding algorithms. It serves as a valuable educational tool for learning about algorithms and their applications in solving real-world problems like route planning and navigation.",
      imgUrl: projImg1,
    },
    {
      title: "BooksStore-GraphQl",
      description: "About Devlops a book records platform using react.js, express.js, GraphQL",
      imgUrl: projImg2,
    },
    {
      title: "MCQ-Website",
      description: "Welcome to our MCQ site, built with React.js and hosted on AWS EC2 within a secure VPC setup. Leveraging S3 for image storage and Docker for seamless deployment, we offer an interactive platform for engaging multiple-choice quizzes.",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I have hands-on experience working on a variety of projects leveraging the MERN stack (MongoDB, Express.js, React.js, Node.js) for full-stack development. Additionally, I've implemented DevOps practices to ensure seamless deployment, continuous integration, and infrastructure management. These projects showcase my ability to design and develop scalable web applications while implementing robust DevOps pipelines for efficient software delivery.</p>
                  <p> <strong>Technologies Used:</strong>
                    React,Node,Express, MongoDB, Docker, Kubernetes, Jenkins, Git, AWS,GraphQl, etc.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">

                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects; 