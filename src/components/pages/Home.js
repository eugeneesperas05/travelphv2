import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import "./Home.css";
import PhTrivia from "../PhTrivia";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>

      <div className="maincontainer">
        <div className="container-md">
          <h1>Why Philippines?</h1>
        </div>
        <h1> </h1>
        <div className="container-md">
          <PhTrivia />
        </div>
        <h1> </h1>
        <div className="container-md">
          <h1>
            Check out some of the most visited places here at the Philippines!
          </h1>
          <h2 className="rr">Rizal Park</h2>
          <div className="row">
            <div className="col-md first">
              <img
                className="imgHome colimg1 img-fluid"
                src="/images/rizal.webp"
              />
            </div>
            <div className="col-md HomeTxt">
              <p>
                Exploring Rizal Park offers a glimpse into Philippine history, a
                chance to appreciate its natural beauty, and an opportunity to
                immerse yourself in the vibrant culture of the country. Enjoy
                your visit to Rizal Park and have a wonderful time exploring the
                Philippines!
              </p>
            </div>
          </div>
          <h1> </h1>
          <hr />
          <h2 className="rrrr">Philippine Arena</h2>
          <div className="row">
            <div className="col">
              <img
                className="imgHome colimg img-fluid"
                src="./images/pharena.jpeg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col Hometxt1">
              <h1> </h1>
              <p>
                Philippine Arena, a remarkable architectural and entertainment
                marvel in the Philippines The Philippine Arena stands as a
                testament to the country's passion for sports, entertainment,
                and cultural gatherings. Whether you attend a thrilling sports
                event or enjoy a world-class concert, the Philippine Arena
                offers a memorable experience in an awe-inspiring architectural
                setting. The Philippine Arena is a grand architectural
                masterpiece. Designed by Populous, a renowned architectural
                firm, its design draws inspiration from Filipino elements such
                as the sarimanok a mythical bird and the bahay kubo traditional
                Filipino house. The facade features intricate patterns and
                textures, creating a visually stunning exterior.
              </p>
            </div>
          </div>
          <h1> </h1>
          <hr />
          <h2 className="rrr">El Nido</h2>
          <div className="row">
            <div className="col-md second  HomeTxt">
              <p>
                El Nido is a destination that offers a perfect blend of natural
                beauty, adventure, and relaxation. Whether you're seeking
                outdoor adventures, underwater exploration, or simply a peaceful
                escape in paradise, El Nido will surely captivate your heart and
                leave you with unforgettable memories.
              </p>
            </div>
            <div className="col-md">
              <img
                className="imgHome colimg img-fluid"
                src="./images/elnido.jpg"
              />
            </div>
            <h1> </h1>
            <hr />
            <div className="row">
              <h3 className="d-flex justify-content-center">
                Go to{" "}
                <Link to="/Destination" className="mx-3">
                  Destination{" "}
                </Link>{" "}
                page to explore more exciting places!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
