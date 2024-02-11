import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Camiguin() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Camiguin Island</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/camiguin.jpg"
                alt="Camiguin Island Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Camiguin Island</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">Natural Wonders:</span> Camiguin
                Island is known for its natural wonders. From majestic
                waterfalls and hot springs to stunning dive sites and pristine
                beaches, the island offers a diverse range of attractions for
                nature lovers. Explore the enchanting beauty of Katibawasan
                Falls, the healing waters of Ardent Hot Spring, and the vibrant
                marine life around Mantigue Island.
              </p>

              <p className="descriptions">
                <span className="desctitle">Rich History and Culture:</span>{" "}
                Camiguin Island is steeped in history and culture. Visit the Old
                Catarman Church Ruins, a historical site that was partially
                destroyed by the eruption of Mount Vulcan in the 19th century.
                Explore the Sunken Cemetery, a unique underwater memorial that
                serves as a reminder of the island's volcanic past. Immerse
                yourself in the local culture by participating in traditional
                festivals and experiencing the warm hospitality of the
                Camiguingnons.
              </p>

              <p className="descriptions">
                <span className="desctitle">Laid-Back Island Life:</span>{" "}
                Camiguin Island offers a laid-back and relaxed atmosphere,
                making it an ideal destination for those seeking peace and
                tranquility. Enjoy the slow-paced island life, where you can
                unwind on the beaches, indulge in fresh seafood, and immerse
                yourself in the serene surroundings. The friendly locals and
                unhurried lifestyle contribute to the island's charm and allure.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/camiguin-beach.jpg"
                className="img-fluid"
                alt="Camiguin Island Beach"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Explore Camiguin</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/camiguin-diving.jpg"
                className="img-fluid"
                alt="Camiguin Island Diving"
              />
            </Col>
            <Col md={6}>
              <p>
                Camiguin Island offers a myriad of activities for adventure
                enthusiasts. Dive into the vibrant underwater world and discover
                the rich marine biodiversity. Hike up Mount Hibok-Hibok and
                enjoy panoramic views of the island. Snorkel around the White
                Island sandbar and witness the beauty of the surrounding coral
                reefs. Explore the mystical beauty of the underwater cemetery
                and its colorful marine life. With its diverse range of
                attractions, Camiguin Island guarantees an unforgettable
                adventure.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Camiguin Island is also renowned for its mouthwatering
                    cuisine. Indulge in the island's culinary delights, such as
                    the famous lanzones fruit, which is celebrated during the
                    annual Lanzones Festival. Feast on fresh seafood dishes,
                    including grilled squid, prawns, and fish. Don't forget to
                    try the local delicacies like kinilaw (ceviche) and
                    binagoongan (pork in shrimp paste). Immerse yourself in the
                    flavors of Camiguin and experience the island's unique
                    culinary heritage.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/camiguin-food.jpg"
                    className="img-fluid"
                    alt="Camiguin Island Food"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Paradise in Camiguin</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/camiguin-carousel-1.jpg"
                alt="Camiguin Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/camiguin-carousel-2.jpg"
                alt="Camiguin Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/camiguin-carousel-3.jpg"
                alt="Camiguin Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Camiguin;
