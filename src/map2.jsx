import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 9.005401, lng: 38.763611
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: '363957fd21fa4800',
    googleMapsApiKey: "AIzaSyAoSJEs6ztIcy4DhKa3AXvpreEdH3pC3Eg",
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  const markers = [
    { key: 'marker1', position: { lat: 9.005401, lng: 38.763611 } },
    // Add more markers as needed
  ];
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker) => (
        <Marker key={marker.key} position={marker.position} />
      ))}
    </GoogleMap>
  ) : <><p>loading...</p></>
}

export default React.memo(MyComponent)