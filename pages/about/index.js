import SeiMap from "@/frontend/components/Map";
import OurServices from "@/frontend/components/OurServices";
import ChooseUs from "@/frontend/components/WhyChooseus";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.innerDiv}>
        <h1 className={styles.heading}>ABOUT US</h1>
      </div>

      <Row className={styles.row}>
        <Col sm={12} md={12} lg={5}>
          <Card style={{border:"none"}}>
            <Card.Img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/335888114_743186250625986_1793930835908209515_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=N9MPwFc1i_gAX_FTk5J&_nc_ht=scontent.fktm10-1.fna&oh=00_AfCOyIEhbP5oo_LcqWB1Ny5gKBscg3K085oMYkFsQZo2Ww&oe=641A0A76" className={styles.image} />
            <h6 className="my-1">Angad Mahato - CEO(SEI INSITUTE)</h6>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={7}>
          <h5>Message From CEO</h5>
          <p className={styles.text}>
            An SEI institute aims to provide students with a comprehensive
            education that enables them to reach their full potential. The
            primary objective of our institute is to equip students with the
            knowledge and skills necessary for success in their chosen careers
            and in life. This is achieved by providing a diverse and engaging
            curriculum that caters to the needs of all students. The institute
            also aims to foster a culture of lifelong learning, promoting
            critical thinking, creativity, and problem-solving skills among
            students. Additionally, education institutes aim to create a safe
            and inclusive environment where all students feel valued and
            respected, regardless of their backgrounds or abilities. They also
            strive to cultivate a sense of social responsibility, encouraging
            students to become active and engaged members of their communities.
            Ultimately, the objective of an our institute is to empower students
            to become confident, well-rounded individuals who can contribute
            positively to society.
          </p>
        </Col>
      </Row>
      <ChooseUs />
      <OurServices />
      <SeiMap />
    </div>
  );
};

export default About;
