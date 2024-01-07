import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "MernStack Developer", "Cloud,DevOps,AI Enthusist" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const handleDownload = () => {
    // Replace 'YOUR_GOOGLE_DRIVE_LINK' with the actual link to your resume file
    const resumeLink = 'https://drive.google.com/file/d/16Ggc7rrSCDl8uCT1XPbsLRQb-ERPFccS/view?usp=sharing';

    // Open the link in a new tab
    window.open(resumeLink, '_blank');
  };

  return (  
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>              
                <h1>{`Hi! I'm krish`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "MernStack Developer", "Cloud,DevOps,AI Enthusist" ]'><span className="wrap">{text}</span></span></h1>
                  <p>As a MERN stack enthusiast, I thrive in crafting seamless user experiences while delving deep into backend intricacies. Beyond coding, I harbor a fascination for DevOps methodologies and cloud innovations. Eager to merge my frontend finesse, backend prowess, and DevOps intrigue, I seek a role that not only values my existing skills but propels me into new realms of expertise. Let's embark on a journey where code meets innovation, and every challenge is an opportunity for growth.</p>
                  <button onClick={handleDownload}>Download my resume here.. <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}