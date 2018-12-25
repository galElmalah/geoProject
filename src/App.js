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

      layers: [],
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

  isChecked = layer => this.state.layers.includes(layer);

  onCheckboxClick = ({ target: { value } }) => {
    console.log(value);
    if (this.isChecked(value)) {
      this.setState(prevState => ({
        layers: prevState.layers.filter(layer => layer !== value),
      }));
    } else {
      this.setState(prevState => ({ layers: [...prevState.layers, value] }));
    }
  };
  render() {
    const {
      position,
      description,
      icon,
      temperature,

      layers,
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
              layers={layers}
            />
          </div>
          <section className={'action-panel'}>
            <section className={'weather-data border card'}>
              <h2>Weather Data</h2>
              <p>{`${description}`}</p>
              <p>{`${temperature}`} &deg; Celsisus</p>
              <img
                alt={`${description} icon`}
                className={'icon'}
                src={iconUrl(icon)}
              />
            </section>
            <section className={'add-weather-layer border card'}>
              <h2>Add layers</h2>
              <div className={'layers-wrapper'}>
                <section className={'checkbox-group'}>
                  <Checkbox
                    label={'temperature layer'}
                    value={'temp_new'}
                    onClick={this.onCheckboxClick}
                    isChecked={this.isChecked('temp_new')}
                  />
                  <Checkbox
                    label={'precipitation layer'}
                    value={'precipitation_new'}
                    onClick={this.onCheckboxClick}
                    isChecked={this.isChecked('precipitation_new')}
                  />
                  <Checkbox
                    label={'wind speed'}
                    value={'wind_new'}
                    onClick={this.onCheckboxClick}
                    isChecked={this.isChecked('wind_new')}
                  />
                </section>
                <section className={'checkbox-group'}>
                  <Checkbox
                    label={'Sea level pressure'}
                    value={'pressure_new'}
                    onClick={this.onCheckboxClick}
                    isChecked={this.isChecked('pressure_new')}
                  />
                  <Checkbox
                    label={'clouds layer'}
                    value={'clouds_new'}
                    onClick={this.onCheckboxClick}
                    isChecked={this.isChecked('clouds_new')}
                  />
                </section>
              </div>
            </section>
          </section>
        </main>
      </div>
    );
  }
}

const Checkbox = ({ isChecked, onClick, value, label }) => (
  <span>
    <input
      onClick={onClick}
      type="checkbox"
      value={value}
      checked={isChecked}
    />{' '}
    {label}
  </span>
);

export default App;
