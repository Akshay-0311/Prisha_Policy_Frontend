import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function AboutBook() {
  const [book, setBook] = useState<any>();

  const navigate = useNavigate();
  const location = useLocation();

  const getBook = () => {
    const id = location.pathname.split("/").pop();
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}get_book/${id}`)
      .then((result) => {
        setBook(result?.data?.book[0]);
      })
      .catch((err) => {
        console.log(`Error`, err);
      });
  };

  const backToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col xs={4}>
            <span className="back-to-home" onClick={backToHome}>
              <i className="fa fa-angle-left" aria-hidden="true"></i>&nbsp;
              &nbsp;<span>Back to home</span>
            </span>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col xs={4}>
            <div>
              <img
                src={`${process.env.REACT_APP_BACKEND_URL_PUBLIC}${book?.thumbnail_name}`}
                className="book-detail-thumbnail"
                alt="thumbnail"
              />
            </div>
          </Col>
          <Col xs={8}>
            <div className="about-book">
              <span className="book-title">{book?.name}</span>
              <span className="author">{book?.author}</span>
              <span className="read-time">
                Book Read Time: <em>{book?.read_time} mins</em>
              </span>
              <span className="book-detail">{book?.details}</span>
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
                <span>
                  You have not read this book yet.Click on the button to start
                  rating
                </span>
                <br />
                <br />
                <br />
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
