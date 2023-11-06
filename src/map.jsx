import React from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function Maps() {
  const position = { lat: 9.005401, lng: 38.763611 };
  const tatiPositions = [
    { lat: 9.005401, lng: 38.763611, id: 1 },
    { lat: 9.025401, lng: 38.863611, id: 2 },
    { lat: 9.055401, lng: 38.963611, id: 3 },
  ];

  return (
    <APIProvider apiKey="AIzaSyAoSJEs6ztIcy4DhKa3AXvpreEdH3pC3Eg">
      <div style={{ height: "100vh" }}>
        <Map zoom={6} center={position} mapId="363957fd21fa4800">
          {tatiPositions.map((pos) => (
            <AdvancedMarker position={pos} key={pos.id} >
              <Pin background={"gray"} borderColor={"white"} glyphColor={"white"} />
              <InfoWindow>
                <div>
                  <p>This is the info window for marker {pos.id}.</p>
                </div>
              </InfoWindow>
            </AdvancedMarker>
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}

export default Maps;
