/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Inter } from "next/font/google";
import HomeCarousel from "@/frontend/components/Carousel";
import ChooseUs from "@/frontend/components/WhyChooseus";
import OurServices from "@/frontend/components/OurServices";
import SeiMap from "@/frontend/components/Map";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Loader from "@/frontend/components/Loader/Loader";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          SEI INSTITUTE (sallaghari,Bhaktapur)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>ADMISSION OPEN FOR BRIDGE COURSE 2081 BS</h4>
        <p style={{ color: "Red" }}>BOOK YOUR SEAT NOW.......</p>
        <div>
          <div>
            <p>DISCOUNT VALID FROM  "CHAITRA 13 -- CHAIRTRA 30" ONLY</p>
            <ul>
              <li>A+ Full SCholarship</li>
              <li>A 50% SCholarship</li>
              <li>B+ 40% SCholarship</li>
              <li>B 30% SCholarship</li>
            </ul>
          </div>
          <Button as={Link} href="/enroll">
            Book Now
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function Home({ data }) {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setModalShow(true);
  }, []);
  return (
    <>
      <Head>
        <title>SEI INSTITUTE SALLAGHARI</title>
        <meta
          name="description"
          content="SEI(One of the best institute in the town)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <HomeCarousel data={data} />

        <ChooseUs />
        <OurServices />
        <SeiMap />
      </main>
    </>
  );
}
export async function getServerSideProps() {
  const carousel = await fetch(
    `https://sei-institute-sallaghari.vercel.app/api/carousel`
  );
  const data = await carousel.json();

  return { props: { data } };
}

export default Home;
