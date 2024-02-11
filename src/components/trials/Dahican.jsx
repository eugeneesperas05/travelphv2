import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Dahican() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Dahican</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/dahican.jpg"
                alt="Dahican Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Experience Paradise in Dahican</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Dahican is a hidden gem located in Mindanao, Philippines. It is
                known for its pristine white-sand beach, crystal-clear turquoise
                waters, and breathtaking waves. Dahican Beach is a paradise for
                beach lovers and surf enthusiasts, offering a perfect blend of
                tranquility and adventure.
              </p>

              <p className="descriptions">
                <span className="desctitle">Surfing:</span> Dahican Beach is
                renowned for its consistent and powerful waves, making it a
                popular destination for surfers. Whether you're a beginner or an
                experienced surfer, you can catch some incredible waves and ride
                the adrenaline rush. Surf schools and rental shops are available
                for those who want to learn or enhance their surfing skills.
              </p>

              <p className="descriptions">
                <span className="desctitle">Marine Biodiversity:</span> Dive
                into the crystal-clear waters of Dahican and discover its rich
                marine biodiversity. Snorkeling and scuba diving are popular
                activities here, allowing you to explore vibrant coral reefs,
                swim alongside exotic marine life, and witness the beauty of the
                underwater world.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/dahican-surfing.jpg"
                className="img-fluid"
                alt="Dahican Surfing"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Unwind and Embrace Nature</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/dahican-diving.jpg"
                className="img-fluid"
                alt="Dahican Diving"
              />
            </Col>
            <Col md={6}>
              <p>
                Aside from surfing and diving, there are plenty of other
                activities to enjoy in Dahican. Take a leisurely stroll along
                the pristine beach, sunbathe on the soft sand, or simply relax
                under the shade of palm trees. You can also try other water
                sports like kayaking, paddleboarding, or even kiteboarding.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Dahican is not just about the beach and water activities.
                    You can explore the nearby mangrove forests, go on nature
                    walks, or visit the local villages to experience the warm
                    hospitality and vibrant culture of the locals. Don't forget
                    to indulge in delicious seafood and traditional Filipino
                    dishes at beachfront restaurants.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/dahican-nature.jpg"
                    className="img                    -fluid"
                    alt="Dahican Nature"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Capture the Beauty of Dahican</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/images/dahican-gallery-1.jpg"
                alt="Dahican Gallery 1"
              />
            </Col>
            <Col md={6}>
              <p>
                Dahican is a paradise for photographers and nature enthusiasts.
                From stunning sunsets to vibrant marine life, every moment in
                Dahican offers an opportunity to capture breathtaking photos.
                Don't forget to bring your camera or smartphone to document your
                memorable experiences and share them with others.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Trip to Dahican</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/dahican-gallery-2.jpg"
                alt="Dahican Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/dahican-gallery-3.jpg"
                alt="Dahican Gallery 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/dahican-gallery-4.jpg"
                alt="Dahican Gallery 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Dahican;
