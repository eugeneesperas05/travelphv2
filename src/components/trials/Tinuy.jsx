import React from "react";
import { Card, CardGroup, Row, Col, Carousel } from "react-bootstrap";
import "./City.css";

function Tinuy() {
  return (
    <>
      <div className="CityMainContainer">
        <h1 className="title">Tinu-an Falls</h1>
        <div className="container-md">
          <Row>
            <Col>
              <Card.Img
                className="CityImg img-fluid"
                src="/images/tinuan.jpg"
                alt="Tinu-an Falls Image"
              />
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md">
          <h2 className="subtitle">
            Experience the Tranquil Beauty of Tinu-an Falls
          </h2>
          <Row>
            <Col md={6}>
              <p className="descriptions">
                Tinu-an Falls is a hidden gem located in the province of
                Negros Occidental, Philippines. Nestled amidst lush greenery and
                towering trees, Tinu-an Falls offers a serene and picturesque
                escape from the bustling city life.
              </p>

              <p className="descriptions">
                <span className="desctitle">Natural Beauty:</span> The
                cascading waters of Tinu-an Falls create a mesmerizing sight,
                with its crystal-clear pool reflecting the surrounding
                landscape. The peaceful ambiance and pristine surroundings make
                it an ideal spot for nature lovers and outdoor enthusiasts.
              </p>

              <p className="descriptions">
                <span className="desctitle">Refreshing Dip:</span> Visitors
                can take a refreshing dip in the cool waters of Tinu-an Falls.
                The natural pool at the base of the falls provides a tranquil
                setting to relax, swim, and enjoy the soothing sound of
                cascading water. It's a perfect place to unwind and rejuvenate
                amidst nature.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <img
                src="/images/tinuan-pool.jpg"
                className="img-fluid"
                alt="Tinu-an Falls Pool"
              />
            </Col>
          </Row>
          <p></p>
        </div>
        <h1 className="title">Immerse Yourself in Tinu-an's Natural Splendor</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                src="/images/tinuan-trail.jpg"
                className="img-fluid"
                alt="Tinu-an Falls Trail"
              />
            </Col>
            <Col md={6}>
              <p>
                Exploring Tinu-an Falls offers more than just a scenic view. You
                can embark on a trek along the forest trail, immersing yourself
                in the lush surroundings and discovering the diverse flora and
                fauna of the area. The trek to the falls is an adventure in
                itself, providing an opportunity to connect with nature and
                enjoy the tranquility of the forest.
              </p>
              <Row>
                <Col md={6}>
                  <p>
                    As you make your way to the falls, you'll encounter
                    picturesque viewpoints and small streams along the trail.
                    Take your time to appreciate the natural beauty and capture
                    memorable moments. It's recommended to wear comfortable
                    footwear and bring drinking water for the trek.
                  </p>
                </Col>
                <Col md={6}>
                  <img
                    src="/images/tinuan-view.jpg"
className="img-fluid"
alt="Tinu-an Falls View"
/>
</Col>
</Row>
</Col>
</Row>
</div>
<div className="container-md">
<h1 className="title">Plan Your Visit to Tinu-an Falls</h1>
<Row className="d-flex justify-content-center align-item-center m-auto">
<Col md={6}>
<img
             className="img-fluid"
             src="/images/tinuan-bridge.jpg"
             alt="Tinu-an Falls Bridge"
           />
</Col>
<Col md={6}>
<p>
To make the most of your trip to Tinu-an Falls, it's recommended
to plan ahead. Here are some tips to help you prepare:
</p>
<ul>
<li>Check the weather forecast and choose a suitable time to visit.</li>
<li>Wear comfortable clothing and footwear for the trek.</li>
<li>Bring insect repellent to protect yourself from mosquitoes and other insects.</li>
<li>Carry drinking water and snacks for the journey.</li>
<li>Respect the natural environment and follow any guidelines or regulations in place.</li>
</ul>
<p>
By planning ahead, you can ensure a smooth and enjoyable experience at Tinu-an Falls.
</p>
</Col>
</Row>
</div>
<div className="container-md">
<h1 className="title">Discover the Serenity of Tinu-an Falls</h1>
<Carousel>
<Carousel.Item>
<img
             className="d-block w-100 img-fluid"
             src="/images/tinuan-gallery-1.jpg"
             alt="Tinu-an Falls Gallery 1"
           />
</Carousel.Item>
<Carousel.Item>
<img
             className="d-block w-100 img-fluid"
             src="/images/tinuan-gallery-2.jpg"
             alt="Tinu-an Falls Gallery 2"
           />
</Carousel.Item>
<Carousel.Item>
<img
             className="d-block w-100 img-fluid"
             src="/images/tinuan-gallery-3.jpg"
             alt="Tinu-an Falls Gallery 3"
           />
</Carousel.Item>
</Carousel>
</div>
<p></p>
</div>
</>
);
}

export default Tinuy;
