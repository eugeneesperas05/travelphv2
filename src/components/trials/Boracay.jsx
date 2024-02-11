import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Boracay() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Boracay</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/boracay.png"
                alt="Boracay Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Boracay</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">White Beach:</span> Boracay is
                famous for its stunning White Beach, a stretch of powdery white
                sand and crystal-clear turquoise waters. Relax on the beach,
                soak up the sun, and indulge in water activities like swimming,
                snorkeling, and paddleboarding. The picturesque scenery and
                vibrant atmosphere make White Beach a must-visit destination.
              </p>

              <p className="descriptions">
                <span className="desctitle">Water Sports and Adventures:</span>{" "}
                Boracay offers a wide range of thrilling water sports and
                adventures. Try parasailing, jet skiing, kiteboarding, or scuba
                diving to explore the colorful underwater world. Whether you're
                an adrenaline junkie or seeking a fun-filled experience, Boracay
                has something for everyone.
              </p>

              <p className="descriptions">
                <span className="desctitle">Vibrant Nightlife:</span> When the
                sun sets, Boracay comes alive with its vibrant nightlife. Enjoy
                beachfront bars, live music, fire dancers, and night markets.
                Dance the night away or simply relax with a drink in hand while
                enjoying the energetic atmosphere of Boracay after dark.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/sumilon.png"
                className="img-fluid"
                alt="Boracay Nightlife"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Island Adventures</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/kalanggaman.png"
                className="img-fluid"
                alt="Boracay Adventures"
              />
            </Col>
            <Col md={6}>
              <p>
                Beyond the beaches, Boracay offers exciting island adventures.
                Explore the crystal-clear waters and vibrant marine life by
                taking a boat tour or going snorkeling. Visit nearby islands
                like Puka Shell Beach, Crystal Cove Island, and Crocodile
                Island. Experience cliff jumping, cliff diving, and hiking for a
                thrilling and memorable adventure.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    For nature enthusiasts, Boracay has lush landscapes and
                    stunning viewpoints. Take a trek to Mount Luho, the highest
                    point on the island, for panoramic views of Boracay's
                    beauty. Discover the Bat Caves and explore the rich
                    biodiversity of Boracay's flora and fauna.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/sohoton.png"
                    className="img-fluid"
                    alt="Boracay Nature"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Relax and Unwind</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/visayas/bantayan.png"
                alt="Boracay Sunset"
              />
            </Col>
            <Col md={6}>
              <p>
                Boracay also offers plenty of opportunities to relax and unwind.
                Take a leisurely stroll along the beach, watch the stunning
                sunset, and enjoy a soothing massage by the shore. Indulge in
                delicious local cuisine, fresh seafood, and tropical drinks at
                beachfront restaurants. Experience ultimate relaxation and
                rejuvenation in the tranquil paradise of Boracay.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Boracay's Beauty</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/bantayan.png"
                alt="Boracay Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/sohoton.png"
                alt="Boracay Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/sumilon.png"
                alt="Boracay Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Boracay;
