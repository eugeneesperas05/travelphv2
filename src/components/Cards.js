import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <>
      <div className="title-h1">
        <h1>Choose Your Travel Destination!</h1>
      </div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <h1>Choose Luzon</h1>
            <ul className="cards__items">
              <CardItem
                src="/images/l1.jpg"
                text="Banaue Rice Terraces"
                path="/Banaue"
              />
              <CardItem src="/images/l10.jpg" text="Sagada" path="/Sagada" />
              <CardItem src="/images/l2.jpg" text="Mount Pulag" path="/Pulag" />
              <CardItem
                src="/images/l3.jpg"
                text="Baguio City"
                path="/Baguio"
              />
            </ul>

            <ul className="cards__items">
              <CardItem src="/images/l9.jpg" text="Batanes" path="/Batanes" />
              <CardItem src="/images/l4.jpg" text="Vigan City" path="/Vigan" />
            </ul>

            <ul className="cards__items">
              <CardItem src="/images/l8.jpg" text="Pagudpud" path="/Pagudpud" />
              <CardItem
                src="/images/l5.jpg"
                text="Mayon Volcano"
                path="/Mayon"
              />
              <CardItem
                src="/images/l6.jpg"
                text="Anawangin Cove"
                path="/Anawangin"
              />
              <CardItem
                src="/images/l7.jpg"
                text="Coron Island"
                path="/Coron"
              />
            </ul>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <h1>Choose Visayas</h1>
            <ul className="cards__items">
              <CardItem
                src="/images/b1.jpg"
                text="Boracay Island"
                path="/Boracay"
              />

              <CardItem
                src="/images/b2.jpg"
                text="Chocolate Hills"
                path="/Chocolate"
              />

              <CardItem
                src="/images/b3.jpg"
                text="Sumilon Island"
                path="/Sumilon"
              />

              <CardItem
                src="/images/b4.jpg"
                text="Kalanggaman Island"
                path="/Kalanggaman"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/b5.jpg"
                text="Osmeña Peak"
                path="/Osmena"
              />

              <CardItem
                src="/images/b6.JPG"
                text="Sohoton Cave"
                path="/Sohoton"
              />

              <CardItem
                src="/images/b7.jpg"
                text="Canigao Island"
                path="/Canigao"
              />

              <CardItem
                src="/images/b8.jpg"
                text="Bantayan Island"
                path="/Bantayan"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/kawasan.jpg"
                text="Kawasan Falls"
                path="/Kawasan"
              />

              <CardItem
                src="/images/b10.jpg"
                text="Apo Island"
                path="/ApoIsland"
              />
            </ul>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <h1>Choose Mindanao</h1>
            <ul className="cards__items">
              <CardItem
                src="/images/m1.jpg"
                text="Siargao Island"
                path="/Siargao"
              />

              <CardItem
                src="/images/m2.jpg"
                text="Camiguin Island"
                path="/Camiguin"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/m3.jpg"
                text="Enchanted River"
                path="/Enchanted"
              />

              <CardItem
                src="/images/m4.jpg"
                text="Tinuy-an Falls"
                path="/Tinuy"
              />

              <CardItem
                src="/images/m5.jpg"
                text="Mount Apo"
                path="/MountApo"
              />

              <CardItem
                src="/images/m6.jpg"
                text="Samal Island"
                path="/Samal"
              />
            </ul>

            <ul className="cards__items">
              <CardItem
                src="/images/m7.jpg"
                text="Dahican Beach"
                path="/Dahican"
              />

              <CardItem
                src="/images/m8.jpg"
                text="Asik-Asik Falls"
                path="/Asik"
              />

              <CardItem
                src="/images/m9.jpg"
                text="Britania Islands"
                path="/Britania"
              />

              <CardItem src="/images/m10.jpg" text="Lake Sebu" path="/Lake" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
