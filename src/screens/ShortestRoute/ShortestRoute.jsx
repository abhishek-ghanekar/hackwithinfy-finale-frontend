import React from 'react'
import  { useState, useEffect, useRef } from 'react';
import MapComponent from '../../components/MapComponent';

const ShortestRoute = () => {
  
    
        const [waypoints, setWaypoints] = useState([
    { lat: 18.684881, lng: 73.720999 },  // Start Point
        { lat: 18.508400, lng: 74.130187 }    // End Point
  ]);

  const addMultipleWaypoints = () => {
    const newWaypoints = [
      { lat: 18.562987, lng: 73.937538 },   // New Waypoint 1
            { lat: 18.508400, lng: 73.778842 }, // New Waypoint 2
           
            {lat:18.660845,lng:74.088112} // New Waypoint 3
    ];

    setWaypoints([...waypoints.slice(0, -1), ...newWaypoints, waypoints[waypoints.length - 1]]);
  };
  return (
    <div>
      <button onClick={addMultipleWaypoints}>Add Multiple Waypoints</button>
      <MapComponent waypoints={waypoints} />
    </div>
  );
}

export default ShortestRoute