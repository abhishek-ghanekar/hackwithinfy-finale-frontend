import React, { useEffect } from 'react';

const RouteComponent = () => {
    useEffect(() => {
        // Example JSON object received
        const routeData = {
            "final_latitude": 18.536207,
            "final_longitude": 73.893974,
            "initial_latitude": 18.496668,
            "initial_longitude": 73.941666,
            "waypoints": [
                {
                    "latitude": 18.562987,
                    "longitude": 73.937538
                },
                {
                    "latitude": 18.508400,
                    "longitude": 73.778842
                },
                {
                    "latitude": 18.561588,
                    "longitude": 73.937538
                }
            ]
        };

        // Extract the start, end, and waypoints
        const start = {
            lat: parseFloat(routeData.initial_latitude),
            lng: parseFloat(routeData.initial_longitude)
        };

        const end = {
            lat: parseFloat(routeData.final_latitude),
            lng: parseFloat(routeData.final_longitude)
        };

        const waypoints = routeData.waypoints.map(point => ({
            location: { lat: parseFloat(point.latitude), lng: parseFloat(point.longitude) },
            stopover: true
        }));

        console.log('Start:', start);
        console.log('End:', end);
        console.log('Waypoints:', waypoints);

        const loadScript = (url) => {
            const script = document.createElement('script');
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        };

        const initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: start,
                zoom: 10
            });

            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();

            directionsRenderer.setMap(map);

            directionsService.route(
                {
                    origin: start,
                    destination: end,
                    waypoints: waypoints,
                    optimizeWaypoints: true,
                    travelMode: window.google.maps.TravelMode.DRIVING
                },
                (response, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        directionsRenderer.setDirections(response);
                    } else {
                        console.error(`Directions request failed due to ${status}`);
                    }
                }
            );
        };

        loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyCjcPhkOxVaX4MwY2gEFvQj1o3Pl7r0rgM&callback=initMap`);

        window.initMap = initMap;

        return () => {
            const scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');
            scripts.forEach(script => script.remove());
        };
    }, []);

    return <div id="map" style={{ height: '100vh', width: '100%' }} />;
};

export default RouteComponent;
