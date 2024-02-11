import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Lake() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Lake Sebu</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/lake/3.jpg"
                alt="Lake Sebu"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Experience Nature's Delight in Lake Sebu</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Lake Sebu is a picturesque destination nestled in the mountains
                of South Cotabato, Philippines. It is known for its stunning
                natural landscapes, serene lake, and rich cultural heritage.
              </p>

              <p className="descriptions">
                <span className="desctitle">Scenic Beauty:</span> The highlight
                of Lake Sebu is its enchanting lake, surrounded by lush greenery
                and rolling hills. Visitors can take a boat tour to explore the
                lake, witness the captivating waterfalls, and admire the
                tranquil surroundings.
              </p>

              <p className="descriptions">
                <span className="desctitle">T'nalak Weaving:</span> Lake Sebu is
                also famous for its T'nalak weaving tradition. T'nalak is a
                traditional fabric made by the T'boli people using abaca fibers
                and natural dyes. Visitors can learn about the intricate weaving
                process and purchase unique handicrafts as souvenirs.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/lake/2.jpg"
                className="img-fluid"
                alt="Lake Sebu Weaving"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Immerse Yourself in Culture</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/lake/1.jpg"
                className="img-fluid"
                alt="Lake Sebu Tribe"
              />
            </Col>
            <Col md={6}>
              <p>
                Lake Sebu is home to the T'boli and Ubo tribes, known for their
                vibrant culture and traditional way of life. Visitors can engage
                in cultural immersion activities, such as traditional dances,
                music performances, and learning about their customs and
                traditions.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    <span className="desctitle">Hinabol:</span> One of the
                    traditional dances performed by the T'boli tribe is called
                    Hinabol. It is a rhythmic and graceful dance that showcases
                    the beauty and elegance of the T'boli culture. Visitors can
                    witness this mesmerizing dance and even participate in the
                    festivities.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/lake/4.jpg"
                    className="img-fluid"
                    alt="Lake Sebu Dance"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Visit to Lake Sebu</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/lake/5.jpg"
                alt="Lake Sebu Gallery 1"
              />
            </Col>
            <Col md={6}>
              <p>
                To visit Lake Sebu, you can fly to General Santos International
                Airport and then take a bus or van to the town of Lake Sebu.
                Accommodations are available in the area, ranging from budget
                guesthouses to resorts overlooking the lake. Don't forget to try
                the local cuisine, which features freshwater fish and other
                traditional dishes.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Discover the Beauty of Lake Sebu</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/lake/1.jpg"
                alt="Lake Sebu Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/lake/4.jpg"
                alt="Lake Sebu Gallery 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/lake/2.jpg"
                alt="Lake Sebu Gallery 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Lake;
