import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Sohoton() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Sohoton Cove</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/Sohoton.png"
                alt="Sohoton Cove Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">
            Explore the Hidden Gem of Surigao del Norte
          </h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Sohoton Cove is a hidden gem located in Surigao del Norte,
                Philippines. Known for its enchanting landscapes and mystical
                caves, Sohoton offers a unique and memorable experience for
                nature lovers and adventure seekers.
              </p>

              <p className="descriptions">
                <span className="desctitle">Caving and Lagoons:</span> One of
                the main attractions in Sohoton is the amazing caving and lagoon
                system. Explore the crystal-clear waters of the Blue Lagoon and
                marvel at the stunning rock formations. Enter the Sohoton Cove
                and navigate through its captivating caves, such as the Hagukan
                Cave and the Magkukuob Cave. Don't miss the chance to swim in
                the enchanting Tojoman Lagoon, surrounded by lush greenery.
              </p>

              <p className="descriptions">
                <span className="desctitle">Jellyfish Sanctuary:</span> Another
                highlight of Sohoton is the Jellyfish Sanctuary, where you can
                encounter the mesmerizing stingless jellyfish. Take a boat ride
                to the sanctuary and witness these gentle creatures gracefully
                swimming in the clear waters. You can even snorkel alongside
                them for a truly unique and unforgettable experience.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/Sohoton.png"
                className="img-fluid"
                alt="Sohoton Caving"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Immerse Yourself in Sohoton's Natural Wonders</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/Sohoton.png"
                className="img-fluid"
                alt="Sohoton Jellyfish"
              />
            </Col>
            <Col md={6}>
              <p>
                Sohoton offers a range of activities to explore its natural
                wonders. Take a guided tour to discover the hidden caves, where
                you can marvel at stalactites, stalagmites, and underground
                rivers. Navigate the narrow passages and witness the unique rock
                formations sculpted by nature over thousands of years.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Venture into the Jellyfish Sanctuary and encounter the
                    stingless jellyfish. These fascinating creatures provide a
                    one-of-a-kind snorkeling experience. Swim alongside them and
                    witness their graceful movements as they pulsate through the
                    water. It's a truly mesmerizing sight.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/Sohoton.png"
                    className="img-fluid"
                    alt="Sohoton Cave"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Sohoton Adventure</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/visayas/Sohoton.png"
                alt="Sohoton Boat"
              />
            </Col>
            <Col md={6}>
              <p>
                To make the most of your visit to Sohoton, it's recommended to
                plan your trip in advance. Arrange a boat tour with a local
                guide who can navigate the coves and caves safely. Be prepared
                to get wet, as some areas require swimming or snorkeling to
                access. Don't forget to bring your camera to capture the
                stunning natural beauty of Sohoton.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience the Magic of Sohoton</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/Sohoton.png"
                alt="Sohoton Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/Sohoton.png"
                alt="Sohoton Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/Sohoton.png"
                alt="Sohoton Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Sohoton;
