import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Anawangin() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Anawangin</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/anawangin/3.jpg"
                alt="Anawangin Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Anawangin</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">Secluded paradise:</span> Anawangin
                is a hidden gem nestled on the coast of Zambales, Philippines.
                It offers a secluded and tranquil escape from the bustling city
                life. With its pristine white sand beach, crystal-clear waters,
                and towering pine trees, Anawangin provides a serene and
                picturesque setting for nature lovers and beach enthusiasts.
              </p>

              <p className="descriptions">
                <span className="desctitle">
                  Camping and outdoor adventures:
                </span>{" "}
                Anawangin is known for its camping opportunities and outdoor
                adventures. You can set up a tent along the beach and spend a
                night under the starry sky. The surrounding hills and mountains
                offer hiking trails and scenic viewpoints, allowing you to
                immerse yourself in the beauty of nature.
              </p>

              <p className="descriptions">
                <span className="desctitle">Unique landscape:</span> What sets
                Anawangin apart is its unusual landscape. The beach is adorned
                with pine trees instead of the typical coconut palms, creating a
                distinct and charming atmosphere. The juxtaposition of the sandy
                shore, clear waters, and lush pine forest makes Anawangin a
                truly enchanting destination.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/anawangin/2.jpg"
                className="img-fluid"
                alt="Anawangin Beach"
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
                src="/cities/anawangin/1.jpg"
                className="img-fluid"
                alt="Anawangin Activities"
              />
            </Col>
            <Col md={6}>
              <p>
                Anawangin offers more than just natural beauty; it also
                showcases the local culture and a range of activities to enjoy.
                You can engage in water sports like swimming, snorkeling, and
                kayaking to explore the vibrant marine life and underwater
                wonders. Fishing and boat tours are popular among visitors,
                providing an opportunity to experience the traditional
                livelihood of the coastal communities.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    The indigenous Aeta people inhabit the nearby mountains, and
                    their rich cultural heritage can be experienced through
                    guided tours and interactions. Learn about their traditional
                    practices, craftsmanship, and folk stories, gaining a deeper
                    appreciation for their way of life and the cultural
                    diversity of the region.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/anawangin/4.jpg"
                    className="img-fluid"
                    alt="Anawangin Aeta People"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Explore the Beauty of Anawangin</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/anawangin/5.jpg"
                alt="Anawangin Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/anawangin/3.jpg"
                alt="Anawangin Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/anawangin/2.jpg"
                alt="Anawangin Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Anawangin;
