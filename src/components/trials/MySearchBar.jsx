import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormControl,
  InputGroup,
  Button,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./MySearchBar.css";

const initialCards = [
  {
    title: "Banaue Rice Terraces",
    imageSrc: "/luzon/Banaue.png",
    description:
      "Banaue is a captivating town located in the Ifugao province of the Philippines. It is situated in the mountainous region of Luzon, about 350 kilometers north of Manila, the capital city of the Philippines. Banaue is famous for its stunning rice terraces, which are considered one of the greatest engineering feats of ancient times and a UNESCO World Heritage Site.",
    route: "/Banaue",
  },
  {
    title: "Sagada",
    imageSrc: "/luzon/sagada.png",
    description:
      "Sagada is a charming town nestled in the Mountain Province of the Philippines. It is located in the northern part of Luzon, approximately 275 kilometers north of Manila. Sagada is renowned for its picturesque landscapes, breathtaking views, and unique cultural experiences, making it a popular tourist destination.",
    route: "/Sagada",
  },
  {
    title: "Mount Pulag",
    imageSrc: "/luzon/pulag.png",
    description:
      "Mount Pulag is renowned for its stunning natural beauty, biodiversity, and as a prime destination for hikers and nature enthusiasts. It stands at an elevation of 2,926 meters (9,600 feet) above sea level and is known for its majestic sea of clouds and breathtaking sunrise views.",
    route: "/MountPulag",
  },
  {
    title: "Baguio City",
    imageSrc: "/luzon/bag4.png",
    description:
      "Baguio City, located in the northern part of the Philippines, is a renowned tourist destination. Situated in the province of Benguet, within the Cordillera Central mountain range, it is approximately 250 kilometers north of Manila, the capital city of the Philippines. Baguio City is known for its cool climate, scenic landscapes, and vibrant culture.",
    route: "/Baguio",
  },
  {
    title: "Batanes",
    imageSrc: "/luzon/batanes.png",
    description:
      "Batanes is a stunning group of islands located in the northernmost part of the Philippines. It is the smallest province in terms of land area and population, consisting of three main islands: Batan, Sabtang, and Itbayat. Known for its unspoiled beauty and unique cultural heritage, Batanes is often referred to as the Home of the Winds due to its picturesque landscapes and strong gusts of wind that sweep across the islands.",
    route: "/Batanes",
  },
  {
    title: "Vigan City",
    imageSrc: "/luzon/vigan.png",
    description:
      "Vigan is a historic city located in the province of Ilocos Sur in the Philippines. It is situated in the northern part of Luzon, approximately 400 kilometers north of Manila, the capital city of the Philippines. Vigan is renowned for its well-preserved Spanish colonial architecture and is recognized as a UNESCO World Heritage Site.",
    route: "/Vigan",
  },
  {
    title: "Pagudpud",
    imageSrc: "/luzon/pagudpud.png",
    description:
      "Pagudpud is a captivating coastal town located in the province of Ilocos Norte, in the northern part of the Philippines. Situated at the northernmost tip of Luzon Island, Pagudpud is renowned for its pristine beaches, crystal-clear waters, and scenic landscapes. It offers a tranquil and picturesque destination for travelers seeking natural beauty and relaxation.",
    route: "/Pagudpud",
  },
  {
    title: "Mayon Volcano",
    imageSrc: "/luzon/mayon.png",
    description:
      "Mayon Volcano is a renowned natural landmark located in the province of Albay, in the Bicol Region of the Philippines. It is considered one of the most beautiful and iconic volcanoes in the country, known for its nearly perfect cone shape and majestic presence.",
    route: "/Mayon",
  },
  {
    title: "Anawangin Cove",
    imageSrc: "/luzon/anawangin.png",
    description:
      "Anawangin Cove is a hidden gem located in the province of Zambales, in the Philippines. It is a picturesque beach destination that has gained popularity among nature enthusiasts and campers. Anawangin Cove is known for its pristine shores, crystal-clear waters, and unique landscape.",
    route: "/Anawangin",
  },
  {
    title: "Coron",
    imageSrc: "/luzon/coron.png",
    description:
      "Coron is a breathtaking island destination located in the province of Palawan in the Philippines. It is part of the Calamian Islands and is known for its stunning natural beauty, pristine beaches, and vibrant underwater world. Coron is a popular choice for travelers seeking a combination of relaxation, adventure, and awe-inspiring landscapes.",
    route: "/Coron",
  },
  {
    title: "Boracay",
    imageSrc: "/visayas/boracay.png",
    description:
      "Boracay is a world-famous island paradise located in the Western Visayas region of the Philippines. It is known for its powdery white sand beaches, crystal-clear turquoise waters, and vibrant nightlife. Boracay attracts millions of visitors each year and is renowned for its stunning beauty and array of activities.",
    route: "/Boracay",
  },
  {
    title: "Chocolate Hills",
    imageSrc: "/visayas/chocolate.png",
    description:
      "The Chocolate Hills are a famous geological formation located in the province of Bohol in the Philippines. It is one of the country's most iconic natural wonders and a popular tourist attraction. The Chocolate Hills are a collection of over 1,200 uniformly shaped hills spread across an area of more than 50 square kilometers.",
    route: "/Chocolate",
  },
  {
    title: "Sumilon Island",
    imageSrc: "/visayas/sumilon.png",
    description:
      "Sumilon Island is a stunning island located in the province of Cebu in the Philippines. It is known for its pristine white sand beaches, crystal-clear turquoise waters, and vibrant marine life. Sumilon Island is a popular destination for beach lovers, snorkelers, and divers.",
    route: "/Sumilon",
  },
  {
    title: "Kalanggaman Island",
    imageSrc: "/visayas/kalanggaman.png",
    description:
      "Kalanggaman Island is a stunning tropical paradise located in the province of Leyte in the Philippines. It is renowned for its pristine white sand beach, crystal-clear turquoise waters, and picturesque sandbars. Kalanggaman Island is a popular destination for beach lovers, snorkelers, and campers.",
    route: "/Kalanggaman",
  },
  {
    title: "Osmena Peak",
    imageSrc: "/visayas/osmena.png",
    description:
      "Osmena Peak it is a popular hiking destination located in Dalaguete, Cebu, Philippines. Osmena Peak is the highest point in the province of Cebu, standing at an elevation of approximately 1,013 meters above sea level. It offers stunning panoramic views of the surrounding landscapes, including lush green hills and nearby islands.",
    route: "/Osmena",
  },
  {
    title: "Sohoton",
    imageSrc: "/visayas/sohoton.png",
    description:
      "Sohoton is a scenic and enchanting natural attraction located in the municipality of Basey, Samar in the Philippines. It is known for its stunning limestone cliffs, mystical caves, and serene river systems. Sohoton is a popular destination for eco-adventurers and nature lovers.",
    route: "/Sohoton",
  },
  {
    title: "Canigao Island",
    imageSrc: "/visayas/canigao.png",
    description:
      "Canigao Island is a beautiful and secluded island located off the coast of Matalom, Leyte in the Philippines. It is a popular destination for beach lovers and nature enthusiasts who seek a tranquil and pristine tropical getaway.",
    route: "/Canigao",
  },
  {
    title: "Bantayan Island",
    imageSrc: "/visayas/bantayan.png",
    description:
      "Bantayan Island is a captivating tropical paradise located in the province of Cebu, Philippines. It is known for its stunning white sand beaches, turquoise waters, and laid-back atmosphere. Bantayan Island is a popular destination for beach lovers, snorkelers, and those seeking a serene island getaway.",
    route: "/Bantayan",
  },
  {
    title: "Kawasan Falls",
    imageSrc: "/visayas/kawasan.png",
    description:
      "Kawasan Falls is a renowned natural attraction located in Badian, Cebu, Philippines. It is a series of cascading waterfalls nestled in the lush jungle of the southern part of Cebu Island. Kawasan Falls is known for its turquoise blue waters, scenic surroundings, and refreshing atmosphere.",
    route: "/Kawasan",
  },
  {
    title: "Apo Island",
    imageSrc: "/visayas/apoisland.png",
    description:
      "Apo Island is a stunning island located in the province of Negros Oriental, Philippines. It is renowned for its pristine coral reefs, diverse marine life, and beautiful coastal landscapes. Apo Island is a popular destination for snorkelers, divers, and nature enthusiasts.",
    route: "/ApoIsland",
  },
  {
    title: "Siargao",
    imageSrc: "/mindanao/siargao.png",
    description:
      "Siargao is a beautiful tropical island located in the province of Surigao del Norte in the Philippines. It is known for its stunning beaches, world-class surf breaks, and vibrant island atmosphere. Siargao has gained international recognition as a top surfing destination and has become increasingly popular among travelers seeking adventure and natural beauty.",
    route: "/Siargao",
  },
  {
    title: "Camiguin",
    imageSrc: "/mindanao/camiguin.png",
    description:
      "Camiguin is a captivating island province located in the northern part of Mindanao, Philippines. Known as the 'Island Born of Fire,' Camiguin is renowned for its stunning natural attractions, volcanic landscapes, and rich cultural heritage. Despite being one of the smallest provinces in the country, Camiguin offers a diverse range of activities and sights for visitors to enjoy.",
    route: "/Camiguin",
  },
  {
    title: "Enchanted River",
    imageSrc: "/mindanao/enchanted.png",
    description:
      "Enchanted River is a mystical and enchanting attraction located in the municipality of Hinatuan, Surigao del Sur, in the Philippines. It is a deep blue river with crystal-clear waters that captivates visitors with its beauty and allure. Enchanted River is known for its fascinating color and the belief that it is home to mythical creatures.",
    route: "/Enchanted",
  },
  {
    title: "Tinuy-an Falls",
    imageSrc: "/mindanao/tinuy.png",
    description:
      "Tinuy-an Falls is a stunning waterfall located in Bislig City, Surigao del Sur, Philippines. It is often referred to as the 'Niagara Falls of the Philippines' due to its wide curtain-like cascade and impressive height. Tinuy-an Falls is considered one of the most breathtaking natural wonders in the country.",
    route: "/Tinuy",
  },
  {
    title: "Mount Apo",
    imageSrc: "/mindanao/mountapo.png",
    description:
      "Mount Apo is the highest mountain in the Philippines, standing at an elevation of 2,954 meters (9,692 feet) above sea level. Located in Mindanao, specifically in the provinces of Davao del Sur and North Cotabato, Mount Apo is a popular destination for hikers, mountaineers, and nature enthusiasts.",
    route: "/MountApo",
  },
  {
    title: "Samal Island",
    imageSrc: "/mindanao/samal.png",
    description:
      "Samal Island, also known as the Island Garden City of Samal, is a beautiful island located off the coast of Davao City in the southern part of the Philippines. It is known for its pristine beaches, clear turquoise waters, and lush natural surroundings. Samal Island is a popular destination for beach lovers, water sports enthusiasts, and those seeking a peaceful retreat.",
    route: "/Samal",
  },
  {
    title: "Dahican Beach",
    imageSrc: "/mindanao/dahican.png",
    description:
      "Dahican Beach is a picturesque stretch of coastline located in Mati City, Davao Oriental, Philippines. It is known for its long shoreline, pristine white sand, and beautiful turquoise waters. Dahican Beach is a popular destination for beach lovers, surfers, and nature enthusiasts.",
    route: "/Dahican",
  },
  {
    title: "Asik-Asik Falls",
    imageSrc: "/mindanao/asik.png",
    description:
      "Asik-Asik Falls is a breathtaking waterfall located in Upper Dado, Alamada, Cotabato, Philippines. It is a hidden gem tucked amidst the lush landscapes of Mindanao. Asik-Asik Falls is known for its unique and stunning curtain-like formation, with water cascading down a wall of foliage.",
    route: "/Asik",
  },
  {
    title: "Britania Group of Islands",
    imageSrc: "/mindanao/britania.png",
    description:
      "Britania Group of Islands, also known as Britania Islands, is a cluster of beautiful islands and islets located in San Agustin, Surigao del Sur, Philippines. It is renowned for its pristine white sand beaches, crystal-clear turquoise waters, and scenic limestone rock formations. Britania Islands is a popular destination for beach lovers, island hoppers, and snorkelers.",
    route: "/Britania",
  },
  {
    title: "Lake Sebu",
    imageSrc: "/mindanao/lake.png",
    description:
      "Lake Sebu is a scenic and culturally rich destination located in the municipality of Lake Sebu, South Cotabato, Philippines. It is a natural lake nestled in the picturesque mountains of the Allah Valley region. Lake Sebu is known for its tranquil surroundings, lush landscapes, and rich indigenous culture.",
    route: "/Lake",
  },
  // Add more cards as needed
];

function MySearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [error, setError] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filtered = initialCards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length === 0) {
      setError(true);
    } else {
      setError(false);
      setFilteredCards(filtered);
    }
  };

  return (
    <>
      <Container className="my-5">
        <Form onSubmit={handleSearchSubmit} className="mb-3">
          <InputGroup>
            <FormControl
              className="text-primary"
              type="text"
              placeholder="Search by City"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <InputGroup.Text>
              <BsSearch />
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Container>

      <Container className="errMsg1">
        {error ? (
          <div className="errMsg text-danger">
            No Destination Found, Try again.
          </div>
        ) : (
          <Row xs={1} md={2} lg={2} className="g-4">
            {filteredCards.map((card, index) => (
              <Col key={index}>
                <Card style={{ display: searchTerm ? "block" : "none" }}>
                  <Card.Img variant="top" src={card.imageSrc} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Link to={card.route}>
                      <Button variant="primary">Learn More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default MySearchBar;
