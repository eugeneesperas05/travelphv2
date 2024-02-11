import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Canigao() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Canigao Island</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/canigao.png"
                alt="Canigao Island Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Canigao Island</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">Pristine Beaches:</span> Canigao
                Island is renowned for its pristine beaches and crystal-clear
                waters. With its powdery white sand, vibrant coral reefs, and
                abundant marine life, the island offers a paradise-like setting
                for beach lovers and snorkeling enthusiasts. Relax on the
                secluded shores, swim in the turquoise waters, and explore the
                colorful underwater world.
              </p>

              <p className="descriptions">
                <span className="desctitle">Unspoiled Nature:</span> Canigao
                Island is a hidden gem with unspoiled natural beauty. The island
                is surrounded by lush vegetation, including coconut trees and
                tropical plants. Take a leisurely stroll along the island's
                trails, immerse yourself in the tranquil ambiance, and discover
                the island's unique flora and fauna.
              </p>

              <p className="descriptions">
                <span className="desctitle">Island Adventure:</span> Canigao
                Island offers various activities for adventure seekers. Embark
                on a snorkeling or diving expedition to explore the vibrant
                coral reefs and encounter a diverse array of marine species. Go
                kayaking or paddleboarding in the calm waters surrounding the
                island. You can also enjoy beach volleyball, beachcombing, and
                island hopping to nearby islands.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/canigao.png"
                className="img-fluid"
                alt="Canigao Island Beach"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Experience Canigao Island</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/canigao.png"
                className="img-fluid"
                alt="Canigao Island Snorkeling"
              />
            </Col>
            <Col md={6}>
              <p>
                Canigao Island is not only a paradise for beach lovers but also
                a haven for seafood enthusiasts. Indulge in fresh and delicious
                seafood dishes, including grilled fish, shrimp, and squid. Taste
                the local flavors and savor the culinary delights unique to the
                island. Don't miss the opportunity to try the popular local
                delicacies and traditional dishes.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Immerse yourself in the local culture by participating in
                    traditional activities and festivals. Experience the warmth
                    and hospitality of the locals, who are known for their
                    friendliness and welcoming nature. Learn about the island's
                    rich history and traditions{" "}
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/canigao.png"
                    className="img-fluid"
                    alt="Canigao Island Culture"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Explore Canigao Island</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/visayas/canigao.png"
                alt="Canigao Island Landscape"
              />
            </Col>
            <Col md={6}>
              <p>
                Canigao Island is a natural paradise with stunning landscapes
                and breathtaking views. Immerse yourself in the beauty of the
                island's pristine beaches, lush greenery, and azure waters.
                Enjoy picturesque sunsets, peaceful walks along the shoreline,
                and panoramic vistas from elevated viewpoints. Capture the
                essence of Canigao Island's natural splendor and create lasting
                memories.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Tranquility in Canigao Island</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/canigao.png"
                alt="Canigao Island Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/canigao.png"
                alt="Canigao Island Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/canigao.png"
                alt="Canigao Island Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Canigao;
