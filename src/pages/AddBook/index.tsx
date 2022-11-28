import React, { useState, useEffect } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Header from "../../components/Header";
import "./style.css";
import axios from "axios";

function AddBook() {
  const [input, setInput] = useState<any>({
    name: "",
    author: "",
    read_time: "",
    details: "",
    thumbnail_name : "",
    pdf_name : ""
  });
  const [thumbnail, setThumbnail] = useState<any>();
  const [pdf, setPdf] = useState<any>();

  const handleUpload1 = () => {
    document.getElementById("thumbnail_name")?.click();
  };

  const handleUpload2 = () => {
    document.getElementById("pdf_name")?.click();
  }

  const handleInputChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: any, key : any) => {
    setInput({...input, [key] : e.target.files[0].name});

    if (key === "thumbnail_name")
        setThumbnail(e.target.files[0]);
    else 
        setPdf(e.target.files[0]);

  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const uploadFile = async (fileType: string) => {

    const formData = new FormData();
    let url = "http://localhost:3001/upload_file";

    if (fileType === "thumbnail") 
      formData.append("file", thumbnail, input.thumbnail_name);
    else 
      formData.append("file", pdf, input.pdf_name);
    

    try {
      let response = await axios.post(url, formData);
      console.log(`Response`, response);
    } catch (err) {
      console.log(`File1`, err);
    }
  };

  const handleSubmit = async (e: any) => {
    let url = "http://localhost:3001/add_book";
    e.preventDefault();

    try {
      let response = await axios.post(url, {
        name : input.name,
        author : input.author,
        read_time : input.read_time,
        details : input.details,
        thumbnail_name : input.thumbnail_name,
        pdf_name : input.pdf_name
      });
      console.log(`Response`, response);
    } catch (err) {
      console.log(`File2`, err);
    }
  };

  useEffect(() => {
    uploadFile("thumbnail");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thumbnail]);

  useEffect(() => {
    uploadFile("pdf");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pdf]);

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
      <br />
      <form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col xs={4}>
              <div className="add-book-cover">
                <div className="add-book-cover-1" onClick={handleUpload1}>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="thumbnail_name"
                    name="thumbnail_name"
                    onChange={(e) => handleFileUpload(e, "thumbnail_name")}
                  />
                  <span>+</span>
                  <span>Add Book</span>
                </div>
              </div>
            </Col>
            <Col xs={8}>
              <Form.Label htmlFor="name" className="form-label">
                Name of the book
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter the published name"
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                />
              </InputGroup>
              <Row>
                <Col xs={6}>
                  <Form.Label htmlFor="author" className="form-label">
                    Author of the book
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Add all the authors comma seperated"
                      id="author"
                      name="author"
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </Col>
                <Col xs={6}>
                  <Form.Label htmlFor="read_time" className="form-label">
                    Book read time
                  </Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Add time in mins"
                      id="read_time"
                      name="read_time"
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Form.Label htmlFor="details" className="form-label">
                    Book details
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Should not be more than 300 words"
                    style={{ height: "100px" }}
                    id="details"
                    name="details"
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} style={{ marginTop: "10px" }}>
                  <Form.Label htmlFor="details" className="form-label">
                    Upload Pdf
                  </Form.Label>
                  <div className="upload-pdf">
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="pdf_name"
                      name="pdf_name"
                      onChange={(e) => handleFileUpload(e, "pdf_name")}
                    />
                    <span>
                      <em onClick={handleUpload2}>Browse</em> or drop files here
                    </span>
                    <span>Supports:Pdf:upto 10mb</span>
                  </div>
                </Col>
              </Row>
              <button type="submit" className="submit-button">
                Add Book
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
}

export default AddBook;
