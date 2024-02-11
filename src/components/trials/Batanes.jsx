import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Batanes() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Batanes</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/batanes/1.jpg"
                alt="Batanes Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Batanes</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">Spectacular Landscapes:</span>{" "}
                Batanes is known for its breathtaking landscapes. From rolling
                hills to rugged cliffs, the natural beauty of the islands is
                truly awe-inspiring. Explore iconic spots like Marlboro Country,
                Rakuh-a-idi Spring, and Valugan Boulder Beach, where you can
                witness the power and beauty of nature.
              </p>

              <p className="descriptions">
                <span className="desctitle">Rich Cultural Heritage:</span>{" "}
                Batanes is home to the indigenous Ivatan people, known for their
                unique culture and traditions. Immerse yourself in the local way
                of life by visiting traditional stone houses, exploring
                centuries-old churches, and experiencing Ivatan cuisine. Learn
                about their customs, arts, and crafts, which have been preserved
                for generations.
              </p>

              <p className="descriptions">
                <span className="desctitle">
                  Peaceful and Serene Atmosphere:
                </span>{" "}
                Batanes offers a tranquil escape from the hustle and bustle of
                city life. With its unspoiled landscapes and low population
                density, the islands provide a peaceful and serene atmosphere.
                Take a break from the fast-paced world and enjoy the tranquility
                that Batanes has to offer.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/batanes/2.jpg"
                className="img-fluid"
                alt="Batanes Landscape"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Local Culture and Traditions</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/batanes/1.jpg"
                className="img-fluid"
                alt="Batanes Culture"
              />
            </Col>
            <Col md={6}>
              <p>
                Batanes is known for its rich cultural heritage and traditions.
                Explore the stone houses of Sabtang and admire their unique
                architecture that has withstood the test of time. Visit the
                iconic Basco Lighthouse and take in panoramic views of the
                surrounding landscapes. Experience the warmth and hospitality of
                the Ivatan people as you engage in conversations, participate in
                cultural activities, and learn about their way of life.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    The Ivatan cuisine is also a must-try. Sample traditional
                    dishes like coconut crabs, flying fish, and vakul (a
                    traditional headgear). Taste the flavors of Batanes and
                    savor the unique culinary delights that reflect the island's
                    culture and natural resources.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/batanes/4.jpg"
                    className="img-fluid"
                    alt="Batanes Food"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Nature's Beauty</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/batanes/5.jpg"
                alt="Batanes Carousel 1"
              />
            </Col>
            <Col md={6}>
              <p>
                Batanes is a paradise for nature lovers. Embark on scenic hikes
                and discover hidden gems such as the rolling hills of Vayang,
                the breathtaking cliffs of Naidi, and the picturesque beaches of
                Diura and Homoron. Marvel at the crystal-clear waters, vibrant
                marine life, and impressive rock formations. The unspoiled
                beauty of Batanes will leave you in awe and create lasting
                memories.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Discover Batanes</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/batanes/1.jpg"
                alt="Batanes Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/batanes/2.jpg"
                alt="Batanes Carousel 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/batanes/3.jpg"
                alt="Batanes Carousel 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Batanes;
