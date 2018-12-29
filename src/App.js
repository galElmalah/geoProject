import React, { Component } from 'react';
import './App.css';
import { MapWrapper } from './Map';
import { fetchWeather, fetchWeatherByCountry } from './weatherService';

const iconUrl = id => `http://openweathermap.org/img/w/${id}.png`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [32.0853, 34.7818],
      cityName: "",
      icon: '',
      description: '',
      temperature: 0,
      layers: [],
      inputUserCountry: "",
      inputUserCity: "",
      arrWeatherData: []
    };
  }

  componentDidMount() {
    const [lat, lng] = this.state.position;
    fetchWeather(lat, lng).then(res => {
      const arrUpdated = this.getUpdatedArray(res.currentElementDetails);
      this.setState({ ...res, arrWeatherData: arrUpdated });
    });
  }

  onMapClick = async ({ latlng: { lat, lng } }) => {
    fetchWeather(lat, lng).then(res => {
      const arrUpdated = this.getUpdatedArray(res.currentElementDetails);
      this.setState({ ...res, arrWeatherData: arrUpdated});
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

  onChangeCountry = e => {
    this.setState({inputUserCountry: e.target.value})
    console.log(this.state.inputUserCountry);
  }
  onChangeCity = e => {
    this.setState({inputUserCity: e.target.value})
    console.log(this.state.inputUserCity);
  }

  searchByPlace = () => {
    fetchWeatherByCountry(this.state.inputUserCountry, this.state.inputUserCity).then(res => {
      const arrUpdated = this.getUpdatedArray(res.currentElementDetails);
      this.setState({ ...res, inputUserCountry :"", inputUserCity:"", arrWeatherData: arrUpdated});
    });
  }

  getUpdatedArray = (data) => {
    const newArray = this.state.arrWeatherData;
    newArray.push(data);
    return newArray;
  }

  render() {
    const {
      position,
      description,
      icon,
      temperature,
      cityName,
      layers,
      arrWeatherData
    } = this.state;
    const rowTables = arrWeatherData.map((weather, index) => {
      return (
          <tr key = {index}>
            <td data-title="City Name">{weather.cityName}</td>
            <td data-title="Degree">{weather.currentTemp}</td>
            <td data-title="Icon">{<img
                alt={`${description} icon`}
                className={'iconSmall'}
                src={iconUrl(weather.icon)}
                />}</td>
            <td data-title="Description">{weather.description}</td>
            <td data-title="Humidity">{weather.humidity}</td>
            <td data-title="Pressure">{weather.pressure}</td>
          </tr>
        
      )
    })

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
              <p>{`${cityName}`}</p>
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
            <section className={"card border input-container"}>
              <div className={"input-user"}>
                 <span className="spanInput">country:</span><input value={this.state.inputUserCountry} onChange={this.onChangeCountry} 
                    className="input" id={"countryInput"}/>
                  <span className="spanInput">city:</span><input value={this.state.inputUserCity} required={true}
                     onChange={this.onChangeCity} className="input" id={"cityInput"}/>
                  <button className="btn" onClick={this.searchByPlace}>Search</button>
                </div>
            </section>
          </section>
          <div className={"info-container"}>

          <table className="responsive-table">
            <thead>
              <tr>
                <th scope="col">City name</th>
                <th scope="col">Degree</th>
                <th scope="col">Icon</th>
                <th scope="col">Description</th>
                <th scope="col">Humidity</th>
                <th scope="col">Pressure</th>
              </tr>
            </thead>
            <tbody>
              {rowTables}
            </tbody>
          </table>
        </div>
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
