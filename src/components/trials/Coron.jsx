import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Coron() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Coron</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/coron.jpg"
                alt="Coron Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Discover the Beauty of Coron</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Coron is a tropical paradise located in Palawan, Philippines. It
                is famous for its crystal-clear turquoise waters, stunning
                limestone cliffs, and pristine white-sand beaches. The natural
                beauty of Coron attracts tourists from around the world who come
                to explore its rich marine life, vibrant coral reefs, and hidden
                lagoons.
              </p>

              <p className="descriptions">
                <span className="desctitle">Island Hopping:</span> One of the
                best ways to experience Coron is through island hopping tours.
                Hop on a boat and explore the enchanting islands and lagoons
                scattered around Coron Bay. Visit popular spots like Kayangan
                Lake, Twin Lagoon, and Barracuda Lake, where you can swim,
                snorkel, and marvel at the breathtaking underwater landscapes.
              </p>

              <p className="descriptions">
                <span className="desctitle">World-Class Diving:</span> Coron is
                a paradise for divers. It is home to numerous shipwrecks,
                including the famous WWII Japanese shipwrecks, which have now
                become vibrant coral reefs teeming with marine life. Dive
                enthusiasts can explore these underwater treasures and witness
                the fascinating combination of history and nature beneath the
                sea.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/coron-island.jpg"
                className="img-fluid"
                alt="Coron Island"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Experience Coron's Natural Wonders</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/coron-diving.jpg"
                className="img-fluid"
                alt="Coron Diving"
              />
            </Col>
            <Col md={6}>
              <p>
                Aside from island hopping and diving, there are many other
                activities to enjoy in Coron. Take a relaxing dip in the natural
                hot springs, hike to the top of Mount Tapyas for panoramic views
                of the town and surrounding islands, or go kayaking in the
                mangrove forests. You can also indulge in delicious seafood and
                traditional Filipino cuisine at local restaurants.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    To complete your Coron experience, don't miss the
                    mesmerizing sunset views. Find a spot along the beach or
                    from a viewpoint and witness the sky turning into a canvas
                    of vibrant colors as the sun sets behind the horizon. It's a
                    magical moment that will leave you in awe of nature's
                    beauty.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/coron-sunset.jpg"
                    className="img-fluid"
                    alt="Coron Sunset"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Trip to Coron</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/images/coron-beach.jpg"
                alt="Coron Beach"
              />
            </Col>
            <Col md={6}>
              <p>
                Whether you're seeking adventure or relaxation, Coron offers a
                perfect blend of natural beauty and thrilling experiences. From
                exploring hidden lagoons to diving into the depths of
                shipwrecks, every moment in Coron is filled with awe-inspiring
                wonders. Plan your trip to Coron and embark on an unforgettable
                journey that will leave you with memories to last a lifetime.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Gallery</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/coron-gallery-1.jpg"
                alt="Coron Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/coron-gallery-2.jpg"
                alt="Coron Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/coron-gallery-3.jpg"
                alt="Coron Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Coron;
