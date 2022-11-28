import React from "react";
import Header from "../../components/Header";
import "./style.css";
import data from "./data.json";
import { Col, Container, Row } from "react-bootstrap";

function index() {
  return (
    <>
      <Header />
      <div>
        <div className="home-header">
          <span>My Books</span>
        </div>
        <Container>
          <Row>
            {data?.map((d: any) => (
              <Col xs={2} className = "col">
                <div className="book-thumbnail">
                  <img src={`${process.env.REACT_APP_BACKEND_URL}${d.img}`} alt="thumbnail"/>
                  <span className="book-thumbnail-name">{d.name}</span>
                  <span className="book-thumbnail-author">{d.author}</span>
                </div>
              </Col>
            ))}
            <Col xs = {2} className = "col">
              <div className="add-book-thumbnail">
                <span>+</span>
                <span>Add a book</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default index;
