import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Pulag() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Mount Pulag</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/pulag/4.jpg"
                alt="Mount Pulag Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">
            Conquer the Third Highest Peak in the Philippines
          </h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Mount Pulag is the third highest peak in the Philippines,
                standing at an elevation of 2,926 meters (9,600 feet). It is
                located in Luzon and offers a challenging yet rewarding climb
                for adventurers and nature enthusiasts. Scaling Mount Pulag
                allows you to witness breathtaking views, stunning landscapes,
                and the famous sea of clouds.
              </p>
              <p className="descriptions">
                <span className="desctitle">Climbing Routes:</span> There are
                several climbing routes to choose from when ascending Mount
                Pulag. The most popular routes include the Ambangeg Trail, Akiki
                Trail, and Tawangan Trail. Each route offers a unique
                experience, showcasing different vegetation zones and scenic
                viewpoints along the way.
              </p>

              <p className="descriptions">
                <span className="desctitle">Biodiversity:</span> Mount Pulag is
                known for its rich biodiversity and unique ecosystem. As you
                hike through the mountain, you'll encounter various plant and
                animal species, including the iconic dwarf bamboo and the
                endemic dwarf cloud rats. The mountain is also home to diverse
                bird species, making it a paradise for birdwatchers.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/pulag/2.jpg"
                className="img-fluid"
                alt="Mount Pulag Trail"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Prepare for an Epic Adventure</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/pulag/1.jpg"
                className="img-fluid"
                alt="Mount Pulag Camp"
              />
            </Col>
            <Col md={6}>
              <p>
                Climbing Mount Pulag requires proper preparation and physical
                fitness. The mountain is known for its cold temperatures,
                especially during the early hours of the morning. It's important
                to bring appropriate cold-weather clothing, including layers,
                gloves, and a hat. Camping is allowed on the mountain, allowing
                you to experience the stunning sunrise and sea of clouds.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    The trek to the summit of Mount Pulag can be challenging but
                    rewarding. As you ascend, you'll pass through mossy forests,
                    grasslands, and rocky terrains. Take breaks to appreciate
                    the panoramic views and capture the beauty of the
                    surrounding landscapes. At the summit, you'll be rewarded
                    with an awe-inspiring sight of the sunrise or sunset,
                    depending on your chosen climb itinerary.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/pulag/mount-pulag-summit.jpg"
                    className="img-fluid"
                    alt="Mount Pulag Summit"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Mount Pulag Adventure</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/pulag/5.jpg"
                alt="Mount Pulag Gallery 1"
              />
            </Col>
            <Col md={6}>
              <p>
                To embark on your Mount Pulag adventure, plan your trip
                accordingly. You'll need to secure a climbing permit from the
                appropriate authorities. It's advisable to join an organized
                climb or hire a local guide who is familiar with the routes and
                mountain conditions. Remember to practice Leave No Trace
                principles and respect the natural environment during your
                ascent.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience the Majesty of Mount Pulag</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/pulag/2.jpg"
                alt="Mount Pulag Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/pulag/3.jpg"
                alt="Mount Pulag Gallery 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/pulag/1.jpg"
                alt="Mount Pulag Gallery 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Pulag;
