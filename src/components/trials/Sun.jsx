import React from "react";

const Sun = () => {
  const sunBeachDestinations = [
    {
      name: "Boracay",
      image: "/six/boracay1.jpg",
      description:
        "Boracay is famous for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant nightlife. ",
    },
    {
      name: "El Nido",
      image: "/six/el_nido.jpg",
      description:
        "El Nido is a tropical paradise known for its limestone cliffs, hidden lagoons,unspoiled paradise with white sand beaches, turquoise waters, and towering limestone cliffs. unspoiled paradise with white sand beaches, turquoise waters. and breathtaking island hopping tours. and incredible underwater landscapes for diving and snorkeling.",
    },
    {
      name: "Panglao Island",
      image: "/images/b4.jpg",
      description:
        "Panglao Island offers beautiful beaches, world-class diving spots, and the opportunity to swim with majestic whale sharks. Island offers beautiful beaches, world-class diving spots, and the opportunity to swim with majestic whale sharks.Island offers beautiful beaches, world-class diving spots, and the opportunity to swim with majestic whale sharks.",
    },
    {
      name: "Coron",
      image: "/images/l7.jpg",
      description:
        "Coron is renowned for its stunning beaches, crystal-clear lakes, and incredible underwater landscapes for diving and snorkeling.",
    },
    {
      name: "Siargao",
      image: "/images/3.jpg",
      description:
        "Siargao is a surfer's paradise with world-class waves, pristine beaches, and a laid-back island atmosphere.",
    },
    {
      name: "Camiguin",
      image: "/images/elnido.jpg",
      description:
        'Camiguin is known as the "Island Born of Fire" with its volcanic beaches, hot springs, and picturesque waterfalls. is known as the "Island Born of Fire" with its volcanic beaches, hot springs, and picturesque waterfalls. is known as the "Island Born of Fire" with its volcanic beaches, hot springs, and picturesque waterfalls. is known as the "Island Born of Fire" with its volcanic beaches, hot springs, and picturesque waterfalls. is known as the "Island Born of Fire" with its volcanic beaches, hot springs, and picturesque waterfalls. is known as the "Island Born of Fire" with its volcanic beaches, hot springs, and picturesque waterfalls. is known as the "Island Born of Fire" with its volcanic beaches, hot springs,',
    },
    {
      name: "Caramoan",
      image: "/images/b8.jpg",
      description:
        "Caramoan is an unspoiled paradise with white sand beaches, turquoise waters, and towering limestone cliffs.",
    },
    {
      name: "Pagudpud",
      image: "/images/b3.jpg",
      description:
        "Pagudpud is the northernmost tip of Luzon, offering long stretches of white sand beaches, clear waters, and scenic landscapes. is the northernmost tip of Luzon, offering long stretches of white sand beaches,",
    },
    {
      name: "Siquijor",
      image: "/images/m9.jpg",
      description:
        "Siquijor is known for its enchanting beaches, mystical traditions, and beautiful waterfalls like Cambugahay Falls.",
    },
    {
      name: "Zambales",
      image: "/images/m2.jpg",
      description:
        "Zambales is a coastal province with stunning beaches, surf spots, and the picturesque coves of Anawangin and Nagsasa. with its volcanic beaches, hot springs, and picturesque waterfalls. is known as the  with its volcanic beaches with its volcanic beaches, hot springs, and picturesque waterfalls. is known as the with its volcanic beaches,is known as the with its volcanic beaches, is known as the with its volcanic beaches is known as the with its volcanic beaches,",
    },
  ];

  return (
    <div className="container">
      <h1>Philippines Best Sun and Beach Destinations</h1>
      <div className="row">
        {sunBeachDestinations.map((destination, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-4">
              <img
                src={destination.image}
                className="card-img-top"
                alt={destination.name}
              />
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text">{destination.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sun;
