import React from 'react';
import config from '../config';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export class MapWrapper extends React.Component {
  render() {
    const {
      position,
      onClick,
      weatherDescription,
      isWeatherLayer,
    } = this.props;
    return (
      <Map center={position} zoom={isWeatherLayer ? 6 : 13} onClick={onClick}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {isWeatherLayer && (
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${
              config.apiKey
            }`}
          />
        )}

        <Marker position={position}>
          <Popup>{weatherDescription}</Popup>
        </Marker>
      </Map>
    );
  }
}
