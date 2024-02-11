import React from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap";
import "./City.css";

function Enchanted() {
  return (
    <>
      <div className="h1-EventsContainer">
        <h1>Enchanted's Famous Destinations</h1>
      </div>
      <div className="EventsContainer">
        <div>
          <Row xs={1} md={1} lg={2} className="g-3">
            <Col>
              <CardGroup>
                <Card className="cards-events">
                  <Card.Img
                    classNmae="img-fluid"
                    variant="top"
                    src="/images/3.jpg"
                  />
                </Card>
              </CardGroup>
            </Col>
            <Col className="cards-events">
              <CardGroup className="group-events">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h1 className="title-events">Enchanted</h1>
                    </Card.Title>
                    <Card.Text className="text-events">
                      Palawan is a province located in the western part of the
                      Philippines. It is known for its stunning natural beauty,
                      pristine beaches, crystal-clear waters, and abundant
                      marine life. Here's some information about Palawan: El
                      Nido: El Nido is one of the most popular destinations in
                      Palawan. It features breathtaking limestone cliffs, hidden
                      lagoons, and numerous islands with beautiful beaches.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className="EventsContainer">
        <div>
          <Row xs={1} md={1} lg={2} className="g-3">
            <Col className="cards-events">
              <CardGroup className="group-events">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h1 className="title-events">Enchanted</h1>
                    </Card.Title>
                    <Card.Text className="text-events">
                      Palawan is a province located in the western part of the
                      Philippines. It is known for its stunning natural beauty,
                      pristine beaches, crystal-clear waters, and abundant
                      marine life. Here's some information about Palawan: El
                      Nido: El Nido is one of the most popular destinations in
                      Palawan. It features breathtaking limestone cliffs, hidden
                      lagoons, and numerous islands with beautiful beaches.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
            <Col>
              <CardGroup>
                <Card className="cards-events">
                  <Card.Img
                    classNmae="img-fluid"
                    variant="top"
                    src="/images/3.jpg"
                  />
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className="EventsContainer">
        <div>
          <Row xs={1} md={1} lg={2} className="g-3">
            <Col>
              <CardGroup>
                <Card className="cards-events">
                  <Card.Img
                    classNmae="img-fluid"
                    variant="top"
                    src="/images/3.jpg"
                  />
                </Card>
              </CardGroup>
            </Col>
            <Col className="cards-events">
              <CardGroup className="group-events">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h1 className="title-events">Enchanted</h1>
                    </Card.Title>
                    <Card.Text className="text-events">
                      Palawan is a province located in the western part of the
                      Philippines. It is known for its stunning natural beauty,
                      pristine beaches, crystal-clear waters, and abundant
                      marine life. Here's some information about Palawan: El
                      Nido: El Nido is one of the most popular destinations in
                      Palawan. It features breathtaking limestone cliffs, hidden
                      lagoons, and numerous islands with beautiful beaches.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className="EventsContainer">
        <div>
          <Row xs={1} md={1} lg={2} className="g-3">
            <Col className="cards-events">
              <CardGroup className="group-events">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h1 className="title-events">Enchanted</h1>
                    </Card.Title>
                    <Card.Text className="text-events">
                      Palawan is a province located in the western part of the
                      Philippines. It is known for its stunning natural beauty,
                      pristine beaches, crystal-clear waters, and abundant
                      marine life. Here's some information about Palawan: El
                      Nido: El Nido is one of the most popular destinations in
                      Palawan. It features breathtaking limestone cliffs, hidden
                      lagoons, and numerous islands with beautiful beaches.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
            <Col>
              <CardGroup>
                <Card className="cards-events">
                  <Card.Img
                    classNmae="img-fluid"
                    variant="top"
                    src="/images/3.jpg"
                  />
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Enchanted;
