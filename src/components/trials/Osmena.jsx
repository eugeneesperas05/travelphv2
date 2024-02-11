import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Osmena() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Osmena Peak</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/osmena.png"
                alt="Osmena Peak Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Explore the Majestic Osmena Peak</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Osmena Peak is a breathtaking mountain located in the province
                of Cebu, Philippines. Known for its picturesque landscapes and
                panoramic views, it attracts hikers and nature enthusiasts from
                around the world. Rising to an elevation of 1,013 meters (3,324
                feet), it offers a rewarding adventure and an opportunity to
                immerse in the beauty of nature.
              </p>

              <p className="descriptions">
                <span className="desctitle">Hiking and Scenic Trails:</span>{" "}
                Osmena Peak is renowned for its unique jagged rock formations
                resembling a "Chocolate Hills" landscape. The hiking trails are
                relatively easy, making it accessible for both experienced
                hikers and beginners. As you ascend, you'll be greeted with
                stunning views of the surrounding countryside, neighboring
                islands, and the azure waters of the sea.
              </p>

              <p className="descriptions">
                <span className="desctitle">Sunrise and Sunset Viewing:</span>{" "}
                One of the highlights of Osmena Peak is the opportunity to
                witness breathtaking sunrises and sunsets. The peak's elevated
                position provides an unobstructed view of the horizon, painting
                the sky with vibrant colors as the sun rises or sets. It's an
                awe-inspiring sight and a photographer's paradise.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/osmena.png"
                className="img-fluid"
                alt="Osmena Peak Trail"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Prepare for an Adventurous Climb</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/osmena.png"
                className="img-fluid"
                alt="Osmena Peak View"
              />
            </Col>
            <Col md={6}>
              <p>
                Climbing Osmena Peak requires minimal preparation, making it an
                ideal destination for day trips and spontaneous adventures. Here
                are some tips to make the most of your experience:
              </p>
              <ul className="descriptions">
                <li>
                  Wear comfortable clothes and hiking shoes for the trail.
                </li>
                <li>
                  Bring enough water, snacks, and sunscreen to stay hydrated and
                  protected from the sun.
                </li>
                <li>
                  Consider starting early to catch the stunning sunrise at the
                  peak.
                </li>
                <li>
                  Don't forget to bring a camera to capture the mesmerizing
                  views.
                </li>
                <li>
                  Respect the environment and leave no trace of your visit.
                  Practice responsible
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Immerse in the Beauty of Osmena Peak</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/osmena.png"
                alt="Osmena Peak Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/osmena.png"
                alt="Osmena Peak Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/osmena.png"
                alt="Osmena Peak Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Osmena;
