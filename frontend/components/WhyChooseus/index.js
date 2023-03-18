import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../../styles/ChooseUs.module.css";

const ChooseUs = () => {
  return (
    <div>
      <div className={styles.mainDiv}>
        <h2 className={styles.heading}>WHY CHOOSE US ?</h2>

        <Row className={styles.contentContainer}>
          <Col sm={6} md={4} lg={4}>
            <Image
              src={"/environment.jpeg"}
              width={200}
              height={200}
              className={styles.image}
            />
            <h6 className={styles.text}>Good Learning Environment</h6>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <Image
              src={"/test.jpeg"}
              width={200}
              height={200}
              className={styles.image}
            />
            <h6 className={styles.text}>Daily & Weekly Tet</h6>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <Image
              src={"/teching.jpeg"}
              width={200}
              height={200}
              className={styles.image}
            />
            <h6 className={styles.text}>Excellent Teaching Faculties</h6>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <Image
              src={"/tour.jpeg"}
              width={200}
              height={200}
              className={styles.image}
            />
            <h6 className={styles.text}>Educational Tours and Refreshent</h6>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <Image
              src={"/scholarship.jpeg"}
              width={200}
              height={200}
              className={styles.image}
            />
            <h6 className={styles.text}>
              Scholarship for Deserving & Needy Students
            </h6>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <Image
              src={"/noone.jpeg"}
              width={200}
              height={200}
              className={styles.image}
            />
            <h6 className={styles.text}>No 1 Institute In City</h6>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChooseUs;
