import React from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export class MapWrapper extends React.Component {
  render() {
    const { position, onClick, weatherDescription } = this.props;
    return (
      <Map center={position} zoom={13} onClick={onClick}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{weatherDescription}</Popup>
        </Marker>
      </Map>
    );
  }
}
