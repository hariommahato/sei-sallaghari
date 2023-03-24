import { useGetHomeCarouselQuery } from "@/services/api";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel({ data }) {
  return (
    <Carousel>
      {data?.carousel?.map((item) => {
        return (item?.images?.map((item) => {
          return (
            <Carousel.Item interval={1000} style={{ height: "40vmax" }}>
              <img
                className="d-block w-100"
                src={item?.url}
                alt="First slide"
                style={{
                  height: "100%",
                  backgroundPosition: "center",
                  objectFit: "fill",
                }}
              />
            </Carousel.Item>
          );
        }))
      })}
    </Carousel>
  );
}

export default HomeCarousel;
