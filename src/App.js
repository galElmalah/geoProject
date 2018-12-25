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
      isWeatherLayer: false,
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

  onAddWeatherLayer = () => {
    this.setState(prevState => ({ isWeatherLayer: !prevState.isWeatherLayer }));
  };

  render() {
    const {
      position,
      description,
      icon,
      temperature,
      isWeatherLayer,
    } = this.state;
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
              isWeatherLayer={isWeatherLayer}
            />
          </div>
          <section className={'action-panel'}>
            <section className={'weather-data border card'}>
              <h2>Weather Data</h2>
              <p>{`${description}`}</p>
              <p>{`${temperature}`} &deg; Celsisus</p>
              <img className={'icon'} src={iconUrl(icon)} />
            </section>
            <section className={'add-weather-layer'}>
              <button onClick={this.onAddWeatherLayer} className={'btn'}>
                Load weather layer
              </button>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
