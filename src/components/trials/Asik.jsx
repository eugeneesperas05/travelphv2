import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Asik() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Asik-Asik Falls</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/asik-asik.jpg"
                alt="Asik-Asik Falls Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Asik-Asik Falls</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">Hidden gem:</span> Asik-Asik Falls
                is a hidden gem tucked away in the remote mountains of Cotabato,
                Philippines. It is a one-of-a-kind waterfall known for its
                unique curtain-like appearance, where water flows through layers
                of lush green vegetation, creating a stunning natural spectacle.
              </p>

              <p className="descriptions">
                <span className="desctitle">Untouched beauty:</span> Asik-Asik
                Falls remains relatively untouched by commercialization,
                allowing visitors to experience its natural beauty in its
                pristine state. The surrounding area is filled with untouched
                forests, creating a serene and peaceful atmosphere for nature
                lovers and adventure seekers.
              </p>

              <p className="descriptions">
                <span className="desctitle">Refreshing experience:</span> The
                cascading waterfalls of Asik-Asik create a refreshing and
                rejuvenating experience. Visitors can take a dip in the
                crystal-clear waters, enjoy the cool mist from the falls, and
                immerse themselves in the tranquil ambiance of this hidden
                paradise.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/asik-asik-nature.jpg"
                className="img-fluid"
                alt="Asik-Asik Falls Nature"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Immerse in Nature's Beauty</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/asik-asik-surroundings.jpg"
                className="img-fluid"
                alt="Asik-Asik Falls Surroundings"
              />
            </Col>
            <Col md={6}>
              <p>
                Asik-Asik Falls offers more than just the waterfall itself. The
                surrounding landscapes are equally breathtaking. You can explore
                the lush forests, hike along nature trails, and discover hidden
                treasures amidst the natural wonders. The untouched beauty of
                Asik-Asik Falls and its surroundings provides a memorable and
                immersive experience for nature enthusiasts.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Photography enthusiasts will find endless opportunities to
                    capture stunning shots of the waterfall, the surrounding
                    greenery, and the ethereal atmosphere. The picturesque
                    scenery of Asik-Asik Falls is a haven for those who
                    appreciate the beauty of nature and seek to preserve its
                    essence through the lens of a camera.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/asik-asik-photography.jpg"
                    className="img-fluid"
                    alt="Asik-Asik Falls Photography"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">A Slice of Paradise</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/images/asik-asik-panorama.jpg"
                alt="Asik-Asik Falls Panorama"
              />
            </Col>
            <Col md={6}>
              <p>
                Asik-Asik Falls is truly a slice of paradise in the heart of
                Cotabato. Its untouched beauty, refreshing ambiance, and serene
                surroundings make it a must-visit destination for nature lovers
                and adventure seekers. Whether you're seeking a tranquil retreat
                or an opportunity to immerse yourself in nature's wonders,
                Asik-Asik Falls offers an unforgettable experience that will
                leave you in awe of its breathtaking beauty.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Embrace the Beauty</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/asik-asik-carousel-1.jpg"
                alt="Asik-Asik Falls Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/asik-asik-carousel-2.jpg"
                alt="Asik-Asik Falls Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/asik-asik-carousel-3.jpg"
                alt="Asik-Asik Falls Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Asik;
