import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Sagada() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Sagada</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/sagada/2.jpg"
                alt="Sagada Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Explore the Wonders of Sagada</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Sagada is a charming town nestled in the Cordillera Mountains of
                the Philippines. It is known for its stunning landscapes, rich
                culture, and adventurous activities. From exploring breathtaking
                caves to witnessing magnificent rice terraces, Sagada offers a
                unique and unforgettable experience for travelers.
              </p>
              <p className="descriptions">
                <span className="desctitle">Cave Connections:</span> One of the
                highlights of Sagada is its intricate network of caves. The most
                famous cave is the Sumaguing Cave, known for its fascinating
                rock formations and underground rivers. Adventurous travelers
                can try cave connection activities, where they navigate through
                multiple caves, rappel down waterfalls, and marvel at the
                natural wonders hidden beneath the surface.
              </p>

              <p className="descriptions">
                <span className="desctitle">
                  Echo Valley and Hanging Coffins:
                </span>{" "}
                A visit to Sagada wouldn't be complete without exploring Echo
                Valley and witnessing the Hanging Coffins. Echo Valley is a lush
                green valley where you can shout and hear your voice echo
                throughout the surroundings. Nearby, you'll find the Hanging
                Coffins, a unique burial tradition where coffins are suspended
                on the limestone cliffs.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/sagada/1.jpg"
                className="img-fluid"
                alt="Sagada Cave"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Immerse in the Sagada Culture</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/sagada/5.jpg"
                className="img-fluid"
                alt="Sagada Ritual"
              />
            </Col>
            <Col md={6}>
              <p>
                Sagada is also known for its rich cultural heritage. The town is
                inhabited by the Igorot people who have preserved their
                traditions and practices. Visitors can witness traditional
                rituals and ceremonies, such as the Etag Festival and the
                Bomod-ok Falls ritual. Engaging with the locals, learning about
                their customs, and trying local delicacies are all part of the
                immersive experience in Sagada.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    For nature enthusiasts, Sagada offers breathtaking hikes and
                    scenic viewpoints. You can trek to Bomod-ok Falls and enjoy
                    a refreshing dip in its crystal-clear waters. The Kiltepan
                    Viewpoint is another popular spot, offering panoramic views
                    of the sunrise or sea of clouds over the surrounding
                    mountains and rice terraces. Don't forget to bring your
                    camera to capture the stunning landscapes.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/sagada/3.jpg"
                    className="img-fluid"
                    alt="Sagada Viewpoint"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Trip to Sagada</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/sagada/2.jpg"
                alt="Sagada Gallery 1"
              />
            </Col>
            <Col md={6}>
              <p>
                To make the most of your trip to Sagada, it's recommended to
                plan ahead. The town can be reached by bus or private vehicle
                from nearby cities. There are various accommodations available,
                including guesthouses and homestays, offering a comfortable stay
                for visitors. Explore the local cuisine and try traditional
                dishes like pinikpikan and etag. Don't forget to interact with
                the friendly locals and learn about their way of life.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience the Beauty of Sagada</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/sagada/1.jpg"
                alt="Sagada Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/sagada/2.jpg"
                alt="Sagada Gallery 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/sagada/4.jpg"
                alt="Sagada Gallery 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Sagada;
