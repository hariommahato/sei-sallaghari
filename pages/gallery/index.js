import Loader from "@/frontend/components/Loader/Loader";
import { useGetGalleryQuery } from "@/services/api";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./Gallery.module.css";
const Gallery = () => {
  const { data, isLoading } = useGetGalleryQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className="my-3"
            style={{
              width: "80%",
              margin: "auto",
            }}
          >
            <h1 className="text-center ">Our Gallery</h1>

            <Row>
              {data?.gallery?.map((item, i) => {
                return item?.images?.map((item, i) => {
                  return (
                    <Col lg={3} md={4} sm={6} xs={6}>
                      <Card className={styles.card}>
                        <Link href={item?.url} target="_blank">
                          <Card.Img
                            variant="top"
                            src={item?.url}
                            className={styles.image}
                          />
                        </Link>
                      </Card>
                    </Col>
                  );
                });
              })}
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default Gallery;
