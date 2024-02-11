import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const TravelInspirationPage = () => {
  const destinations = [
    {
      name: "Palawan",
      image: "/travelinspiration/palawan.png",
      attractions: "Beaches, Underground River, El Nido",
      culture: "Filipino",
      landmarks:
        "Puerto Princesa Subterranean River National Park, Bacuit Archipelago",
      activities: "Island hopping, Snorkeling, Kayaking",
      tips: "Explore Coron's shipwrecks, Visit the Tubbataha Reefs Natural Park, Best climate to enjoy the weekends",
    },
    {
      name: "Bohol",
      image: "/travelinspiration/bohol.png",
      attractions: "Chocolate Hills, Tarsier Sanctuary, Panglao Island",
      culture: "Filipino",
      landmarks: "Blood Compact Shrine, Baclayon Church, Loboc River",
      activities: " River cruise, Stand-up paddleboarding, Dolphin watching",
      tips: "Take a Loboc River cruise during lunchtime to enjoy a buffet meal while cruising, visit the Man-made Forest for a unique photo opportunity.",
    },
    {
      name: "Cebu",
      image: "/travelinspiration/cebu.png",
      attractions:
        "Kawasan Falls, Magellan's Cross, Oslob Whale Shark Watching",
      culture: "Filipino",
      landmarks:
        "Basilica Minore del Santo Niño, Fort San Pedro, Lapu-Lapu Shrine",
      activities:
        "Canyoneering in Badian, Island hopping in Mactan, Visit the Sirao Flower Farm",
      tips: "Try the famous lechon (roasted pig) in Cebu City, explore the vibrant nightlife in Mango Square.",
    },
    {
      name: "Ilocos Norte",
      image: "/travelinspiration/ilocos.png",
      attractions:
        "Paoay Sand Dunes, Bangui Wind Farm, Cape Bojeador Lighthouse",
      culture: "Filipino",
      landmarks:
        "Paoay Church, Malacañang of the North, Marcos Museum and Mausoleum",
      activities: "Sandboarding, Kite flying, Visit the La Paz Sand Dunes",
      tips: "Try the famous Ilocos empanada, explore the historical streets of Vigan City.",
    },
  ];

  const travelStories = [
    {
      title: "Island Hopping Adventure in the Philippines",
      author: "Efren Red",
      content:
        "Imagine turquoise waters, pristine beaches, and a tropical paradise like no other. My journey through the Philippines took me on an unforgettable island hopping adventure. Starting from the stunning El Nido in Palawan, I hopped from one island to another, each more breathtaking than the last. I explored hidden lagoons, swam in crystal-clear waters, and sunbathed on powdery white sands. The highlight of my trip was visiting the famous Kayangan Lake, known for its jaw-dropping beauty. As I kayaked through its emerald waters and hiked up to a viewpoint, I was rewarded with panoramic views that left me speechless. The Philippines truly is a haven for beach lovers and adventurers alike.",
    },
    {
      title:
        "Diving Into Paradise: Exploring the Underwater Wonders of the Philippines",
      author: "Manny Pacquiao",
      content:
        "Embarking on a scuba diving adventure in the Philippines was a dream come true. The archipelago boasts some of the world's most diverse marine ecosystems, and I had the privilege of exploring them firsthand. From the vibrant coral reefs of Apo Island to the breathtaking Tubbataha Reefs Natural Park, every dive offered a mesmerizing spectacle of colorful fish, graceful sea turtles, and intricate coral formations. One unforgettable moment was encountering a school of majestic whale sharks in Oslob. Swimming alongside these gentle giants was an awe-inspiring experience that will forever be etched in my memory.",
    },
    {
      title:
        "Chasing Waterfalls: Discovering Nature's Hidden Gems in the Philippines",
      author: "Ted Failon",
      content:
        "My journey through the Philippines led me on an enchanting quest to discover its hidden waterfalls. From the cascading beauty of Kawasan Falls in Cebu to the mystical Ditumabo Falls in Aurora, each waterfall captured my heart with its unique charm. I trekked through lush forests, crossed rickety bamboo bridges, and swam in refreshing turquoise pools beneath the falls' thunderous roar. The serenity and natural beauty of these hidden gems provided a much-needed escape from the bustling city life. Exploring the waterfalls of the Philippines awakened my sense of adventure and deepened my appreciation for the wonders of nature.",
    },
    {
      title: "A Journey Back in Time: Immersing in History in the Philippines",
      author: "Ligaya Joy Happy",
      content:
        "Stepping into the rich historical tapestry of the Philippines was like entering a time portal to the past. From the ancient Spanish colonial architecture of Intramuros in Manila to the well-preserved heritage town of Vigan, I found myself captivated by the country's storied past. I walked the same streets as national heroes, visited centuries-old churches, and marveled at the intricate details of ancestral houses. The historical sites, such as Fort Santiago and Corregidor Island, served as poignant reminders of the nation's struggle for independence. Immersing myself in the history of the Philippines was not only educational but also deeply moving, allowing me to connect with the vibrant spirit of its people.",
    },
  ];

  const itineraries = [
    {
      title: "Island Paradise Escapade: A Week of Beach Bliss",
      days: [
        {
          day: "Day 1",
          activities: "Arrive in Manila, Explore Intramuros",
        },
        {
          day: "Day 2",
          activities: "Fly to Palawan, Explore El Nido",
        },
        {
          day: "Day 3",
          activities: "Island hopping in Bacuit Archipelago",
        },
        {
          day: "Day 4",
          activities: "Visit the Underground River in Puerto Princesa",
        },
        {
          day: "Day 5",
          activities: "Relax and enjoy the beaches of Coron",
        },
        {
          day: "Day 6",
          activities: "Explore the shipwrecks of Coron",
        },
        {
          day: "Day 7",
          activities: "Snorkel and swim in Kayangan Lake",
        },
      ],
    },
    {
      title: "Nature's Bounty: A Week of Adventure and Wildlife Encounters",
      days: [
        {
          day: "Day 1",
          activities: "Arrive in Manila, Explore Intramuros",
        },
        {
          day: "Day 2",
          activities: "Fly to Bohol, Visit the Chocolate Hills",
        },
        {
          day: "Day 3",
          activities: "Explore the Tarsier Sanctuary",
        },
        {
          day: "Day 4",
          activities: "Go canyoneering at Kawasan Falls in Cebu",
        },
        {
          day: "Day 5",
          activities: "Trek to Mount Pinatubo in Tarlac",
        },
        {
          day: "Day 6",
          activities:
            "Discover the marine biodiversity in Tubbataha Reefs Natural Park",
        },
        {
          day: "Day 7",
          activities: "Relax on the beaches of Boracay",
        },
      ],
    },
    {
      title:
        "Cultural Immersion: Unveiling the Rich Heritage of the Philippines",
      days: [
        {
          day: "Day 1",
          activities: "Arrive in Manila, Explore Intramuros",
        },
        {
          day: "Day 2",
          activities: "Visit the Heritage Town of Vigan",
        },
        {
          day: "Day 3",
          activities: "Experience the Ati-Atihan Festival in Kalibo, Aklan",
        },
        {
          day: "Day 4",
          activities: "Explore the ruins of Bacolod",
        },
        {
          day: "Day 5",
          activities: "Discover the Rice Terraces in Banaue",
        },
        {
          day: "Day 6",
          activities: "Immerse in the culture of Sagada",
        },
        {
          day: "Day 7",
          activities: "Experience the Sinulog Festival in Cebu",
        },
      ],
    },
    {
      title: "Thrills and Spills: A Week of Adventure in the Philippines",
      days: [
        {
          day: "Day 1",
          activities: "Arrive in Manila, Explore Intramuros",
        },
        {
          day: "Day 2",
          activities: "Go surfing in Siargao",
        },
        {
          day: "Day 3",
          activities: "Try canyoneering at Kawasan Falls in Cebu",
        },
        {
          day: "Day 4",
          activities: "Go trekking in Mount Pulag, Benguet",
        },
        {
          day: "Day 5",
          activities:
            "Experience the adrenaline rush of whitewater rafting in Cagayan de Oro",
        },
        {
          day: "Day 6",
          activities: "Explore the caves of Sagada",
        },
        {
          day: "Day 7",
          activities: "Zip line across the Chocolate Hills in Bohol",
        },
      ],
    },
  ];

  const hiddenGems = [
    {
      name: "Oslob, Cebu",
      image: "/travelinspiration/4.png",
      description:
        "Experience an unforgettable encounter with gentle giants at Oslob, Cebu. This hidden gem is renowned for its unique opportunity to swim with whale sharks, also known as 'butanding.' Dive into the crystal-clear waters and witness these magnificent creatures up close in their natural habitat. As you snorkel or scuba dive alongside these gentle giants, their sheer size and grace.",
    },
    {
      name: "Dahican Beach, Philippines",
      image: "/travelinspiration/batad.png",
      description:
        "Discover the unspoiled beauty of Dahican Beach, a hidden gem along the coast of Mindanao. With its long stretch of powdery white sand, azure waters, and picturesque surroundings, it offers the perfect setting for relaxation and water activities like surfing, skimboarding, and snorkeling. Immerse yourself in the laid-back beach vibes and enjoy breathtaking sunsets.",
    },
    {
      name: "Malapascua Island, Philippines",
      image: "/travelinspiration/malapascua.png",
      description:
        "Escape to the enchanting Malapascua Island, renowned for its pristine beaches, vibrant coral reefs, and diverse marine life. Immerse yourself in the underwater paradise by snorkeling or scuba diving and have a chance to encounter thresher sharks. Explore the island's charming villages, interact with the friendly locals, and experience the island's tranquility and natural beauty.",
    },
    {
      name: "Camiguin Island, Philippines",
      image: "/travelinspiration/camiguin.png",
      description:
        "Uncover the hidden gem of Camiguin Island, known as the 'Island Born of Fire.' Experience the island's unique attractions, including hot springs, waterfalls, and volcanic landscapes. Dive into the crystal-clear waters and explore the vibrant coral reefs surrounding the island. Visit the iconic Sunken Cemetery and the breathtaking White Island.",
    },
  ];

  return (
    <Container className="my-5">
      <h1>Travel Inspiration</h1>

      <h2>Destination Guides</h2>
      <Row className="my-5">
        {destinations.map((destination, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <Card.Img
                variant="top"
                src={destination.image}
                alt={destination.name}
              />
              <Card.Body>
                <Card.Title>{destination.name}</Card.Title>
                <Card.Text>
                  <strong>Attractions:</strong> {destination.attractions}
                  <br />
                  <strong>Culture:</strong> {destination.culture}
                  <br />
                  <strong>Landmarks:</strong> {destination.landmarks}
                  <br />
                  <strong>Activities:</strong> {destination.activities}
                  <br />
                  <strong>Tips:</strong> {destination.tips}
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2>Travel Stories</h2>
      <Row className="my-5">
        {travelStories.map((story, index) => (
          <Col className="my-2" xs={12} sm={6} key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{story.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  By {story.author}
                </Card.Subtitle>
                <Card.Text>{story.content}</Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2>Itineraries</h2>
      <Row className="my-5">
        {itineraries.map((itinerary, index) => (
          <Col className="ItinerariesCol" xs={12} sm={12} key={index}>
            <Card>
              <Card.Body className="p-5">
                <Card.Title className="d-flex justify-content-center text-primary">
                  {itinerary.title}
                </Card.Title>
                <ul>
                  {itinerary.days.map((day, dayIndex) => (
                    <p key={dayIndex}>
                      <strong>{day.day}</strong>: {day.activities}
                    </p>
                  ))}
                </ul>
                <div className="d-flex justify-content-center">
                  <Button variant="primary">View Itinerary</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2>Hidden Gems</h2>
      <Row className="my-5">
        {hiddenGems.map((gem, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <Card.Img variant="top" src={gem.image} alt={gem.name} />
              <Card.Body>
                <Card.Title>{gem.name}</Card.Title>
                <Card.Text>{gem.description}</Card.Text>
                <Button variant="primary">Discover</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Add more sections for other content */}
    </Container>
  );
};

export default TravelInspirationPage;
