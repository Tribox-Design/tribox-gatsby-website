import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { MapContainer, TileLayer, ZoomControl, Marker } from 'react-leaflet';
import styled from 'styled-components'

const isDomAvailable = typeof window !== 'undefined';
const latitude = 10.3292880;
const longitude = 123.9069951;
const CENTER = [latitude, longitude];

if ( isDomAvailable ) {
  // To get around an issue with the default icon not being set up right between using React
  // and importing the leaflet library, we need to reset the image imports
  // See https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require( 'leaflet/dist/images/marker-icon-2x.png' ),
    iconUrl: require( 'leaflet/dist/images/marker-icon.png' ),
    shadowUrl: require( 'leaflet/dist/images/marker-shadow.png' )
  });
}

const Map = ({ children }) => {
  if ( !isDomAvailable ) {
    return (
      <MapParent>
        <MapLoadingText>Loading map...</MapLoadingText>
      </MapParent>
    );
  }

  const mapSettings = {
    scrollWheelZoom: false,
    zoomControl: false,
    center: CENTER,
    zoom: 17,
    minZoom: 10
  };
  return (
    <MapParent>
      <TriboxMapContainer {...mapSettings}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <ZoomControl position="bottomright" />
        <Marker position={CENTER} />
        { children }
      </TriboxMapContainer>
    </MapParent>
  );
};

Map.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultBaseMap: PropTypes.string,
  mapEffect: PropTypes.func,
};

export default Map;

const MapParent = styled.div`
  position: relative;
`

const MapLoadingText = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #424242;
  width: 100%;
  height: 4em;
  line-height: 4em;
  text-align: center;
  margin: auto;
`

const TriboxMapContainer = styled(MapContainer)`
  width: 99vw;
  height: 60vh;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 35vh;
  }
`