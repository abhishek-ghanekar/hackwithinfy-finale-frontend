import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';

const mapContainerStyle = {
  height: "100vh",
  width: "100%"
};

const center = {
  lat: 51.505,
  lng: -0.09
};

const MapComponent = ({ waypoints }) => {
  const [directions, setDirections] = useState(null);
  const directionsServiceRef = useRef(null);

  useEffect(() => {
    if (!window.google || !window.google.maps || waypoints.length < 2) return;

    const origin = waypoints[0];
    const destination = waypoints[waypoints.length - 1];
    const intermediateWaypoints = waypoints.slice(1, -1).map(point => ({
      location: new window.google.maps.LatLng(point.lat, point.lng),
      stopover: true
    }));

    const request = {
      origin: new window.google.maps.LatLng(origin.lat, origin.lng),
      destination: new window.google.maps.LatLng(destination.lat, destination.lng),
      waypoints: intermediateWaypoints,
      optimizeWaypoints: true, // Enable optimized waypoint order
      travelMode: window.google.maps.TravelMode.DRIVING
    };

    directionsServiceRef.current = new window.google.maps.DirectionsService();
    directionsServiceRef.current.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
      } else {
        console.error(`Error fetching directions ${result}`);
      }
    });
  }, [waypoints]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCjcPhkOxVaX4MwY2gEFvQj1o3Pl7r0rgM">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={13}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

