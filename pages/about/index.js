import SeiMap from "@/frontend/components/Map";
import OurServices from "@/frontend/components/OurServices";
import ChooseUs from "@/frontend/components/WhyChooseus";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "../../styles/About.module.css";

const About = ({ data }) => {
  return (
    <div>
      {console.log(data)}
      <div className={styles.innerDiv}>
        <h1 className={styles.heading}>ABOUT US</h1>
      </div>

      <Row className={styles.row}>
        <Col sm={12} md={12} lg={5}>
          <Card style={{ border: "none", height: "100%", width: "100%" }}>
            {data?.about?.map((item, i) => {
              return (
                <Card.Img
                  key={i}
                  src={item?.images?.url}
                  style={{ height: "100%", width: "100%" }}
                />
              );
            })}

            <h6 className="my-1">Angad Mahato - CEO(SEI INSITUTE)</h6>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={7}>
          <h5>Message From CEO</h5>
          {data?.about?.map((item, i) => {
            return (
              <p className={styles.text} key={i}>
                {item?.description}
              </p>
            );
          })}
        </Col>
      </Row>
      <ChooseUs />
      <OurServices />
      <SeiMap />
    </div>
  );
};
export async function getServerSideProps() {
  const about = await fetch(`https://sei-institute-sallaghari.vercel.app/api/about`);
  const data = await about.json();

  return { props: { data } };
}

export default About;
