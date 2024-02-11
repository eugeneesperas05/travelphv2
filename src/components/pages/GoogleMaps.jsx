import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./GoogleMaps.css";

function GoogleMaps(props) {
  const defaultCenter = {
    lat: 14.5995,
    lng: 120.9842,
  };

  const defaultZoom = 5;

  const [userLocation, setUserLocation] = useState(null);

  function handleGetUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(userLocation);
        },
        function () {
          alert("Error: The Geolocation service failed.");
        }
      );
    } else {
      alert("Error: Your browser doesn't support geolocation.");
    }
  }

  const markers = [
    {
      lat: 16.4023,
      lng: 120.596,
      color: "red",
      label: "Baguio",
    },
    {
      lat: 11.2027,
      lng: 119.4179,
      color: "red",
      label: "Palawan El Nido",
    },
    {
      lat: 14.5995,
      lng: 120.9842,
      color: "red",
      label: "Manila",
    },
    {
      lat: 9.8484,
      lng: 126.045,
      color: "red",
      label: "Siargao Island",
    },
    {
      lat: 9.1734,
      lng: 124.7299,
      color: "red",
      label: "Camiguin Island",
    },
    {
      lat: 8.6365,
      lng: 125.967,
      color: "red",
      label: "Enchanted River",
    },
    {
      lat: 8.1663,
      lng: 126.378,
      color: "red",
      label: "Tinuy-an Falls",
    },
    {
      lat: 7.0087,
      lng: 125.2948,
      color: "red",
      label: "Mt. Apo",
    },
    {
      lat: 7.0964,
      lng: 125.757,
      color: "red",
      label: "Samal Island",
    },
    {
      lat: 6.7477,
      lng: 126.189,
      color: "red",
      label: "Dahican Beach",
    },
    {
      lat: 7.9876,
      lng: 124.6889,
      color: "red",
      label: "Asik-Asik Falls",
    },
    {
      lat: 8.4917,
      lng: 126.1183,
      color: "red",
      label: "Britania Island",
    },
    {
      lat: 6.2136,
      lng: 124.605,
      color: "red",
      label: "Lake Sebu",
    },
    {
      lat: 9.0411,
      lng: 123.2577,
      color: "red",
      label: "Apo Island",
    },
    {
      lat: 9.898,
      lng: 123.3806,
      color: "red",
      label: "Kawasan Falls",
    },
    {
      lat: 11.1844,
      lng: 123.746,
      color: "red",
      label: "Bantayan Island",
    },
    {
      lat: 10.3529,
      lng: 124.0075,
      color: "red",
      label: "Canigao Island",
    },
    {
      lat: 9.5481,
      lng: 125.9989,
      color: "red",
      label: "Sohoton Cave",
    },
    {
      lat: 9.4369,
      lng: 123.3341,
      color: "red",
      label: "Osmena Peak",
    },
    {
      lat: 11.229,
      lng: 124.4412,
      color: "red",
      label: "Kelanggaman Island",
    },

    {
      lat: 10.2183,
      lng: 123.7552,
      color: "red",
      label: "Sumilon Island",
    },
    {
      lat: 9.619,
      lng: 124.114,
      color: "red",
      label: "Chocolate Hills",
    },
    {
      lat: 11.9674,
      lng: 121.9189,
      color: "red",
      label: "Boracay Island",
    },
    {
      lat: 12.0499,
      lng: 120.1781,
      color: "red",
      label: "Coron Island",
    },
    {
      lat: 14.7926,
      lng: 122.7137,
      color: "red",
      label: "Anawagin Cove",
    },
    {
      lat: 13.2554,
      lng: 123.6855,
      color: "red",
      label: "Mayon Volcano",
    },
    {
      lat: 18.5618,
      lng: 120.7864,
      color: "red",
      label: "Pagudpud",
    },
    {
      lat: 17.5747,
      lng: 120.3865,
      color: "red",
      label: "Vigan City",
    },
    {
      lat: 20.4541,
      lng: 121.9694,
      color: "red",
      label: "Batanes",
    },
    {
      lat: 16.4023,
      lng: 120.596,
      color: "red",
      label: "Baguio City",
    },
    {
      lat: 16.5919,
      lng: 120.9086,
      color: "red",
      label: "Mount Pulag",
    },
    {
      lat: 17.0823,
      lng: 120.9075,
      color: "red",
      label: "Sagada",
    },
    {
      lat: 16.926,
      lng: 121.0584,
      color: "red",
      label: "Banaue Rice Terraces",
    },
  ];

  if (userLocation) {
    markers.push({
      lat: userLocation.lat,
      lng: userLocation.lng,
      color: "blue",
      label: "You are here",
    });
  }

  return (
    <div
      style={{ height: "800px", width: "100%", position: "relative" }}
      className="mapcont"
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD2R3LDm5jmU1SCGT7e8U1-rGjba0QjlRc" }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            color={marker.color}
            label={marker.label}
          />
        ))}
      </GoogleMapReact>

      <button
        onClick={handleGetUserLocation}
        className="usrbtn"
        style={{ position: "absolute", top: "10px", left: "10px" }}
      >
        My Location
      </button>
    </div>
  );
}

function Marker({ color, label }) {
  return (
    <div
      style={{
        color: "white",
        background: color,
        padding: "5px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        width: "30px",
        height: "30px",
        border: "2px solid white",
      }}
    >
      {label}
    </div>
  );
}

export default GoogleMaps;
