import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Siargao() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Siargao Island</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/siargao.jpg"
                alt="Siargao Island Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">
            Discover the Surfing Capital of the Philippines
          </h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Siargao Island is known as the surfing capital of the
                Philippines, attracting surfers from all around the world. With
                its world-class surf breaks, pristine beaches, and vibrant
                island atmosphere, Siargao offers a unique blend of adventure
                and relaxation.
              </p>
              <p className="descriptions">
                <span className="desctitle">Surfing Paradise:</span> The
                island's most famous surf break is Cloud 9, a powerful and
                hollow wave that draws experienced surfers seeking
                adrenaline-pumping rides. However, Siargao caters to all levels
                of surfing expertise, with various surf spots suitable for
                beginners and intermediate surfers. Surf lessons and board
                rentals are readily available.
              </p>

              <p className="descriptions">
                <span className="desctitle">Beyond Surfing:</span> While surfing
                is a major highlight of Siargao, the island has much more to
                offer. Explore the stunning rock pools of Magpupungko, where you
                can swim, snorkel, and witness the natural beauty of the tidal
                pools. Visit the enchanting Sugba Lagoon, go island hopping to
                nearby islets, or simply relax on the white sandy beaches and
                enjoy the laid-back island vibes.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/siargao-surfing.jpg"
                className="img-fluid"
                alt="Siargao Surfing"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Embrace the Siargao Lifestyle</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/siargao-island-hopping.jpg"
                className="img-fluid"
                alt="Siargao Island Hopping"
              />
            </Col>
            <Col md={6}>
              <p>
                Siargao offers a range of activities beyond surfing. Explore the
                island's lush mangrove forests on a paddleboarding or kayaking
                tour. Take a refreshing dip in the Magpupungko rock pools and
                marvel at their unique formations. Embark on an island hopping
                adventure to pristine beaches like Naked Island and Guyam
                Island, where you can snorkel, swim, and soak up the sun.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    Immerse yourself in the local culture by visiting the
                    charming towns of General Luna and Cloud 9. Experience the
                    island's vibrant nightlife, indulge in delicious seafood at
                    local eateries, and mingle with fellow travelers and
                    friendly locals. Don't miss the opportunity to catch a
                    stunning sunset at Cloud 9, a magical moment that captures
                    the essence of Siargao.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/siargao-sunset.jpg"
                    className="img-fluid"
                    alt="Siargao Sunset"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Plan Your Siargao Adventure</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/images/siargao-food.jpg"
                alt="Siargao Food"
              />
            </Col>
            <Col md={6}>
              <p>
                To make the most of your trip to Siargao, plan your itinerary in
                advance. General Luna is the main tourist hub, where you'll find
                accommodations, restaurants, and surf shops. There are a variety
                of accommodations available, ranging from budget-friendly
                hostels to luxury resorts. Indulge in local cuisine and try the
                famous seafood dishes, such as grilled squid and fresh fish.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience the Magic of Siargao</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/siargao-gallery-1.jpg"
                alt="Siargao Gallery 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/siargao-gallery-2.jpg"
                alt="Siargao Gallery 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/images/siargao-gallery-3.jpg"
                alt="Siargao Gallery 3"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Siargao;
