import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{ height: "40vmax" }}>
        <img
          className="d-block w-100"
          src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/321092070_5937114326350213_1090632282505217635_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=owCSBdqQOpsAX8gBP3Z&_nc_ht=scontent.fktm10-1.fna&oh=00_AfAkLQT2NIi9DMezPoBgzhGXb2UMJ2WtnDruX2032H-AFQ&oe=641ADE9B"
          alt="First slide"
          style={{
            height: "100%",
            backgroundPosition: "center",
            objectFit: "fill",
          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ height: "40vmax" }}>
        <img
          className="d-block w-100"
          src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/327305014_1219116708703087_6416696309597140937_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5zTERHGJwZ0AX_BU_YA&_nc_ht=scontent.fktm10-1.fna&oh=00_AfCGskiGGeEKzasLePDqiXN3qcx08PPO6SrJ45cVGYDN-Q&oe=641A7E38"
          alt="Second slide"
          style={{
            height: "100%",
            backgroundPosition: "center",
            objectFit: "fill",
          }}
        />
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ height: "40vmax" }}>
        <img
          className="d-block w-100"
          src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/290932348_7695331897204634_5390394090034546988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qAdRUt-RiEQAX-9cx1p&_nc_ht=scontent.fktm10-1.fna&oh=00_AfD7R8pEeFftth2s3SgoazrQ7eYB2M0BHshRpXoDfseJXg&oe=641A94AB"
          alt="Second slide"
          style={{
            height: "100%",
            backgroundPosition: "center",
            objectFit: "fill",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
