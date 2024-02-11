import React from "react";
import "./Destination.css";
import CardList from "../CardWithModal";
import Button from "../Button";
import MyCards from "../MyCards";
import Cards from "../Cards";
import MySearchBar from "../trials/MySearchBar";

function Destination() {
  return (
    <>
      {/* my searchbar */}

      <div className="destination-hero-container">
        <img className="hero-image" src="./images/7.jpg" alt="hero-image" />
        <h1 className="h1-1">Explore Philippines's</h1>
        <h1 className="h1-2">BREATH TAKING PLACES</h1>
      </div>
      <div className="container-md">
        <MySearchBar />
      </div>
      <div className="container-md cardsix">
        <MyCards />
      </div>
      <div className="container-md cards">
        <Cards />
      </div>
    </>
  );
}
export default Destination;
