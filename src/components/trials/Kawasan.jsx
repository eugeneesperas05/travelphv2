import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Kawasan() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Kawasan Falls</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/kawasan.png"
                alt="Kawasan Falls Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Discover the Beauty of Kawasan Falls</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Kawasan Falls is a breathtaking natural wonder located in the
                Philippines. With its cascading turquoise waterfalls surrounded
                by lush greenery, it is a popular destination for nature lovers
                and adventure enthusiasts.
              </p>

              <p className="descriptions">
                <span className="desctitle">Crystal-clear Waters:</span> The
                main highlight of Kawasan Falls is its crystal-clear and
                refreshing turquoise waters. The falls consist of multiple
                tiers, each offering a unique swimming and relaxation
                experience. You can take a dip in the cool waters, stand under
                the powerful cascades for a natural massage, or simply enjoy the
                serene atmosphere.
              </p>

              <p className="descriptions">
                <span className="desctitle">Canyoneering Adventure:</span>{" "}
                Kawasan Falls is also known for its thrilling canyoneering
                adventure. You can embark on an exhilarating journey through the
                canyons, jump off cliffs into natural pools, navigate through
                rapids, and swim in the river. It's an adrenaline-pumping
                experience that allows you to explore the stunning landscape and
                challenge yourself in a unique way.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/kawasan.png"
                className="img-fluid"
                alt="Kawasan Canyoneering"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Unwind and Explore</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/kawasan.png"
                className="img-fluid"
                alt="Kawasan Trekking"
              />
            </Col>
            <Col md={6}>
              <p>
                Apart from enjoying the falls, Kawasan also offers other outdoor
                activities. You can go trekking through the surrounding jungle
                and discover hidden trails, lush vegetation, and native
                wildlife. The area is also ideal for camping, picnicking, and
                simply immersing yourself in the peaceful natural surroundings.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Kawasan Falls is part of the greater Badian Canyoneering
                    experience. Visitors can explore the nearby Osmena Peak, the
                    highest point in Cebu, offering stunning panoramic views of
                    the surrounding landscape. Additionally, you can visit
                    nearby Moalboal, a popular diving spot known for its vibrant
                    marine life and coral reefs.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/kawasan.png"
                    className="img-fluid"
                    alt="Kawasan Moalboal"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Visit to Kawasan Falls</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/visayas/kawasan.png"
                alt="Kawasan Tourists"
              />
            </Col>
            <Col md={6}>
              <p>
                If you're planning to visit Kawasan Falls, here are a few tips:
              </p>
              <ul className="descriptions">
                <li>
                  Wear comfortable clothing and footwear suitable for trekking
                  and water activities.
                </li>
                <li>Bring a waterproof bag to protect your belongings.</li>
                <li>Carry water, snacks, and sunscreen.</li>
                <li>
                  Follow safety guidelines and instructions from local guides.
                </li>
                <li>Respect the environment and keep the area clean.</li>
                <li>
                  Consider visiting during weekdays or non-peak seasons for a
                  less crowded experience.
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience the Wonder of Kawasan Falls</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/kawasan.png"
                alt="Kawasan Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/kawasan.png"
                alt="Kawasan Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/kawasan.png"
                alt="Kawasan Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Kawasan;
