import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Pagudpud() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Pagudpud</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/pagudpud/1.jpg"
                alt="Pagudpud Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Discover Paradise in Pagudpud</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Pagudpud is a picturesque coastal town located in the province
                of Ilocos Norte, Philippines. Known for its stunning beaches and
                breathtaking landscapes, it offers a perfect getaway for beach
                lovers and nature enthusiasts.
              </p>
              <p className="descriptions">
                <span className="desctitle">White Sand Beaches:</span> Pagudpud
                is famous for its pristine white sand beaches. The most popular
                beach in the area is Saud Beach, known for its powdery sand and
                clear blue waters. Visitors can relax on the beach, take a dip
                in the refreshing ocean, or engage in water activities such as
                snorkeling and kayaking.
              </p>

              <p className="descriptions">
                <span className="desctitle">Scenic Landmarks:</span> Pagudpud is
                home to several scenic landmarks that showcase the natural
                beauty of the area. One of the must-visit spots is the iconic
                Bangui Windmills, a wind farm with enormous wind turbines lining
                the shoreline. The Kapurpurawan Rock Formation is another
                notable attraction, featuring unique rock formations carved by
                natural forces.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/pagudpud/2.jpg"
                className="img-fluid"
                alt="Pagudpud Beach"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Explore the Wonders of Pagudpud</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/pagudpud/3.jpg"
                className="img-fluid"
                alt="Pagudpud Waterfalls"
              />
            </Col>
            <Col md={6}>
              <p>
                Besides its beautiful beaches, Pagudpud also offers natural
                wonders to explore. The area is home to stunning waterfalls,
                such as the Kabigan Falls and the Patapat Viaduct. Visitors can
                take a refreshing dip in the cool waters of the waterfalls or
                enjoy scenic views from the elevated Patapat Viaduct.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Adventure seekers can embark on a trek to the secluded
                    Mabogabog Falls, nestled in the lush greenery of the forest.
                    The trek offers an opportunity to immerse in nature and
                    witness the beauty of untouched landscapes. Don't forget to
                    bring appropriate footwear and be prepared for a moderate
                    hike.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/pagudpud/5.jpg"
                    className="img-fluid"
                    alt="Pagudpud Mabogabog Falls"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Trip to Pagudpud</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/pagudpud/5.jpg"
                alt="Pagudpud Market"
              />
            </Col>
            <Col md={6}>
              <p>
                When planning your trip to Pagudpud, make sure to allocate
                enough time to explore the various attractions and enjoy the
                beauty of the beaches. The town offers a range of accommodation
                options, from beachfront resorts to guesthouses and homestays.
                Don't miss the chance to try local delicacies and fresh seafood
                at the local market or nearby eateries.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Paradise in Pagudpud</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/pagudpud/1.jpg"
                alt="Pagudpud Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/pagudpud/2.jpg"
                alt="Pagudpud Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/pagudpud/3.jpg"
                alt="Pagudpud Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Pagudpud;
