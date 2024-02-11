import React from "react";

const Nature = () => {
  const natureDestinations = [
    {
      name: "Palawan",
      image: "/images/m1.jpg",
      description:
        "Palawan is known for its stunning natural landscapes, including the UNESCO World Heritage-listed Underground River and the picturesque El Nido.",
    },
    {
      name: "Chocolate Hills",
      image: "/images/b2.jpg",
      description:
        "The Chocolate Hills in Bohol are a unique geological formation of over 1,000 cone-shaped hills that turn brown during the dry season, resembling chocolate drops.",
    },
    {
      name: "Mayon Volcano",
      image: "/images/l5.jpg",
      description:
        "Mayon Volcano in Albay is renowned for its perfect cone shape and is considered one of the most beautiful volcanoes in the world.",
    },
    {
      name: "Banaue Rice Terraces",
      image: "/images/l1.jpg",
      description:
        "The Banaue Rice Terraces in Ifugao are an engineering marvel carved into the mountains by the indigenous people over 2,000 years ago.",
    },
    {
      name: "Tubbataha Reefs Natural Park",
      image: "/images/1.jpg",
      description:
        "Tubbataha Reefs Natural Park is a UNESCO World Heritage Site and a premier diving destination, home to diverse marine life and vibrant coral reefs.",
    },
    {
      name: "Mount Pulag",
      image: "/images/l2.jpg",
      description:
        "Mount Pulag in Benguet is the third-highest mountain in the Philippines, offering stunning sunrise views and a unique sea of clouds experience.",
    },
    {
      name: "Hundred Islands",
      image: "/images/m9.jpg",
      description:
        "The Hundred Islands National Park in Pangasinan features picturesque limestone islands scattered across the turquoise waters of Lingayen Gulf.",
    },
    {
      name: "Hinatuan Enchanted River",
      image: "/images/kawasan.jpg",
      description:
        "The Hinatuan Enchanted River in Surigao del Sur is a stunning blue river that captivates visitors with its crystal-clear waters and mystical beauty.",
    },
    {
      name: "Sagada",
      image: "/images/b8.jpg",
      description:
        "Sagada is a mountain town famous for its scenic landscapes, limestone caves, hanging coffins, and beautiful hiking trails.",
    },
    {
      name: "Biri Island Rock Formations",
      image: "/images/l4.jpg",
      description:
        "Biri Island in Northern Samar is known for its unique rock formations sculpted by the crashing waves of the Pacific Ocean.",
    },
  ];

  return (
    <div className="container">
      <h1>Philippines Best Nature Destinations</h1>
      <div className="row">
        {natureDestinations.map((destination, index) => (
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

export default Nature;
