import SeiMap from "@/frontend/components/Map";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      <div
        style={{
          margin: "auto",
          backgroundColor: "#C9EEFF",
          color: "black",
          height: "6rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 style={{ width: "80%", margin: "auto" }}>CONTACT US</h1>
      </div>
      <Row
        style={{
          width: "60%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          //   textAlign: "center",÷
          marginTop: "2rem",
        }}
      >
        <Col>
          <div style={{ textAlign: "center" }}>
          <h5>SEI INSTITUTE</h5>
            <h6>9843577214, 9841621432</h6>
            <h6>
              <AiOutlineMail />{" "}
              <span className="mx-1">seieducationalinstitute@gmail.com</span>
            </h6>
            <h5>Have any questions ? We'd love to hear for you.</h5>
          </div>

          <div style={{ width: "50%", margin: "auto" ,marginTop:"1rem"}}>
            <Form>
              <div>
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
              </div>
              <div>
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
              </div>
              <div>
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Contact Number"
                />
              </div>
              <div>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email Address" />
              </div>
              <div>
                <Form.Label>Your School / Colleges</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name of your school/college"
                />
              </div>
              <div>
                <Form.Label>Course you want to enroll it </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Course</option>
                  <option value="1">Advanced Sciemce Classes </option>
                  <option value="2">Staff Nurese/HA/Lab/Pharmayc</option>
                  <option value="3">Management Course</option>
                  <option value="3">All Level Computer Course</option>
                  <option value="3">A-level Course</option>
                  <option value="3">Language Classes </option>
                  <option value="3">Anchoring Classes </option>
                </Form.Select>
                
              </div>
              <div style={{width:"100%"}}>
                <Button style={{width:"100%",marginTop:"1rem"}}>
                    Submit Details
                </Button>
                
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <SeiMap/>
    </div>
  );
};

export default Contact;
