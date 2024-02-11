import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Chocolate() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Chocolate Hills</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/chocolate.png"
                alt="Chocolate Hills Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Discover the Chocolate Hills</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                The Chocolate Hills is a natural wonder located in Bohol,
                Philippines. It is made up of more than 1,000 perfectly
                cone-shaped hills scattered across the landscape. During the dry
                season, the hills turn brown, resembling giant chocolate kisses,
                hence the name "Chocolate Hills."
              </p>

              <p className="descriptions">
                <span className="desctitle">Unique Geological Formation:</span>{" "}
                The Chocolate Hills are a unique geological formation that has
                puzzled scientists for years. These limestone hills were formed
                millions of years ago through the uplift of coral deposits and
                the action of erosion. The result is a breathtaking landscape
                that captivates visitors from around the world.
              </p>

              <p className="descriptions">
                <span className="desctitle">Panoramic Views:</span> The best way
                to experience the Chocolate Hills is by climbing one of the
                viewing decks or hills. From the top, you can enjoy panoramic
                views of the surrounding countryside and witness the mesmerizing
                sight of the rolling hills stretching as far as the eye can see.
                It's a sight that will leave you in awe of nature's beauty.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/chocolate.png"
                className="img-fluid"
                alt="Chocolate Hills Panorama"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Explore the Chocolate Hills</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/chocolate.png"
                className="img-fluid"
                alt="Chocolate Hills View"
              />
            </Col>
            <Col md={6}>
              <p>
                Aside from admiring the beauty of the Chocolate Hills, there are
                several activities you can enjoy in the area. Take a leisurely
                hike or rent an ATV to explore the hills up close. You can also
                visit nearby attractions such as the Tarsier Conservation Area,
                where you can spot the world's smallest primate, the Philippine
                tarsier.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    To learn more about the Chocolate Hills, visit the Chocolate
                    Hills Complex, which features an interactive museum
                    showcasing the geological and cultural significance of the
                    hills. You can also enjoy zip-lining, horseback riding, and
                    other adventure activities in the surrounding area.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/chocolate.png"
                    className="img-fluid"
                    alt="Chocolate Hills Museum"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience the Wonder</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/visayas/chocolate.png"
                alt="Chocolate Hills Carousel 1"
              />
            </Col>
            <Col md={6}>
              <p>
                To fully experience the wonder of the Chocolate Hills, consider
                visiting during sunrise or sunset when the hills are bathed in
                golden light. The changing colors create a magical atmosphere
                that enhances the beauty of this natural phenomenon. Don't
                forget to capture these moments and create lasting memories of
                your visit to the Chocolate Hills.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Marvel at Nature's Masterpiece</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/chocolate.png"
                alt="Chocolate Hills Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/chocolate.png"
                alt="Chocolate Hills Carousel 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/chocolate.png"
                alt="Chocolate Hills Carousel 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Chocolate;
