import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MapWrapper } from './Map';
import { fetchWeather } from './weatherService';

const iconUrl = id => `http://openweathermap.org/img/w/${id}.png`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [32.0853, 34.7818],
      icon: '',
      description: '',
      temperature: 0,
    };
  }

  componentDidMount() {
    const [lat, lng] = this.state.position;
    fetchWeather(lat, lng).then(res => {
      this.setState({ ...res });
    });
  }

  onMapClick = async ({ latlng: { lat, lng } }) => {
    fetchWeather(lat, lng).then(res => {
      this.setState({ ...res });
    });
    this.setState({ position: [lat, lng] });
  };

  render() {
    const { position, description, icon, temperature } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Geo weather app!</h1>
        </header>
        <main>
          <div className={'map-wrapper border'}>
            <MapWrapper
              position={position}
              onClick={this.onMapClick}
              weatherDescription={description}
            />
          </div>
          <section className={'weather-data border'}>
            <h2>Weather Data</h2>
            <p>{`${description}`}</p>
            <p>{`${temperature}`} &deg; Celsisus</p>
            <img className={'icon'} src={iconUrl(icon)} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
