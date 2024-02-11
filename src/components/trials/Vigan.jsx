import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Vigan() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Vigan City</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/cities/vigan/1.jpg"
                alt="Vigan City Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">
            Experience the Charming Heritage of Vigan City
          </h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Vigan City is a UNESCO World Heritage Site located in the
                province of Ilocos Sur, Philippines. Known for its
                well-preserved Spanish colonial architecture, Vigan offers a
                unique glimpse into the country's rich history and cultural
                heritage.
              </p>

              <p className="descriptions">
                <span className="desctitle">Architectural Marvel:</span> The
                streets of Vigan are lined with beautiful ancestral houses,
                cobblestone paths, and Spanish-era buildings. Walking through
                the city feels like stepping back in time, with each structure
                telling a story of the past. The iconic Calle Crisologo is a
                must-visit, featuring stunning architecture and quaint shops
                selling local crafts and delicacies.
              </p>

              <p className="descriptions">
                <span className="desctitle">Cultural Immersion:</span> Immerse
                yourself in the vibrant culture of Vigan by exploring its
                museums, churches, and historical landmarks. The Syquia Mansion
                Museum, St. Paul Metropolitan Cathedral, and Plaza Salcedo are
                among the notable attractions that showcase the city's rich
                heritage. Don't forget to try the famous Vigan longganisa
                (sausage) and empanada for a taste of local cuisine.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/cities/vigan/2.jpg"
                className="img-fluid"
                alt="Vigan City Streets"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Explore the Timeless Beauty of Vigan</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/cities/vigan/1.jpg"
                className="img-fluid"
                alt="Vigan City Plaza"
              />
            </Col>
            <Col md={6}>
              <p>
                Exploring Vigan allows you to delve deeper into its captivating
                charm. Take a leisurely walk around the historic plaza,
                surrounded by centuries-old structures and the towering St. Paul
                Metropolitan Cathedral. You can also go on a calesa (horse-drawn
                carriage) ride to tour the city and enjoy the nostalgic
                atmosphere.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    As you wander through the streets of Vigan, you'll encounter
                    traditional craft shops, art galleries, and local markets.
                    Don't miss the opportunity to shop for Vigan's famous
                    pottery, woven products, and antique items. Sample the
                    city's delicacies like bagnet (crispy pork belly) and
                    bibingka (rice cake) to complete your culinary journey and
                    immerse yourself in the flavors of Vigan.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/cities/vigan/4.jpg"
                    className="img-fluid"
                    alt="Vigan City Market"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Visit to Vigan</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/cities/vigan/5.jpg"
                alt="Vigan City Plaza at Night"
              />
            </Col>
            <Col md={6}>
              <p>
                To make the most of your trip to Vigan, it's recommended to plan
                ahead. Here are some tips to help you prepare:
              </p>
              <ul>
                <li>
                  Choose the best time to visit, considering the weather and any
                  local events or festivals.
                </li>
                <li>
                  Wear comfortable footwear as you'll be doing a lot of walking
                  on cobblestone streets.
                </li>
                <li>
                  Bring a hat, sunglasses, and sunscreen to protect yourself
                  from the sun.
                </li>
                <li>
                  Try the local delicacies and traditional dishes at the various
                  restaurants and eateries.
                </li>
                <li>
                  Engage with the locals and learn about their customs and
                  traditions.
                </li>
              </ul>
              <p>
                By planning ahead, you can ensure a memorable and enriching
                experience in Vigan.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Discover the Beauty of Vigan</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/vigan/3.jpg"
                alt="Vigan City Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/vigan/2.jpg"
                alt="Vigan City Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/cities/vigan/3.jpg"
                alt="Vigan City Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Vigan;

