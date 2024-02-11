import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Mayon() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Mayon Volcano</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/mayon/3.jpg"
                alt="Mayon Volcano Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Experience the Majesty of Mayon Volcano</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Mayon Volcano is an iconic natural wonder located in the
                Philippines. Known for its perfectly symmetrical cone shape and
                lush surroundings, it attracts visitors from around the world
                who are mesmerized by its beauty and grandeur.
              </p>

              <p className="descriptions">
                <span className="desctitle">Breathtaking Views:</span> The
                majestic Mayon Volcano offers stunning panoramic views from
                various vantage points. Whether you're viewing it from afar or
                up close, its towering presence and the surrounding landscape
                create a mesmerizing sight that leaves a lasting impression.
              </p>

              <p className="descriptions">
                <span className="desctitle">Outdoor Activities:</span> Mayon
                Volcano is not only a sight to behold but also a playground for
                outdoor enthusiasts. You can engage in a variety of activities
                such as hiking, trekking, and camping around the volcano. There
                are several trails of different difficulty levels that cater to
                both beginners and experienced adventurers.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/mayon/2.png"
                className="img-fluid"
                alt="Mayon Trekking"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Unforgettable Experiences</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/mayon/4.jpg"
                className="img-fluid"
                alt="Mayon Activities"
              />
            </Col>
            <Col md={6}>
              <p>
                In addition to exploring the volcano itself, there are many
                other attractions and experiences to enjoy in the surrounding
                area. You can visit the Cagsawa Ruins, which are the remains of
                a church destroyed by a volcanic eruption in the 18th century.
                The ruins provide a glimpse into the region's history and offer
                a unique backdrop for photography.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    For nature lovers, the nearby Mayon National Park is a
                    must-visit destination. It is home to diverse flora and
                    fauna, including rare bird species. You can take a leisurely
                    walk along the park's trails and immerse yourself in the
                    natural beauty of the area.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/mayon/5.jpg"
                    className="img-fluid"
                    alt="Mayon National Park"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Visit to Mayon Volcano</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/mayon/1.jpg"
                alt="Mayon Gallery 1"
              />
            </Col>
            <Col md={6}>
              <p>
                To fully experience Mayon Volcano, it's important to plan your
                visit in advance. There are various tour operators and local
                guides available who can assist you in exploring the volcano and
                its surroundings. Make sure to check the weather conditions and
                dress appropriately for outdoor activities. Don't forget to
                capture the awe-inspiring moments through photography.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Witness the Majesty of Mayon Volcano</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/mayon/2.png"
                alt="Mayon Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/mayon/3.jpg"
                alt="Mayon Gallery 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/mayon/4.jpg"
                alt="Mayon Gallery 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Mayon;
