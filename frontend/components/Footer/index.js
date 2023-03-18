import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../../styles/Footer.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiFillMail,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.divContainer}>
        <Row className={styles.row}>
          <Col sm={12} md={4} lg={4}>
            <h5 className={styles.heading}>SEI INSTITUTE</h5>
            <div>
              <p
                style={{
                  textAlign: "justify",
                }}
              >
                An SEI institute aims to provide students with a comprehensive
                education that enables them to reach their full potential. The
                primary objective of our institute is to equip students with the
                knowledge and skills necessary for success in their chosen
                careers
                {/* and in life. This is achieved by providing a diverse and engaging
              curriculum that caters to the needs of all students. The institute
              also aims to foster a culture of lifelong learning, promoting
              critical thinking, creativity, and problem-solving skills among
              students. Additionally, education institutes aim to create a safe
              and inclusive environment where all students feel valued and
              respected, regardless of their backgrounds or abilities. They also
              strive to cultivate a sense of social responsibility, encouraging
              students to become active and engaged members of their
              communities. Ultimately, the objective of an our institute is to
              empower students to become confident, well-rounded individuals who
              can contribute positively to society.
             */}
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <h5 className={styles.heading}>USEFUL LINKS</h5>
            <div className={styles.linkContainer}>
              <Link href={"/"} className={styles.link}>
                Home
              </Link>
              <Link href={"/about"} className={styles.link}>
                About Us
              </Link>

              <Link href={"/about"} className={styles.link}>
                Course
              </Link>
              <Link href={"/about"} className={styles.link}>
                Contact Us
              </Link>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <h5 className={styles.heading}>CONTACT US </h5>
            <div className={styles.linkContainer}>
              <Link href={"/"} className={styles.link}>
                <BsFillTelephoneFill />
                <span className="mx-2">9842577214, 9841621432, 016619514</span>
              </Link>
              <Link href={"/about"} className={styles.link}>
                <AiFillMail />
                <span className="mx-2">seieducationalinstitute@gmail.com</span>
              </Link>
              <div className="my-1">
                <h5>FOLLOW US</h5>
                <div>
                  <AiFillFacebook size={40} />
                  <AiFillTwitterSquare size={40} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
