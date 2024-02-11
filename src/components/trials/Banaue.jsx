import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Banaue() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Banaue Rice Terraces</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/banaue/banaue.png"
                alt="Banaue Rice Terraces Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Banaue Rice Terraces</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">World Heritage Site:</span> The
                Banaue Rice Terraces are a UNESCO World Heritage Site and
                considered one of the most breathtaking man-made wonders in the
                world. These terraces were carved into the mountainside by
                ancient Ifugao tribes using hand tools and have been a part of
                the Philippine cultural heritage for over 2,000 years.
              </p>

              <p className="descriptions">
                <span className="desctitle">Cultural significance:</span> The
                Banaue Rice Terraces are not only a stunning landscape but also
                hold immense cultural significance. They are a testament to the
                indigenous engineering skills and sustainable farming practices
                of the Ifugao people. The terraces reflect the harmony between
                human ingenuity and nature, making them a symbol of cultural
                identity and heritage.
              </p>

              <p className="descriptions">
                <span className="desctitle">Scenic beauty:</span> The terraces
                form a cascading masterpiece of agricultural engineering,
                resembling giant steps leading up to the heavens. The lush
                greenery, panoramic views, and terraced fields create a
                mesmerizing and picturesque setting that attracts visitors from
                around the globe. It's a paradise for nature lovers,
                photographers, and adventure enthusiasts.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/banaue/1.png"
                className="img-fluid"
                alt="Banaue Rice Terraces Landscape"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">A Journey Through Time</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/banaue/4.png"
                className="img-fluid"
                alt="Banaue Rice Terraces Culture"
              />
            </Col>
            <Col md={6}>
              <p>
                Exploring the Banaue Rice Terraces is like taking a journey
                through time. It provides a glimpse into the rich cultural
                heritage of the Ifugao people. You can witness their traditional
                farming methods, learn about their rituals and traditions, and
                interact with the local communities that have preserved their
                ancestral way of life amidst the changing times.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    The terraces are not only a marvel of engineering and
                    agricultural ingenuity but also serve as a living cultural
                    landscape. Visitors can immerse themselves in the local
                    traditions, taste traditional cuisine, and participate in
                    festivals and rituals that celebrate the Ifugao culture. The
                    warm hospitality of the Ifugao people adds to the charm of
                    the experience, creating lasting memories and connections.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/banaue/2.png"
                    className="img-fluid"
                    alt="Banaue Rice Terraces Festival"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Marvel at Nature's Splendor</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/banaue/3.png"
                alt="Banaue Rice Terraces Waterfall"
              />
            </Col>
            <Col md={6}>
              <p>
                Banaue is not only about the rice terraces but also offers
                breathtaking natural wonders. Explore the lush mountains,
                discover hidden waterfalls, and trek through scenic trails that
                unveil the beauty of the surrounding landscapes. The region's
                biodiversity and stunning vistas make it an ideal destination
                for eco-tourism and outdoor adventures.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Captivating Views</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/banaue/4.png"
                alt="Banaue Rice Terraces Carousel 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/banaue/1.png"
                alt="Banaue Rice Terraces Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/banaue/2.png"
                alt="Banaue Rice Terraces Carousel 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Banaue;
