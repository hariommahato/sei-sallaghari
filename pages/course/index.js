import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import styles from "../../styles/Course.module.css";
import { GiBookmarklet } from "react-icons/gi";

const Course = () => {
  return (
    <div className="my-3">
      <h2 className={styles.heading}>SEI COURSE STRUCTURE</h2>
      <Row className={styles.row}>
        <Col sm={12} md={6} lg={4}>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Title>Advanced Science Course</Card.Title>
              <div>
                <ul>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>Physics</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Chemistry</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Mathematics</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>Bilogy</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>English</span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={11} md={6} lg={4}>
          <Card style={{ border: "none" }}>
            <Card.Body>
              <Card.Title>Staff Nurse/H.A/Lab/Pharmacy</Card.Title>
              <div>
                <ul>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>English</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>Health</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Mathematics</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>Science</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>General Knowledge</span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card style={{ width: "20rem", border: "none" }}>
            <Card.Body>
              <Card.Title>Management Course</Card.Title>
              <div>
                <ul>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>English</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Accounting</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Mathematics</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Computer</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Economics</span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          width: "100%",
          margin: "auto",
        }}
      >
        <h4 className="text-center">Computer Classes</h4>
        <Col sm={11} md={6} lg={4}>
          <Card style={{ border: "none", margin: "auto" }}>
            <Card.Body>
              <div>
                <ul>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Office Package</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Basic Computer Course</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Graphic Designing Package</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Advance Computer Course</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Accouting Package</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Web Designing Package</span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={11} md={6} lg={4}>
          <Card style={{ border: "none", margin: "auto" }}>
            <Card.Body>
              <div>
                <ul>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Hardware Networking</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>C programming</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>C#,.Net</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>App.Net</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" /> <span>PHP</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>VB.Net Oracle 119</span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={11} md={6} lg={4}>
          <Card style={{ border: "none", margin: "auto" }}>
            <Card.Body>
              <div>
                <ul>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>SQL Server 2012</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Multimedia Java</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Javascript</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>I-phone programming</span>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <GiBookmarklet size={20} color="red" />{" "}
                    <span>Video Editing Course</span>
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <h3 className="text-center">Language Classes</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <ul>
              <li className={styles.list}>
                {" "}
                <GiBookmarklet size={20} color="red" />{" "}
                <span>English</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className={styles.list}>
                {" "}
                <GiBookmarklet size={20} color="red" />{" "}
                <span>Japanes</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className={styles.list}>
                {" "}
                <GiBookmarklet size={20} color="red" />{" "}
                <span>Korean</span>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className={styles.list}>
                {" "}
                <GiBookmarklet size={20} color="red" />{" "}
                <span>Chinese</span>
              </li>
            </ul>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Course;
