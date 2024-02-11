import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Contact.css";
import GoogleMapReact from "google-map-react";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("Your responses are sent. Thank you!");

    // Clearing input field values
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      <div className="contactcontainer">
        <h1>Contact Us</h1>
        <div className="container-md contactusform">
          <h2>Please fill up the form if you have concerns or inquiries.</h2>
          <p></p>
          <Row>
            <Col md={6} className="details">
              <p>
                <span className="label">Address:</span> Juander building 2nd
                floor room 69, Juan Delacruz street, Manila, Philippines
              </p>
              <p>
                <span className="label">Email Address:</span> travelph@gmail.com
              </p>
              <p>
                <span className="label">Telephone Number:</span> 0347898783
              </p>
              <p>
                <span className="label">Business Days:</span> Monday-Friday
                9:00AM-6:00PM
              </p>
            </Col>
            <Col md={6}>
              <div className="container-md forms">
                <input
                  type="text"
                  name="fname"
                  placeholder="Full Name (Optional)"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <input
                  type="text"
                  name="fname"
                  placeholder="Email (Optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="text"
                  name="fname"
                  placeholder="Phone (Optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <p></p>
                <input
                  type="text"
                  className="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <p></p>
              <div className="container-md">
                <Button className="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <p></p>
        <div className="container-md map">
          <GoogleMaps />
        </div>
      </div>
      <p></p>
    </>
  );
}

function GoogleMaps(props) {
  const defaultCenter = {
    lat: 14.5995,
    lng: 120.9842,
  };

  const defaultZoom = 10;

  const [userLocation, setUserLocation] = useState(null);

  const markers = [
    {
      lat: 14.5995,
      lng: 120.9842,
      color: "red",
      label: "TravelPH",
    },
  ];

  if (userLocation) {
    markers.push({
      lat: userLocation.lat,
      lng: userLocation.lng,
      color: "blue",
      label: "You are here",
    });
  }

  return (
    <div
      style={{ height: "400px", width: "100%", position: "relative" }}
      className="mapcont"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD2R3LDm5jmU1SCGT7e8U1-rGjba0QjlRc" }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            color={marker.color}
            label={marker.label}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

function Marker({ color, label }) {
  return (
    <div
      style={{
        color: "white",
        background: color,
        padding: "5px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20%",
        transform: "translate(-50%, -50%)",
        width: "50px",
        height: "30px",
        border: "2px solid white",
      }}
    >
      {label}
    </div>
  );
}

export default Contact;
