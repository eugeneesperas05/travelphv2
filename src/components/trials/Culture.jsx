import React from "react";

const Culture = () => {
  const cultureDestinations = [
    {
      name: "Vigan",
      image: "/six/vigan.jpg",
      description:
        "Vigan is a UNESCO World Heritage Site known for its well-preserved Spanish colonial architecture and cobblestone streets.",
    },
    {
      name: "Intramuros",
      image: "/six/intramuros.jpg",
      description:
        "Intramuros is the historic walled city in Manila that offers a glimpse into the country's colonial past with its Spanish-era buildings and landmarks.",
    },
    {
      name: "Pampanga",
      image: "/six/pampanga1.jpg",
      description:
        "Pampanga is known for its vibrant cultural heritage, traditional festivals like Sinulog, and mouthwatering Kapampangan cuisine.",
    },
    {
      name: "Bohol",
      image: "/six/bohol1.jpg",
      description:
        "Bohol is rich in culture and history, with attractions like the iconic Chocolate Hills and the centuries-old Baclayon Church.",
    },
    {
      name: "Batanes",
      image: "/six/batanes1.jpg",
      description:
        "Batanes is known for its unique Ivatan culture, stone houses, and the annual cultural festival called Vakul-Kanayi.",
    },
    {
      name: "Bacolod",
      image: "/six/bacolod.jpeg",
      description:
        "Bacolod is famous for its vibrant MassKara Festival, a celebration of smiles and local culture held every October.",
    },
    {
      name: "Marawi",
      image: "/six/marawi.jpg",
      description:
        "Marawi is the center of Islamic culture in the Philippines, known for its mosques, traditional crafts, and the annual Eid al-Fitr celebration.",
    },
    {
      name: "Ifugao",
      image: "/six/ifugao.jpg",
      description:
        "Ifugao is home to the Banaue Rice Terraces, a UNESCO World Heritage Site, and showcases the unique cultural heritage of the Ifugao people.",
    },
    {
      name: "Zamboanga City",
      image: "/six/zamboanga_city.jpg",
      description:
        "Zamboanga City is known for its vibrant Chavacano language, colorful vintas (traditional boats), and the Zamboanga Hermosa Festival.",
    },
    {
      name: "Davao",
      image: "/six/davao2.jpg",
      description:
        "Davao is a melting pot of cultures and is home to various indigenous groups, showcasing their traditions, dances, and rituals.",
    },
  ];

  return (
    <div className="container">
      <h1>Philippines Best Cultural Destinations</h1>
      <div className="row">
        {cultureDestinations.map((destination, index) => (
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

export default Culture;
