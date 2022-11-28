import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header";
import "./style.css";

export default function AboutBook() {
  return (
    <>
      <Header />
      <br />
      <Container>
        <Row>
          <Col xs={4}>
            <span className="backToHome">Back to home</span>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col xs={4}>
            <div style={{ backgroundColor: "red" }}>50</div>
          </Col>
          <Col xs={8}>
            <div className="about-book">
              <span className="book-title">The Martin</span>
              <span className="author">Andy Weir</span>
              <span className="read-time">
                Book Read Time: <em>10 mins</em>
              </span>
              <span className="book-detail">
                When astronauts blast off from the planet Mars, they leave
                behind Mark Watney (Matt Damon), presumed dead after a fierce
                storm. With only a meager amount of supplies, the stranded
                visitor must utilize his wits and spirit to find a way to
                survive on the hostile planet. Meanwhile, back on Earth, members
                of NASA and a team of international scientists work tirelessly
                to bring him home, while his crew mates hatch their own plan for
                a daring rescue mission.
              </span>
            </div>
            <br />
            <div className="summary">Summary</div>
            <div className="rate">
              <div className="rate-left">
                <div className="rating-bar">
                  <div className="rate-bar">
                    <span>5</span>&nbsp;&nbsp;<span className="bar"></span>
                  </div>
                  <div className="rate-bar">
                    <span>4</span>&nbsp;&nbsp;<span className="bar"></span>
                  </div>
                  <div className="rate-bar">
                    <span>3</span>&nbsp;&nbsp;<span className="bar"></span>
                  </div>
                  <div className="rate-bar">
                    <span>2</span>&nbsp;&nbsp;<span className="bar"></span>
                  </div>
                  <div className="rate-bar">
                    <span>1</span>&nbsp;&nbsp;<span className="bar"></span>
                  </div>
                </div>
                <div className="abt">
                  <div className="rate-area">
                    <h2 className="rate-val">4.5</h2>
                    <span>273 reviews</span>
                  </div>
                  <div className="rate-area">
                    <h2 className="rate-val">88%</h2>
                    <span>Recommnded</span>
                  </div>
                </div>
              </div>
              <div className="rate-right">
                <span>You have not read this book yet.Click on the button to start rating</span>
                <br/>
                <br/>
                <br/>
                <span className="rate-button">Rate this book</span>
              </div>
            </div>
            <button className="read-button">Read this book</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
