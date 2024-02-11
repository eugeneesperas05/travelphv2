import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Baguio() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Bagiuo</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/baguio/1.jpg"
                alt="Image 1"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Baguio</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">Cool climate:</span> Baguio is known
                as the "Summer Capital of the Philippines" due to its mild and
                refreshing climate. It offers a pleasant escape from the heat
                and humidity of other parts of the country, making it an ideal
                destination for those seeking a cooler environment.
              </p>

              <p className="descriptions">
                <span className="desctitle">
                  Cultural and historical sites:
                </span>{" "}
                Baguio has a rich history and cultural heritage. You can visit
                the Baguio Cathedral, a prominent religious landmark, as well as
                the Philippine Military Academy, which is the premier military
                training institution in the country. The Tam-Awan Village and
                BenCab Museum are also worth exploring to learn more about the
                local art and culture.
              </p>

              <p className="descriptions">
                <span className="desctitle">Festivals and events:</span> Baguio
                hosts several festivals and events throughout the year,
                including the Panagbenga Festival (Flower Festival) held in
                February. The festival showcases colorful floats adorned with
                flowers, street dancing, and other cultural activities,
                attracting a large number of visitors.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/baguio/2.jpg"
                className="img-fluid"
                alt="Image 2"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Food and Culture</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/baguio/3.jpg"
                className="img-fluid"
                alt="Image 3"
              />
            </Col>
            <Col md={6}>
              <p>
                Baguio City, nestled in the Philippine mountains, is a culinary
                haven. Its cool climate yields an abundance of fresh
                strawberries, vibrant vegetables, and renowned Baguio longganisa
                sausage. Street food delights like crispy ukoy shrimp fritters
                tempt passersby. Good Shepherd's jams and preserves captivate
                with flavors of strawberry and ube. Amidst the city's cafe
                culture, steaming cups of locally sourced coffee are savored
                alongside delicate lengua de gato cookies. Baguio's food
                festivals showcase diverse flavors, leaving a lasting impression
                on all who indulge.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Baguio City's culture is a tapestry of indigenous heritage,
                    artistic expression, and a love for nature. The city's
                    people celebrate their cultural roots through festivals,
                    traditional dances, and music. Baguio's vibrant art scene is
                    showcased in galleries and creative spaces.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/baguio/4.jpg"
                    className="img-fluid"
                    alt="Image 4"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">People of Baguio</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/baguio/5.jpg"
                alt="Carousel Image 1"
              />
            </Col>
            <Col md={6}>
              <p>
                In the mountainous city of Baguio, a community thrives with a
                unique blend of tradition and artistic expression. The
                Baguioños, deeply connected to their indigenous roots, honor
                their heritage through colorful festivals, dances, and music. As
                the crisp mountain air weaves through their daily lives, the
                people of Baguio embrace a love for nature and a strong sense of
                community. Gathering in art galleries and creative spaces, they
                showcase their creativity, capturing the beauty of their
                surroundings on canvas and through various artistic mediums.
                With warm smiles and welcoming hearts, the people of Baguio
                embody the spirit of their city, celebrating their rich culture
                and embracing the vibrant tapestry of their collective identity.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Enjoy the cold breeze of air in Baguio</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/baguio/1.jpg"
                alt="Carousel Image 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/baguio/2.jpg"
                alt="Carousel Image 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/baguio/3.jpg"
                alt="Carousel Image 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Baguio;
