import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Britania() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Britania Islands</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/britania.jpg"
                alt="Britania Islands Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Britania Islands</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">White Sand Beaches:</span> Britania
                Islands is known for its breathtaking white sand beaches. Enjoy
                the pristine shores and crystal-clear waters as you swim,
                sunbathe, and relax. The islands offer a serene and secluded
                escape, perfect for beach lovers and nature enthusiasts.
              </p>

              <p className="descriptions">
                <span className="desctitle">Island Hopping:</span> Explore the
                beauty of Britania Islands through island hopping. Hop from one
                island to another and discover their unique charm. Marvel at the
                stunning rock formations, lush landscapes, and vibrant marine
                life along the way. Snorkeling and diving are popular activities
                to experience the underwater wonders of the islands.
              </p>

              <p className="descriptions">
                <span className="desctitle">Sunset Viewing:</span> Witness
                mesmerizing sunsets in Britania Islands. Find a picturesque spot
                on the beach and immerse yourself in the captivating colors of
                the sky as the sun sets over the horizon. The tranquil setting
                and stunning views create a magical atmosphere, perfect for
                romantic moments or peaceful reflection.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/britania-sunset.jpg"
                className="img-fluid"
                alt="Britania Islands Sunset"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Natural Beauty</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/britania-landscape.jpg"
                className="img-fluid"
                alt="Britania Islands Landscape"
              />
            </Col>
            <Col md={6}>
              <p>
                Britania Islands is blessed with natural beauty. Explore the
                lush landscapes, mangrove forests, and rock formations that dot
                the islands. Take a hike, go bird-watching, or simply immerse
                yourself in the tranquility of nature. The islands offer a
                peaceful retreat away from the hustle and bustle of city life.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    The turquoise waters surrounding the islands are teeming
                    with marine life. Snorkel or dive to witness the vibrant
                    coral reefs and colorful fish species. Experience the
                    underwater paradise and marvel at the rich biodiversity of
                    Britania Islands.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/britania-diving.jpg"
                    className="img-fluid"
                    alt="Britania Islands Diving"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Local Culture and Cuisine</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/images/britania-culture.jpg"
                alt="Britania Islands Culture"
              />
            </Col>
            <Col md={6}>
              <p>
                Immerse yourself in the rich local culture and cuisine of
                Britania Islands. Interact with the friendly locals and learn
                about their traditions, customs, and way of life. Sample
                delicious seafood dishes prepared using fresh ingredients from
                the surrounding waters. Indulge in local delicacies and savor
                the flavors of the region. The warm hospitality and unique
                cultural experiences will make your visit to Britania Islands
                truly memorable.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience the Beauty of Britania</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/britania-carousel-1.jpg"
                alt="Britania Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/britania-carousel-2.jpg"
                alt="Britania Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/britania-carousel-3.jpg"
                alt="Britania Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Britania;
