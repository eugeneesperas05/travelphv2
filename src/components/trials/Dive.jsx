import React from "react";

const Dive = () => {
  const divingDestinations = [
    {
      name: "Tubbataha Reefs Natural Park",
      image: "/six/tubbataha.jpg",
      description:
        "Located in the Sulu Sea, Tubbataha Reefs Natural Park is a UNESCO World Heritage Site known for its pristine coral reefs and diverse marine life.",
    },
    {
      name: "Apo Island",
      image: "/six/apo_island.jpg",
      description:
        "Apo Island is a small volcanic island in Negros Oriental. It offers breathtaking coral reefs and encounters with sea turtles.",
    },
    {
      name: "Malapascua Island",
      image: "/six/malapascua.jpg",
      description:
        "Malapascua Island is famous for its thresher shark diving and beautiful white sand beaches.",
    },
    {
      name: "Puerto Galera",
      image: "/six/puerto_galera.jpg",
      description:
        "Puerto Galera is a popular diving destination known for its vibrant marine life and numerous dive sites. making it a favorite among underwater photographers.is a popular for its pristine coral reefs and diverse marine life. marine life and numerous dive sites.is a popular diving destination known for its vibrant marine life and numerous dive sites.",
    },
    {
      name: "Coron",
      image: "/six/coron.jpg",
      description:
        "Coron is home to several WWII shipwrecks, making it a prime spot for wreck diving enthusiasts.",
    },
    {
      name: "Anilao",
      image: "/six/anilao.jpg",
      description:
        "Anilao is known for its macro photography opportunities and rich biodiversity, making it a favorite among underwater photographers.",
    },
    {
      name: "Dauin",
      image: "/six/dauin.jpg",
      description:
        "Dauin is renowned for its muck diving and chance to spot rare critters like frogfish and seahorses.",
    },
    {
      name: "Balicasag Island",
      image: "/six/balicasag.jpg",
      description:
        "Balicasag Island offers stunning wall dives and the chance to encounter sea turtles and schools of jacks. chance to spot rare critters like frogfish and seahorses.chance to spot rare critters like frogfish and seahorses.chance to spot rare critters like frogfish and seahorses.",
    },
    {
      name: "Monad Shoal",
      image: "/six/monad_shoal.jpg",
      description:
        "Monad Shoal is famous for its early morning thresher shark sightings and is a bucket-list dive for many.",
    },
    {
      name: "Donsol",
      image: "/six/donsol.jpg",
      description:
        "Donsol is known as the whale shark capital of the world, offering snorkeling and diving experiences with these gentle giants.",
    },
  ];

  return (
    <div className="container">
      <h1>Philippines Best Diving Destinations</h1>
      <div className="row">
        {divingDestinations.map((destination, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-4">
              <img
                src={destination.image}
                className="card-img-top img-fluid"
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

export default Dive;
