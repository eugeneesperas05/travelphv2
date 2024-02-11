import React from "react";

const Food = () => {
  const foodDestinations = [
    {
      name: "Manila",
      image: "/six/manila.jpg",
      description:
        "Manila is a culinary melting pot with a diverse range of local and international cuisines to explore.",
    },
    {
      name: "Cebu",
      image: "/six/cebu.jpg",
      description:
        "Cebu is known for its lechon, a whole roasted pig that is succulent and flavorful.",
    },
    {
      name: "Bacolod",
      image: "/six/bacolod.jpg",
      description:
        "Bacolod is famous for its chicken inasal, a savory grilled chicken dish marinated in a mixture of spices.",
    },
    {
      name: "Pampanga",
      image: "/six/pampanga.jpg",
      description:
        "Pampanga is the culinary capital of the Philippines, offering a wide array of dishes like sisig and kare-kare.",
    },
    {
      name: "Iloilo",
      image: "/six/iloilo.jpg",
      description:
        "Iloilo is renowned for its La Paz Batchoy, a noodle soup dish with pork, liver, and crushed pork cracklings.",
    },
    {
      name: "Bicol",
      image: "/six/bicol.jpg",
      description:
        "Bicol is famous for its spicy dishes like Bicol Express, a pork dish cooked in coconut milk and chili peppers.",
    },
    {
      name: "Davao",
      image: "/six/davao.jpg",
      description:
        "Davao is known for its durian fruit and exotic dishes like kinilaw, a raw fish salad marinated in vinegar and spices.",
    },
    {
      name: "Bohol",
      image: "/six/bohol.jpg",
      description:
        "Bohol offers unique delicacies like peanut kisses and calamay, a sticky rice cake made from coconut milk.",
    },
    {
      name: "Quezon City",
      image: "/six/quezon_city.jpg",
      description:
        "Quezon City is a food haven with various food parks, trendy cafes, and restaurants offering a wide range of cuisines.",
    },
    {
      name: "Baguio",
      image: "/six/baguio.jpg",
      description:
        "Baguio is known for its fresh strawberries, colorful street food, and traditional Filipino snacks like ukoy and taho.",
    },
  ];

  return (
    <div className="container">
      <h1>Philippines Best Food Destinations</h1>
      <div className="row">
        {foodDestinations.map((destination, index) => (
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

export default Food;
