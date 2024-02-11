import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Bantayan() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Bantayan Island</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/visayas/bantayan.png"
                alt="Bantayan Island Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">Why Bantayan Island</h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                <span className="desctitle">Idyllic Beaches:</span> Bantayan
                Island boasts some of the most pristine and idyllic beaches in
                the Philippines. With powdery white sands, crystal-clear
                turquoise waters, and swaying palm trees, it's a tropical
                paradise for beach lovers and sun-seekers. Relax on the shores,
                indulge in water sports, or simply soak up the beauty of the
                coastal scenery.
              </p>

              <p className="descriptions">
                <span className="desctitle">Island Hopping:</span> Explore the
                surrounding islands and islets through island hopping tours.
                Visit Virgin Island, Hilantagaan Island, and other nearby gems.
                Marvel at their untouched beauty, go snorkeling or diving to
                discover vibrant coral reefs, and enjoy the serenity of these
                secluded tropical hideaways.
              </p>

              <p className="descriptions">
                <span className="desctitle">Rich Marine Life:</span> Bantayan
                Island is a haven for marine biodiversity. Snorkel or dive in
                its waters to encounter a diverse array of marine life,
                including colorful coral gardens, tropical fish, sea turtles,
                and even whale sharks during certain seasons. It's a paradise
                for underwater enthusiasts and nature lovers.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/visayas/bantayan.png"
                className="img-fluid"
                alt="Bantayan Island Beach"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Local Delights and Culture</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/visayas/bantayan.png"
                className="img-fluid"
                alt="Bantayan Island Cuisine"
              />
            </Col>
            <Col md={6}>
              <p>
                Bantayan Island not only offers natural beauty but also
                tantalizes taste buds with its local delights. Indulge in fresh
                seafood delicacies, especially the famous Bantayan "sutukil"
                (grilled, boiled, and raw seafood) experience. The island's
                cuisine reflects its coastal charm, with flavors that will leave
                you craving for more. Immerse yourself in the local culture by
                joining traditional festivities, witnessing cultural dances, and
                interacting with the friendly locals.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    The warm hospitality and welcoming nature of the Bantayan
                    locals add to the overall charm of the island. Experience
                    their genuine warmth and friendliness as they share their
                    island's treasures and stories with you. Engage in
                    conversations, learn about their traditions, and create
                    unforgettable memories with the locals.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/visayas/bantayan.png"
                    className="img-fluid"
                    alt="Bantayan Island Culture"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Stunning Coastal Views</h1>
          <Row className="d-flex justify-content-center align-item-center m-auto">
            <Col md={6}>
              <img
                className="img-fluid"
                src="/visayas/bantayan.png"
                alt="Bantayan Island Carousel 1"
              />
            </Col>
            <Col md={6}>
              <p>
                Bantayan Island offers breathtaking coastal views that will
                leave you in awe. Marvel at the vibrant sunsets painting the sky
                with hues of orange and pink. Take a stroll along the beach,
                feel the gentle breeze, and listen to the soothing sound of the
                waves. The captivating beauty of the coastline will make your
                visit to Bantayan Island truly memorable.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h1 className="title">Experience Paradise</h1>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/bantayan.png"
                alt="Bantayan Island Carousel 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/bantayan.png"
                alt="Bantayan Island Carousel 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src="/visayas/bantayan.png"
                alt="Bantayan Island Carousel 4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default Bantayan;
