import React from "react";
import "./MyCards.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardWithModal from "./CardWithModal";

function MyCards() {
  return (
    <>
      <div className="MyCards-cont">
        <Row xs={3} md={3} lg={6} className="g-1 py-2 row-cont">
          <Col>
            <Card className="cardName">
              <Card.Img variant="top" src="/images/c5.png" />
              <Card.Body>
                <Card.Title>
                  <Link className="cardLink" to="/Dive">
                    DIVE
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardName">
              <Card.Img variant="top" src="/images/c3.png" />
              <Card.Body>
                <Card.Title>
                  <Link className="cardLink" to="/Adventure">
                    ADVENTURE
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardName">
              <Card.Img variant="top" src="/images/c1.png" />
              <Card.Body>
                <Card.Title>
                  <Link className="cardLink" to="/Sun">
                    SUN & BEACH
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardName">
              <Card.Img variant="top" src="/images/c2.png" />
              <Card.Body>
                <Card.Title>
                  <Link className="cardLink" to="/Nature">
                    NATURE
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardName">
              <Card.Img variant="top" src="/images/c4.png" />
              <Card.Body>
                <Card.Title>
                  <Link className="cardLink" to="/Food">
                    FOOD
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardName">
              <Card.Img variant="top" src="/images/c6.png" />
              <Card.Body>
                <Card.Title>
                  <Link className="cardLink" to="/Culture">
                    CULTURE
                  </Link>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MyCards;
