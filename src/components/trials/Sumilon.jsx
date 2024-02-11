import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Sumilon() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Sumilon Island</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/sumilon.png"
                alt="Sumilon Island Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Discover the Paradise of Cebu</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Sumilon Island is a paradise located in Cebu, Philippines. With
                its crystal-clear waters, pristine white sand beaches, and
                vibrant marine life, Sumilon offers a breathtaking tropical
                escape.
              </p>
              <p className="descriptions">
                <span className="desctitle">White Sand Beaches:</span> One of
                the main attractions of Sumilon Island is its stunning white
                sand beaches. Relax on the powdery shores, take a refreshing
                swim in the turquoise waters, or simply bask in the beauty of
                the surrounding nature.
              </p>
              <p className="descriptions">
                <span className="desctitle">Snorkeling and Diving:</span> Dive
                into the underwater wonderland surrounding Sumilon Island.
                Explore vibrant coral reefs, encounter colorful marine life, and
                swim alongside majestic sea turtles. Snorkeling and diving
                enthusiasts will be delighted by the rich biodiversity and clear
                visibility of the waters.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/sumilon.png"
                className="img-fluid"
                alt="Sumilon Beach"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Experience Paradise on Sumilon Island</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/sumilon.png"
                className="img-fluid"
                alt="Sumilon Diving"
              />
            </Col>
            <Col md={6}>
              <p>
                Sumilon Island offers a wide range of activities to immerse
                yourself in its natural wonders. Go snorkeling or diving to
                discover the vibrant marine ecosystem teeming with colorful fish
                and fascinating coral formations. You can also enjoy kayaking,
                paddleboarding, and island hopping to nearby islets for a day of
                adventure and exploration.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Take a nature walk and discover the island's lush forests
                    and scenic viewpoints. Enjoy a picnic amidst the picturesque
                    landscapes or indulge in a beachside massage for ultimate
                    relaxation. Don't forget to catch the breathtaking sunset
                    views, creating a magical ambiance that epitomizes the
                    beauty of Sumilon.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/sumilon.png"
                    className="img-fluid"
                    alt="Sumilon Sunset"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Sumilon Island Getaway</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/visayas/sumilon.png"
                alt="Sumilon Boat"
              />
            </Col>
            <Col md={6}>
              <p>
                To make the most of your visit to Sumilon Island, it's
                recommended to plan your trip in advance. Arrange transportation
                to the island, either through private boats or organized tours.
                You can stay overnight in the luxurious Sumilon Bluewater Resort
                or choose to camp on the island for a unique experience. Don't
                forget to bring your snorkeling gear, beach essentials, and a
                camera to capture the breathtaking moments.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Discover the Beauty of Sumilon Island</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/sumilon.png"
                alt="Sumilon Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/sumilon.png"
                alt="Sumilon Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/sumilon.png"
                alt="Sumilon Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Sumilon;
