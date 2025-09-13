import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Dhaka coordinates as center point
const centerPosition = [23.685, 90.3563];
// Helper component to fly to a location
const FlyTo = ({ district }) => {
  const map = useMap();
  if (district) {
    map.flyTo([district.latitude, district.longitude], 10, { duration: 2 });
  }
  return null;
};

const BangladeshMap = ({ serviceCenters }) => {

  const [search, setSearch] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    // find district (ignore case + partial match)
    const found = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(search.toLowerCase())
    );

    if (found) {
      setSelectedDistrict(found);
    } else {
      alert("District not found!");
    }
  };
  return (
    <div className="h-[500px] w-full relative">
      <form
        onSubmit={handleSearch}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] bg-white shadow rounded flex px-2 py-1"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search district..."
          className="outline-none px-2 py-1 text-sm"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-600 text-white px-3 rounded"
        >
          Go
        </button>
      </form>
      {/* map container */}
      <MapContainer
        center={centerPosition}
        zoom={7}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg shadow-lg"
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        {/* Move map when search happens */}
        {selectedDistrict && <FlyTo district={selectedDistrict} />}

        {/* Example Marker (Dhaka) */}
        {serviceCenters.map((center, index) => (
          <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>
              <strong className="font-bold">{center.district}</strong>
              <br />
              {center.covered_area.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
