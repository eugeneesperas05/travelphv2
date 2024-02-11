import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Kalanggaman() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Kalanggaman Island</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/kalanggaman.png"
                alt="Kalanggaman Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">
            Discover the Beauty of Kalanggaman Island
          </h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Kalanggaman Island is a pristine paradise located in the
                Philippines. With its long stretch of powdery white sand,
                crystal-clear turquoise waters, and picturesque sandbars, it is
                a must-visit destination for beach lovers and nature
                enthusiasts.
              </p>

              <p className="descriptions">
                <span className="desctitle">Beach Bliss:</span> Kalanggaman
                Island boasts a stunning beach that rivals some of the best in
                the world. Its soft, white sand and clear waters create a
                postcard-perfect setting for relaxation and leisurely walks
                along the shoreline. You can swim, snorkel, or simply bask in
                the sun while enjoying the breathtaking views.
              </p>

              <p className="descriptions">
                <span className="desctitle">Snorkeling and Diving:</span> The
                island is surrounded by vibrant coral reefs teeming with marine
                life. Snorkelers and divers can explore the underwater
                wonderland and encounter colorful fish, coral formations, and
                other fascinating sea creatures. It's a paradise for underwater
                enthusiasts and nature lovers.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/kalanggaman.png"
                className="img-fluid"
                alt="Kalanggaman Snorkeling"
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
                src="/visayas/kalanggaman.png"
                className="img-fluid"
                alt="Kalanggaman Activities"
              />
            </Col>
            <Col md={6}>
              <p>
                Aside from beach activities, Kalanggaman Island offers a variety
                of recreational opportunities. You can go island hopping to
                nearby islets, explore hidden lagoons, or try kayaking and
                paddleboarding in the calm waters. The island also provides
                camping facilities, allowing you to spend a night under the
                stars and wake up to a breathtaking sunrise.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Nature lovers can take a leisurely hike around the island
                    and discover its diverse flora and fauna. Kalanggaman is
                    home to various bird species and other wildlife, making it
                    an ideal destination for birdwatching and nature
                    photography. Don't forget to capture the stunning views from
                    the island's viewpoint.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/kalanggaman.png"
                    className="img-fluid"
                    alt="Kalanggaman Viewpoint"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Visit to Kalanggaman Island</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/visayas/kalanggaman.png"
                alt="Kalanggaman Gallery 1"
              />
            </Col>
            <Col md={6}>
              <p>
                To experience the beauty of Kalanggaman Island, plan your trip
                accordingly. The island can be reached by boat from various
                ports in the region. It's recommended to bring your own food and
                drinking water, as there are limited facilities on the island.
                Camping is allowed, but make sure to follow the island's rules
                and regulations to help preserve its natural beauty.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Paradise at Kalanggaman Island</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/kalanggaman.png"
                alt="Kalanggaman Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/kalanggaman.png"
                alt="Kalanggaman Gallery 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/kalanggaman.png"
                alt="Kalanggaman Gallery 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Kalanggaman;
