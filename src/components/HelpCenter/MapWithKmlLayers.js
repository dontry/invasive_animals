import React from "react";
import { compose, withProps, createEventHandler } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer
} from "react-google-maps";

const KmlCode = ["963568", "963569", "963570", "963571", "963572", "963573"];
const MapWithKmlLayers = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCQenkk7CVLbgpk9rDNeoH9TfJycGyFblE&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `40vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={6} defaultCenter={{ lat: -36.4713, lng: 144.7852 }}>
    {KmlCode.map(code => (
      <KmlLayer
        url={`http://global.mapit.mysociety.org/area/${code}.kml`}
        options={{ preserveViewport: true }}
        onClick={props.handleClick}
      />
    ))}
  </GoogleMap>
));

export default MapWithKmlLayers;
