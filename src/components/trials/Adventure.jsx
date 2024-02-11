import React from "react";

const Adventure = () => {
  const adventureDestinations = [
    {
      name: "Palawan",
      image: "/six/palawan.jpg",
      description:
        "Palawan is famous for its stunning landscapes, pristine beaches, and the underground river in Puerto Princesa.",
    },
    {
      name: "Siargao",
      image: "/six/siargao.jpg",
      description:
        "Siargao is known as the surfing capital of the Philippines, offering world-class waves and a laid-back island vibe.",
    },
    {
      name: "Sagada",
      image: "/six/sagada.jpg",
      description:
        "Sagada is a mountain town known for its breathtaking hikes, hanging coffins, and the stunning sunrise at Kiltepan Peak.",
    },
    {
      name: "Camarines Sur",
      image: "/six/camarines_sur.jpg",
      description:
        'Camarines Sur is home to the Caramoan Islands, a paradise for beach lovers and the filming location of "Survivor" TV series.',
    },
    {
      name: "Banaue",
      image: "/six/banaue.jpg",
      description:
        "Banaue is famous for its ancient rice terraces, a UNESCO World Heritage Site and an awe-inspiring feat of engineering.",
    },
    {
      name: "Batanes",
      image: "/six/batanes.jpg",
      description:
        "Batanes is a group of remote islands offering breathtaking landscapes, rolling hills, and picturesque lighthouses.",
    },
    {
      name: "Cebu",
      image: "/six/cebu1.jpg",
      description:
        "Cebu offers a wide range of adventure activities such as canyoneering in Kawasan Falls and swimming with whale sharks in Oslob.",
    },
    {
      name: "Davao",
      image: "/six/davao1.jpg",
      description:
        "Davao is the gateway to Mount Apo, the highest peak in the Philippines, offering challenging hikes and stunning vistas.",
    },
    {
      name: "Camiguin",
      image: "/six/camiguin.jpg",
      description:
        'Camiguin is known as the "Island Born of Fire" with its volcanoes, hot springs, waterfalls, and natural wonders.',
    },
    {
      name: "Anilao",
      image: "/six/anilao.jpg",
      description:
        "Anilao is a paradise for divers and snorkelers, with vibrant coral reefs and the opportunity to spot marine life like sea turtles.",
    },
  ];

  return (
    <div className="container">
      <h1>Philippines Best Adventure Destinations</h1>
      <div className="row">
        {adventureDestinations.map((destination, index) => (
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

export default Adventure;
