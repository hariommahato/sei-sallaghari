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

              <Link href={"/course"} className={styles.link}>
                Course
              </Link>
              <Link href={"/contact"} className={styles.link}>
                Contact Us
              </Link>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <h5 className={styles.heading}>CONTACT US </h5>
            <div className={styles.linkContainer}>
              <Link href={"/"} className={styles.link}>
                <BsFillTelephoneFill />
                <span className="mx-2">9843577214, 9841621432, 016619514</span>
              </Link>

              <Link
                href="mailto:seieducationalinstitute@gmail.com"
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <AiFillMail />
                <span className="mx-2">seieducationalinstitute@gmail.com</span>
              </Link>

              <div className="my-1">
                <h5>FOLLOW US</h5>
                <div>
                  <Link
                    href="https://www.facebook.com/profile.php?id=100063934392442"
                    target={"_blank"}
                    style={{
                      color: "white",
                    }}
                  >
                    <AiFillFacebook size={40} />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <div className="my-3 p-3">
          <h6>Designed & Developed By -Hariom Mahato</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
