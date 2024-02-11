import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function ApoIsland() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Apo Island</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/ApoIsland.png"
                alt="Apo Island Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Apo Island</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">Marine sanctuary:</span> Apo Island
                is renowned for its pristine marine ecosystem and vibrant coral
                reefs. It is a protected marine sanctuary, home to diverse
                marine species and teeming with marine life. Snorkelers and
                divers can explore the rich underwater world, encountering
                colorful fish, sea turtles, and other fascinating marine
                creatures.
              </p>

              <p className="descriptions">
                <span className="desctitle">World-class diving:</span> With its
                clear waters and diverse dive sites, Apo Island is a paradise
                for diving enthusiasts. The island offers a variety of dive
                spots suitable for both beginners and experienced divers. You
                can explore stunning coral gardens, encounter schools of fish,
                and even dive with sea turtles, making it a must-visit
                destination for scuba diving enthusiasts.
              </p>

              <p className="descriptions">
                <span className="desctitle">Breathtaking landscapes:</span>{" "}
                Apart from its underwater beauty, Apo Island also boasts
                breathtaking landscapes. The island is characterized by lush
                green hills, pristine white sand beaches, and crystal-clear
                waters. Visitors can relax on the beach, hike to viewpoints for
                panoramic views, or simply soak in the natural beauty of the
                surroundings.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/ApoIsland.png"
                className="img-fluid"
                alt="Apo Island Beach"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Local Culture and Activities</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/ApoIsland.png"
                className="img-fluid"
                alt="Apo Island Activities"
              />
            </Col>
            <Col md={6}>
              <p>
                Apo Island not only offers natural beauty but also provides
                opportunities to immerse in the local culture and engage in
                various activities. You can interact with the friendly local
                community, learn about their traditions, and experience their
                way of life. The island is known for its warm hospitality and
                welcoming atmosphere.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Snorkeling and diving are the highlights of Apo Island. Join
                    guided tours or rent equipment to explore the vibrant
                    underwater world. The island's protected marine sanctuary
                    ensures that you can witness the beauty of the coral reefs
                    and marine biodiversity up close.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/ApoIsland.png"
                    className="img-fluid"
                    alt="Apo Island Snorkeling"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Tranquility in Apo Island</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/ApoIsland.png"
                alt="Apo Island Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/ApoIsland.png"
                alt="Apo Island Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/ApoIsland.png"
                alt="Apo Island Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default ApoIsland;
