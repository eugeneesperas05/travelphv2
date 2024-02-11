import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Samal() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Samal Island</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/samal.jpg"
                alt="Samal Island Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Escape to Paradise on Samal Island</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Samal Island is a tropical paradise located off the coast of
                Davao City in the Philippines. With its pristine beaches,
                crystal-clear waters, and lush landscapes, it offers a perfect
                getaway for beach lovers and nature enthusiasts.
              </p>
              <p className="descriptions">
                <span className="desctitle">Beach Bliss:</span> Samal Island is
                known for its stunning beaches with powdery white sand and
                vibrant coral reefs. Spend your days sunbathing, swimming, and
                snorkeling in the clear turquoise waters. Explore hidden coves
                and secluded bays, or simply relax under the shade of coconut
                trees and enjoy the serene surroundings.
              </p>

              <p className="descriptions">
                <span className="desctitle">Island Adventures:</span> Beyond the
                beaches, Samal Island offers a range of exciting activities. Go
                island hopping and visit nearby islets and rock formations.
                Explore the island's lush forests and discover hidden waterfalls
                and natural pools. Engage in water sports like kayaking,
                paddleboarding, and jet skiing. You can also try scuba diving
                and explore the rich marine life and coral gardens beneath the
                surface.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/samal-beach.jpg"
                className="img-fluid"
                alt="Samal Island Beach"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Unwind and Relax</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/samal-resort.jpg"
                className="img-fluid"
                alt="Samal Island Resort"
              />
            </Col>
            <Col md={6}>
              <p>
                Samal Island offers a range of accommodations, from luxury
                resorts to budget-friendly options. Choose a beachfront resort
                or a cozy cottage nestled in nature. Indulge in spa treatments,
                enjoy delicious local cuisine, and experience warm Filipino
                hospitality. Take leisurely walks along the shoreline, collect
                seashells, and watch breathtaking sunsets over the horizon.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    For nature lovers, Samal Island is home to diverse wildlife
                    and ecosystems. Explore the island's nature parks and
                    sanctuaries, where you can encounter rare bird species,
                    monkeys, and other fascinating creatures. Embark on guided
                    nature hikes and discover the island's rich biodiversity.
                    Don't forget to bring your camera to capture the stunning
                    landscapes and wildlife encounters.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/samal-nature.jpg"
                    className="img-fluid"
                    alt="Samal Island Nature"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Visit to Samal Island</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/images/samal-activities.jpg"
                alt="Samal Island Activities"
              />
            </Col>
            <Col md={6}>
              <p>
                To make the most of your visit to Samal Island, plan your trip
                ahead. You can reach the island by ferry or boat from Davao
                City. There are various resorts and accommodations to choose
                from, catering to different budgets and preferences. Don't
                forget to pack your beach essentials, sunscreen, and snorkeling
                gear. Explore the local markets and try delicious seafood
                dishes, as well as the famous durian fruit for a unique culinary
                experience.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Paradise on Samal Island</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/samal-gallery-1.jpg"
                alt="Samal Island Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/samal-gallery-2.jpg"
                alt="Samal Island Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/samal-gallery-3.jpg"
                alt="Samal Island Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Samal;
