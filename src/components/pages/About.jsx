import React from "react";
import { Row, Col } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutcont">
        <h1 className="logos">TravelPH</h1>
        <hr />
        <div className="container-md">
          <h1>Who we are</h1>
          <p>
            As locals, we know the best places to see and experience in the
            Philippines, which we share through a definitive collection of
            Philippine travel guides. We help you learn more about the
            Philippines from where to go, what to experience, how to get around,
            where to stay, and how to plan an itinerary through in-depth
            articles so you can get the most memorable and meaningful Philippine
            travel experience. We are on our way to make traveling in the
            Philippines more accessible, convenient, and worry-free than ever
            before. Whether you are planning, booking, or in an actual trip in
            the Philippines, we look forward to being your guide to this
            incredible land we call home.
          </p>
        </div>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                className="img-fluid abtimg"
                src="./images/7.jpg"
                alt="Philippines"
              />
              <p>Mayon Volcano</p>
            </Col>
            <Col md={6}>
              <h2>From TravelPH</h2>
              <p>
                We are passionate about showcasing the wonders of the
                Philippines and promoting it as an exceptional tourist
                destination. Our mission goes beyond the breathtaking landscapes
                and pristine beaches; we are here to celebrate the vibrant
                cultural heritage and warm hospitality that the Philippines
                offers to its visitors. With over 7,000 islands waiting to be
                explored, our archipelago provides a diverse range of
                experiences. From bustling cities teeming with life to tranquil
                rural retreats that allow you to immerse yourself in the wonders
                of nature, the Philippines has it all. Whether you are
                fascinated by the historical sites of Manila, eager to dive into
                the vibrant marine ecosystems of Palawan, or ready to indulge in
                the mouthwatering flavors of Filipino cuisine, our country
                caters to every traveler's taste and interest. At our core, we
                strive to showcase the hidden gems of the Philippines while
                supporting local communities and preserving the natural wonders
                that make our nation truly remarkable. We invite you to join us
                on this journey and experience the Philippines, an unforgettable
                destination that captures the hearts of travelers from around
                the world.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h2>From the Developers</h2>
          <Row>
            <Col md={6}>
              <p>
                As developers, we are driven by our passion for technology and
                the desire to create exceptional experiences for travelers.
                Through innovative design and cutting-edge development, we have
                crafted this platform to help you discover the beauty and magic
                of the Philippines. Our team consists of talented individuals
                with diverse backgrounds and expertise, united by a shared love
                for our country. We have poured our hearts and souls into this
                project, meticulously curating content and ensuring a seamless
                user experience. We are committed to continuously improving and
                expanding our platform to provide you with the best possible
                resources for your Philippine adventure. We value your feedback
                and suggestions, so please don't hesitate to reach out to us.
                Thank you for choosing our platform, and we hope it becomes your
                go-to guide as you explore the wonders of the Philippines.
              </p>
            </Col>
            <Col md={6}>
              <img className="img-fluid abtimg" src="./images/rizal.webp" />
              <p>Rizal Park</p>
            </Col>
          </Row>
        </div>
        <hr />
        <h1>Our Credentials</h1>
        <div className="container-md">
          <Row>
            <img className="logoimg" src="/images/logo_1.png" />
          </Row>
          <p></p>
          <Row>
            <img src="/images/logo_3.png" className="logoimg" />
          </Row>
          <p></p>
          <Row>
            <img src="/images/logo_4.png" className="logoimg" />
          </Row>
          <p></p>
          <Row>
            <img src="/images/logo_5.png" className="logoimg" />
          </Row>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default About;
