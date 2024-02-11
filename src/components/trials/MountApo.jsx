import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function MountApo() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Mount Apo</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/mount-apo.jpg"
                alt="Mount Apo Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">
            Conquer the Tallest Peak in the Philippines
          </h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Mount Apo is the highest mountain in the Philippines, standing
                at an elevation of 2,954 meters (9,692 feet). It is located in
                Mindanao and offers an incredible adventure for hikers and
                nature enthusiasts. Scaling Mount Apo is a rewarding experience,
                providing breathtaking views and a sense of accomplishment.
              </p>

              <p className="descriptions">
                <span className="desctitle">Hiking Trails:</span> There are
                several hiking trails to choose from when climbing Mount Apo.
                The popular trails include the Kidapawan Trail, the Kapatagan
                Trail, and the Sta. Cruz Trail. Each trail offers its own unique
                features and challenges, showcasing the diverse landscapes and
                flora along the way.
              </p>

              <p className="descriptions">
                <span className="desctitle">Flora and Fauna:</span> Mount Apo is
                home to a rich variety of plant and animal species. As you
                ascend the mountain, you'll encounter different forest zones,
                including mossy forests and the distinctive pygmy forest. Keep
                an eye out for endemic bird species, rare orchids, and other
                unique wildlife.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/mount-apo-trail.jpg"
                className="img-fluid"
                alt="Mount Apo Trail"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Prepare for an Unforgettable Journey</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/mount-apo-camp.jpg"
                className="img-fluid"
                alt="Mount Apo Camp"
              />
            </Col>
            <Col md={6}>
              <p>
                Climbing Mount Apo requires proper preparation and planning.
                It's essential to be physically fit and have previous hiking
                experience. Make sure to bring appropriate gear and clothing for
                the challenging terrain and changing weather conditions. It's
                recommended to join an organized climb with experienced guides
                for a safe and enjoyable journey.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    During the ascent, you'll pass through stunning landscapes,
                    such as the Lake Venado and the boulders of the summit. Take
                    breaks to admire the panoramic views and capture the beauty
                    of the surrounding nature. At the summit, you'll be rewarded
                    with an unforgettable sight of the sunrise or sunset,
                    depending on your chosen itinerary.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/mount-apo-summit.jpg"
                    className="img-fluid"
                    alt="Mount Apo Summit"
                  />
                </Col>
              </Row>
              <h2 className="subtitle">Safety Tips and Guidelines</h2>
              <ul className="descriptions">
                <li>
                  Always hike with a group and inform someone about your
                  itinerary.
                </li>
                <li>
                  Bring enough food, water, and essential supplies for the
                  duration of the climb.
                </li>
                <li>
                  Wear appropriate hiking shoes, clothing, and gear for comfort
                  and protection.
                </li>
                <li>
                  Follow Leave No Trace principles and maintain cleanliness on
                  the trail.
                </li>
                <li>
                  Respect the environment and wildlife by not disturbing their
                  natural habitats.
                </li>
                <li>
                  Be mindful of weather conditions and heed the advice of
                  experienced guides.
                </li>
              </ul>
              <p>
                With careful planning and a sense of adventure, conquering Mount
                Apo will be an unforgettable journey. Prepare yourself
                physically and mentally, immerse in the beauty of nature, and
                enjoy the remarkable experience of reaching the summit of the
                highest peak in the Philippines.
              </p>
            </Col>
          </Row>
        </div>
        <h1 className="title">Gallery</h1>
        <div className="container-md">
          <Carousel fade className="mb-4">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/mount-apo-gallery1.jpg"
                alt="Mount Apo Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/mount-apo-gallery2.jpg"
                alt="Mount Apo Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/mount-apo-gallery3.jpg"
                alt="Mount Apo Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MountApo;
